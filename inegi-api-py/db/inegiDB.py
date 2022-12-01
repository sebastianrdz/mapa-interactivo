import pandas as pd
import spacy

df = pd.read_csv('denue_NL2022.csv', encoding='latin-1')

# Importacion de los modelos
es_nlp = spacy.load("es_core_news_md")
nlp = spacy.load('./inegi_nlp_model')

# Codigo empleado para realizar la limpieza del dataset.
'''
df = pd.read_csv('denue_nv2022.csv', encoding='latin-1')

# Columnas a realizar un preprocesamiento/limpieza

columnNames = ['nom_estab', 'nombre_act', 'municipio', 'localidad']
df[columnNames] = df[columnNames].applymap(preprocess_text)
'''