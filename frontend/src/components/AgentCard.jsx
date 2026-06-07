function AgentCard({ agent }) {

  return (
    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
    ">

      <div className="
        flex
        justify-between
        mb-4
      ">

        <h2>
          {agent.agent}
        </h2>

        <span className="
          text-blue-500
          font-semibold
        ">
          {Math.round(
            agent.confidence * 100
          )}%
        </span>

      </div>

      <p className="text-slate-400">
        {agent.decision}
      </p>

    </div>
  );
}

export default AgentCard;