import { ShieldCheck } from "lucide-react";

function MonadProof({
  executionId,
}) {

  return (
    <div
      className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      "
    >

      <div
        className="
        flex
        items-center
        gap-3
        "
      >

        <ShieldCheck
          className="
          text-green-500
          "
        />

        <h2>
          Monad Verification
        </h2>

      </div>

      <div className="mt-6">

        <p className="
        text-green-500
        font-semibold
        ">
          VERIFIED
        </p>

        <div className="mt-4">

          <p className="
          text-slate-400
          text-sm
          ">
            Execution ID
          </p>

          <p className="
          break-all
          mt-2
          ">
            {executionId}
          </p>

        </div>

        <div className="mt-4">

          <p className="
          text-slate-400
          text-sm
          ">
            Monad Status
          </p>

          <p className="
          text-green-500
          mt-2
          ">
            Stored On-Chain
          </p>

        </div>

      </div>

    </div>
  );
}

export default MonadProof;