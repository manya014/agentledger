import ReactFlow, {
  Background,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";

function WorkflowGraph({ workflow = [] }) {

  const nodes = workflow.map(
    (step, index) => ({
      id: `${index}`,
      position: {
        x: index * 250,
        y: 100,
      },
      data: {
        label: (
          <div>

            <h3
              style={{
                fontWeight: "bold",
              }}
            >
              {step.agent}
            </h3>

            <p>
              {Math.round(
                step.confidence * 100
              )}
              %
            </p>

          </div>
        ),
      },
      style: {
        background: "#0F172A",
        color: "white",
        border:
          "2px solid #3B82F6",
        borderRadius: "16px",
        width: 180,
      },
    })
  );

  const edges = workflow
    .slice(0, -1)
    .map((_, index) => ({
      id: `e${index}`,
      source: `${index}`,
      target: `${index + 1}`,
      animated: true,
      style: {
        stroke: "#3B82F6",
      },
    }));

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-4
      mb-8
      "
      style={{
        height: "400px",
      }}
    >

      <h2 className="
      text-xl
      mb-4
      ">
        Multi-Agent Workflow
      </h2>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

    </div>
  );
}

export default WorkflowGraph;