from fastapi import FastAPI
from routes.intent import inegi
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title = "INEGI API",
    description= "Permite la extracción de coordenadas de acuerdo a la intención del usuario.",
    version= "v0.1",
    openapi_tags=[{
        "name": "Inegi",
        "description": "Extraccion de coordenadas"
    }]
)

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(inegi)