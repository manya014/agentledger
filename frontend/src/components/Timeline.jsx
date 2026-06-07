function Timeline({ workflow }) {

  return (
    <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
    ">

      <h2 className="text-xl mb-6">
        Execution Timeline
      </h2>

      {workflow.map((step) => (

        <div
          key={step.agent}
          className="
            flex
            items-center
            gap-4
            mb-5
          "
        >

          <div className="
            h-3
            w-3
            rounded-full
            bg-blue-500
          "/>

          <div>

            <h3>
              {step.agent}
            </h3>

            <p className="
              text-slate-400
              text-sm
            ">
              {step.decision}
            </p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default Timeline;