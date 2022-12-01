from fastapi import APIRouter
from schemas.intent import Request
from services.functions import checkRequest

inegi = APIRouter()

@inegi.post('/chat-inegi')
def manageString(request: Request):
    result = checkRequest(request)
    return result