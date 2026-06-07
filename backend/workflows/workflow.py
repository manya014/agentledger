import uuid

from utils.hash import generate_hash
from agents.planner import planner_agent
from agents.researcher import researcher_agent
from agents.verifier import verifier_agent
from agents.writer import writer_agent

def calculate_risk(confidence):

    if confidence >= 90:
        return "Low"

    if confidence >= 75:
        return "Medium"

    return "High"

def run_workflow(task: str):

    planner = planner_agent(task)
    researcher = researcher_agent(task)
    verifier = verifier_agent(task)
    writer = writer_agent(task)

    workflow = [
        planner,
        researcher,
        verifier,
        writer
    ]

    avg_confidence = (
        sum(step["confidence"] for step in workflow)
        / len(workflow)
    )

    overall_confidence = round(avg_confidence * 100)

    report = {
        "execution_id": str(uuid.uuid4()),
        "task": task,
        "workflow": workflow,
        "overall_confidence": overall_confidence,
        "hallucination_risk": calculate_risk(
            overall_confidence
        )
    }

    report["audit_hash"] = generate_hash(report)

    return report