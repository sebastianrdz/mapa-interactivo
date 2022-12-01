from pydantic import BaseModel
from typing import List

class IntentQuantity:

    def __init__(self, latitude, longitude, find, quantity):
        self.latitude = latitude 
        self.longitude = longitude
        self.find = find
        self.quantity = quantity

class IntentRadio:

    def __init__(self, latitude, longitude, find, radius):
        self.latitude = latitude 
        self.longitude = longitude
        self.find = find
        self.radius = radius

class IntentPlace:
    
    def __init__(self, find, place):
        self.find = find
        self.place = place

class Request(BaseModel):
    search: str
    variables: List[float] = None