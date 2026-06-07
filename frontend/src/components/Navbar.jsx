import { ShieldCheck } from "lucide-react";

function Navbar(){

  return(

    <nav
      className="
      h-20

      border-b
      border-white/10

      backdrop-blur-xl

      flex
      items-center
      justify-between

      px-8
      "
    >

      <div className="
      flex
      items-center
      gap-3
      ">

        <ShieldCheck
          size={30}
          className="
          text-blue-500
          "
        />

        <h1
          className="
          text-3xl
          font-extrabold
          "
        >
          AgentLedger

          <span
            className="
            text-blue-500
            "
          >
            AI
          </span>

        </h1>

      </div>

      <button
        className="
        px-5
        py-2.5

        rounded-xl

        bg-blue-500/10

        backdrop-blur-xl

        border
        border-blue-400/30

        text-blue-400

        hover:bg-blue-500/20

        transition-all
        duration-300
        "
      >
        Connect Wallet
      </button>

    </nav>

  );

}

export default Navbar;