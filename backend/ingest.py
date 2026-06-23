from pathlib import Path

from langchain_text_splitters import RecursiveCharacterTextSplitter

from langchain_core.documents import Document

from langchain_huggingface import HuggingFaceEmbeddings

from langchain_community.vectorstores import FAISS


documents = []

data_folder = Path("data")


for file in data_folder.glob("*.txt"):

    content = file.read_text(
        encoding="utf-8"
    )

    doc = Document(
        page_content=content,
        metadata={
            "source": file.name
        }
    )

    documents.append(doc)



text_splitter = RecursiveCharacterTextSplitter(

    chunk_size=500,

    chunk_overlap=50
)


chunks = text_splitter.split_documents(
    documents
)



print(
    f"Total chunks created: {len(chunks)}"
)



embeddings = HuggingFaceEmbeddings(

    model_name="sentence-transformers/all-MiniLM-L6-v2"

)



vector_db = FAISS.from_documents(

    chunks,

    embeddings

)



vector_db.save_local(
    "vectorstore"
)



print("✅ Vector Database Created Successfully")