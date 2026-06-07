from utils.llm import ask_llm

def writer_agent(task: str):

    report = ask_llm(
        f"""
        Create a concise final report for:

        {task}
        """
    )

    return {
        "agent": "Writer",
        "decision": report,
        "confidence": 0.92
    }