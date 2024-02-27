from langchain.chains import MapReduceDocumentsChain, ReduceDocumentsChain
from langchain.chains.llm import LLMChain
from langchain.chains.summarize import StuffDocumentsChain
from langchain.prompts import PromptTemplate
from langchain.text_splitter import CharacterTextSplitter
from langchain_openai import ChatOpenAI

from prompts import MAP_TEMPLATE, REDUCE_TEMPLATE

GPT_3_MODEL = "gpt-3.5-turbo-0125"
GPT_4_MODEL = "gpt-4"
GPT_4_TURBO_MODEL = "gpt-4-turbo-preview"

default_text_splitter = CharacterTextSplitter.from_tiktoken_encoder(
    chunk_size=1000, chunk_overlap=100
)


def get_summarizer(gpt_model: str = GPT_3_MODEL,
                   temperature: float = 0.0,
                   token_max: int = 4000,
                   map_template: str = MAP_TEMPLATE,
                   reduce_template: str = REDUCE_TEMPLATE,
                   document_variable_name: str = "docs",
                   return_intermediate_steps: bool = False) -> MapReduceDocumentsChain:
    """
    Return a configured instance of MapReduceDocumentsChain
    :param gpt_model:
    :param temperature:
    :param token_max:
    :param map_template:
    :param reduce_template:
    :param document_variable_name:
    :param return_intermediate_steps:
    :return:
    """
    llm = ChatOpenAI(temperature=temperature, model=gpt_model)

    map_prompt = PromptTemplate.from_template(map_template)
    reduce_prompt = PromptTemplate.from_template(reduce_template)

    map_chain = LLMChain(llm=llm, prompt=map_prompt)
    reduce_chain = LLMChain(llm=llm, prompt=reduce_prompt)

    stuff_documents_chain = StuffDocumentsChain(
        llm_chain=reduce_chain,
        document_variable_name=document_variable_name,
    )

    reduce_documents_chain = ReduceDocumentsChain(
        combine_documents_chain=stuff_documents_chain,
        collapse_documents_chain=stuff_documents_chain,
        token_max=token_max,
    )

    map_reduce_chain = MapReduceDocumentsChain(
        llm_chain=map_chain,
        reduce_documents_chain=reduce_documents_chain,
        document_variable_name=document_variable_name,
        return_intermediate_steps=return_intermediate_steps,
    )

    return map_reduce_chain
