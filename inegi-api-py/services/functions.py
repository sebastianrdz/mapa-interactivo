import re
from unicodedata import normalize
from services.intent import get_radio, get_quantity, get_by_place
from db.inegiDB import es_nlp, nlp
from spa2num.converter import to_number
from schemas.intent import IntentPlace, IntentQuantity, IntentRadio

# Funcion para procesar/limpiar texto
def preprocess_text(sen):
    sentence = str(sen).lower()

    # -> NFD y eliminar diacríticos
    sentence = re.sub(
            r"([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+", r"\1", 
            normalize( "NFD", sentence), 0, re.I
        )

    sentence = normalize( 'NFC', sentence) # -> NFC
    sentence = re.sub('[^\w]', ' ', sentence) # Remove punctuations
    sentence = re.sub(r'\s+', ' ', sentence) # Removing multiple spaces

    return sentence

def numExists(text):
    words = text.split()
    for i in words:
        if i.isnumeric():
            return int(i)
    return None

# Funcion para validar la categoria
def validCategory(text, cat, ents):
	if ents:
		if cat=="RADIO":
			find = None
			radius = None
			latitude = None
			longitude = None
			for i in ents:
				if i[0]=="EST" or i[0]=="ACT":
					find = i[1]
				elif i[0]=="DIS":
					radius = int(i[1].split()[0])

					if(i[1].split()[1] in ['mts', 'm', 'metros', 'metro']):
						radius = radius / 1000
					
				elif i[0] == "LAT":
					latitude = i[1]
				elif i[0] == "LONG":
					longitude = i[1]
			if find and radius and latitude and longitude:
				return get_radio(IntentRadio(latitude, longitude, find, radius))
		elif cat=="CANTIDAD":
			find = None
			quantity = numExists(text)
			latitude = None
			longitude = None
			for i in ents:
				if i[0]=="EST" or i[0]=="ACT":
					find = i[1]
				elif i[0] == "LAT":
					latitude = i[1]
				elif i[0] == "LONG":
					longitude = i[1]
			if find and quantity and latitude and longitude:
				return get_quantity(IntentQuantity(latitude, longitude, find, quantity))
		elif cat=="LUGAR":
			find = None
			place = None
			for i in ents:
				if i[0]=="EST" or i[0]=="ACT":
					find = i[1]
				elif i[0]=="LOC" or i[0]=="MUN":
					place = i[1]
			

			if find and place:
				return get_by_place(IntentPlace(find,place))
	return {"intent": { "type": "ERROR" }}


def checkRequest(request):

	normalized_request = preprocess_text(request.search)
	doc = es_nlp(normalized_request)
	normalized_request = ""

	for token in doc:
		s = token.text_with_ws
		if token.dep_ == "nummod":
			s = str(to_number(token.text)) + " "
		normalized_request += s

	doc = nlp(normalized_request)

	ents = []

	if request.variables:
		ents.append(('LAT', request.variables[0]))
		ents.append(('LONG', request.variables[1]))

	for ent in doc.ents:
		ents.append((ent.label_, ent.text))

	labeled_request = normalized_request

	for ent in doc.ents:
		labeled_request = labeled_request.replace(ent.text, ent.label_)

	docs = nlp(labeled_request)
	cats = docs.cats
	max_cat_prob = ("", 0)

	for i in cats:
		if (cats[i]>max_cat_prob[1]):
			max_cat_prob = (i, cats[i])

	return validCategory(labeled_request, max_cat_prob[0], ents)
