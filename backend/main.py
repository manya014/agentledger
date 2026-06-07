from fastapi import FastAPI
from pydantic import BaseModel

from workflows.workflow import run_workflow

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TaskRequest(BaseModel):
    task: str


@app.get("/")
def home():
    return {
        "message": "AgentLedger Running"
    }


@app.post("/execute")
def execute(data: TaskRequest):

    return run_workflow(
        data.task
    )