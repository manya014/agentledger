function StatsCards({
  confidence,
  risk,
  executionId,
}) {

  return (
    <div className="
      grid
      md:grid-cols-3
      gap-6
      mb-8
    ">

      <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
      ">
        <h3 className="text-slate-400">
          Confidence
        </h3>

        <h1 className="
          text-5xl
          mt-4
          text-blue-500
        ">
          {confidence}%
        </h1>
      </div>

      <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
      ">
        <h3 className="text-slate-400">
          Hallucination Risk
        </h3>

        <h1 className="
          text-4xl
          mt-4
          text-green-500
        ">
          {risk}
        </h1>
      </div>

      <div className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
      ">
        <h3 className="text-slate-400">
          Execution ID
        </h3>

        <p className="
          mt-4
          text-sm
          break-all
        ">
          {executionId}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;