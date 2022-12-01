from schemas.intent import IntentPlace, IntentQuantity, IntentRadio
from db.inegiDB import df
import json
import numpy as np

# Funcion para obtener la distancia (Km) entre 2 ubicaciones dadas en lat y long
def haversine(row, lon, lat):
  lon1 = lon
  lat1 = lat
  lon2 = row['longitud']
  lat2 = row['latitud']
  lon1, lat1, lon2, lat2 = map(np.radians, [lon1, lat1, lon2, lat2])
  dlon = lon2 - lon1 
  dlat = lat2 - lat1 
  a = np.sin(dlat/2)**2 + np.cos(lat1) * np.cos(lat2) * np.sin(dlon/2)**2
  c = 2 * np.arcsin(np.sqrt(a))
  km = 6367 * c
  return km

def get_radio(intentData: IntentRadio):

    #data = {"latitud": intentData.latitud, "longitud": intentData.longitud, "radius" : intentData.radius, "find": intentData.find}
    # Filtro de lugares por tipo de comercio
    all_negs = df[((df['nom_estab'].str.contains(intentData.find, case=False)) | (df['nombre_act'].str.contains(intentData.find, case=False)))]
    # Filtro de lugares por radio buscado
    all_negs = all_negs[(all_negs.apply(lambda row: haversine(row, intentData.longitude, intentData.latitude), axis=1) <= intentData.radius)]

    points = all_negs.to_json(orient="records")
    points = json.loads(points)

    # Creacion de JSON a retornar
    result = {
    "intent": {
        "type": "RADIO",
        "info": {
            "lat": intentData.latitude,
            "long": intentData.longitude,
            "radio": intentData.radius,
            "busqueda": intentData.find
        }
    },
       "data": points
    }

    return result


def get_quantity(intentData: IntentQuantity):

    # Filtro de lugares por tipo de comercio
    all_negs = df[((df['nom_estab'].str.contains(intentData.find, case=False)) | (df['nombre_act'].str.contains(intentData.find, case=False)))]

    # Obtencion de distancias de los resultados filtrados
    all_negs['distancia'] = ((intentData.latitude - all_negs['latitud'])**2 + (intentData.longitude - all_negs['longitud'])**2)**.5 

    # Obtencion de la cantidad de lugares indicados por el usuario
    all_negs = all_negs.sort_values(by=['distancia'])
    if(len(all_negs) > intentData.quantity):
        all_negs = all_negs.head(intentData.quantity)

    points = all_negs.to_json(orient="records")
    points = json.loads(points)

    # Creacion de JSON a retornar
    result = {
    "intent": {
        "type": "CANT",
        "info": {
            "lat": intentData.latitude,
            "long": intentData.longitude,
            "busqueda": intentData.find
        }
    },
       "data": points
    }

    return result


def get_by_place(intentData: IntentPlace):

    # Filtro de lugares por tipo de comercio y lugar indicado por el usuario
    all_negs = df[((df['nom_estab'].str.contains(intentData.find, case=False)) | (df['nombre_act'].str.contains(intentData.find, case=False))) & ((df['municipio'].str.contains(intentData.place, case=False)) | (df['localidad'].str.contains(intentData.place, case=False)))]

    points = all_negs.to_json(orient="records")
    points = json.loads(points)

    # Creacion de JSON a retornar
    result = {
    "intent": {
        "type": "LUGAR",
        "info": {
            "zona": intentData.place,
            "busqueda": intentData.find
        }
    },
       "data": points
    }

    return result

