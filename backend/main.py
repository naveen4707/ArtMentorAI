from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel


from groq_service import ask_art_mentor



app = FastAPI(

    title="Art Mentor AI"

)



app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_methods=["*"],

    allow_headers=["*"],

)



class ChatRequest(BaseModel):

    question:str



@app.get("/")

def home():

    return {

        "message":
        "Art Mentor AI Running"

    }



@app.post("/chat")

def chat(

    request:ChatRequest

):

    answer = ask_art_mentor(

        request.question

    )


    return {


        "response":answer

    }