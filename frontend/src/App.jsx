import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsCards from "./components/StatsCards";
import WorkflowGraph from "./components/WorkflowGraph";
import Timeline from "./components/Timeline";
import MonadProof from "./components/MonadProof";
import AgentCard from "./components/AgentCard";

import { executeWorkflow } from "./api";

function App() {

  const [result,setResult] = useState(null);
  const [loading,setLoading] = useState(false);

  const runWorkflow = async(task)=>{

    try{

      setLoading(true);

      const data =
        await executeWorkflow(task);

      setResult(data);

    }catch(err){

      console.log(err);

    }finally{

      setLoading(false);

    }

  };

  return (

    <div
      className="
      min-h-screen

      bg-[#020617]

      bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_35%)]

      text-white
      "
    >

      <Navbar/>

      <div className="max-w-7xl mx-auto p-8">

        <Hero
          onExecute={runWorkflow}
        />

        {loading && (

          <div className="
          mt-8

          bg-white/5
          backdrop-blur-xl

          border
          border-white/10

          rounded-3xl

          p-8
          ">

            Running Multi-Agent Workflow...

          </div>

        )}

        {result && (

          <>

            <StatsCards
              confidence={
                result.overall_confidence
              }
              risk={
                result.hallucination_risk
              }
              executionId={
                result.execution_id
              }
            />

            <WorkflowGraph
              workflow={
                result.workflow
              }
            />

            <div
              className="
              grid
              lg:grid-cols-2
              gap-6
              mt-6
              "
            >

              <Timeline
                workflow={
                  result.workflow
                }
              />

              <MonadProof
                executionId={
                  result.execution_id
                }
              />

            </div>

            <h2 className="
            text-3xl
            font-bold
            mt-10
            mb-6
            ">
              Agent Decisions
            </h2>

            <div
              className="
              grid
              md:grid-cols-2
              lg:grid-cols-4
              gap-6
              "
            >

              {result.workflow.map(
                (agent)=>(
                  <AgentCard
                    key={agent.agent}
                    agent={agent}
                  />
                )
              )}

            </div>

          </>

        )}

      </div>

    </div>

  );
}

export default App;