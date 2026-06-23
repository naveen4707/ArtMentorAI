from langchain_huggingface import HuggingFaceEmbeddings

from langchain_community.vectorstores import FAISS



# Load embedding model

embeddings = HuggingFaceEmbeddings(

    model_name="sentence-transformers/all-MiniLM-L6-v2"

)



# Load FAISS database

vector_db = FAISS.load_local(

    "vectorstore",

    embeddings,

    allow_dangerous_deserialization=True

)



def retrieve_context(question):

    """
    Search relevant art knowledge
    """

    results = vector_db.similarity_search(

        question,

        k=3

    )


    context = ""


    for doc in results:

        context += (

            "\nSOURCE: "

            + doc.metadata.get(
                "source",
                "unknown"
            )

            +

            "\n"

            +

            doc.page_content

            +

            "\n"

        )


    return context