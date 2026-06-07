from utils.llm import ask_llm

def verifier_agent(task: str):

    verification = ask_llm(
        f"""
        A researcher generated information about:

        {task}

        Evaluate whether the information is likely factual.

        Return:
        - Confidence score (0-100)
        - One sentence justification
        """
    )

    return {
        "agent": "Verifier",
        "decision": verification,
        "confidence": 0.90
    }