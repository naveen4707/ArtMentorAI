import os

from dotenv import load_dotenv

from groq import Groq


from rag import retrieve_context

from prompt import ART_MENTOR_PROMPT



load_dotenv()



client = Groq(

    api_key=os.getenv(
        "GROQ_API_KEY"
    )

)



def ask_art_mentor(question):


    context = retrieve_context(
        question
    )


    user_prompt = f"""

Knowledge Context:

{context}


Student Question:

{question}


Answer as Art Mentor AI.

"""



    response = client.chat.completions.create(


        model="llama-3.3-70b-versatile",


        messages=[

            {
                "role":"system",
                "content":ART_MENTOR_PROMPT
            },


            {
                "role":"user",
                "content":user_prompt
            }

        ],


        temperature=0.7

    )



    return response.choices[0].message.content