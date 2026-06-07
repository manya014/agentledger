from utils.llm import ask_llm

def researcher_agent(task: str):

    research = ask_llm(
        f"""
        Research: {task}

        Rules:
        - Maximum 3 key findings
        - Maximum 3 important facts
        - Summary under 50 words
        - Total response under 120 words
        - Use bullet points
        - Be concise
        """
    )

    return {
        "agent": "Researcher",
        "decision": research,
        "confidence": 0.85
    }