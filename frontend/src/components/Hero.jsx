import { useState } from "react";

function Hero({onExecute}){

  const [task,setTask] =
    useState("");

  return(

    <div
      className="
      mt-8

      bg-white/[0.03]

      backdrop-blur-xl

      border
      border-white/10

      rounded-3xl

      p-8

      shadow-xl
      "
    >

      <h1
        className="
        text-5xl
        font-extrabold
        mb-3
        "
      >
        Verifiable Multi-Agent Auditing
      </h1>

      <p
        className="
        text-slate-400
        mb-8
        "
      >
        Track agent decisions, confidence
        and hallucination risk.
      </p>

      <div
        className="
        flex
        gap-4
        "
      >

        <input
          value={task}
          onChange={(e)=>
            setTask(e.target.value)
          }
          placeholder="
          Analyze NVIDIA stock...
          "
          className="
          flex-1

          bg-white/5

          backdrop-blur-xl

          border
          border-white/10

          rounded-2xl

          px-5
          py-4

          text-white

          placeholder:text-slate-500

          focus:outline-none
          focus:border-blue-500/40
          "
        />

        <button

          onClick={()=>
            onExecute(task)
          }

          className="
          px-6
          py-3

          rounded-2xl

          bg-white/10

          backdrop-blur-xl

          border
          border-white/20

          text-white

          font-semibold

          hover:bg-blue-500/20
          hover:border-blue-400/40

          transition-all
          duration-300

          shadow-lg
          shadow-blue-500/10
          "
        >
          Execute
        </button>

      </div>

    </div>

  );

}

export default Hero;