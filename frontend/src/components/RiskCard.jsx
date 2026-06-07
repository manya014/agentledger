function RiskCard({ risk }) {
  const color =
    risk === "Low"
      ? "#00FF88"
      : risk === "Medium"
      ? "#FACC15"
      : "#FF4D4D";

  return (
    <div className="card">
      <h2>Hallucination Risk</h2>

      <div
        style={{
          color,
          fontSize: "48px",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        {risk}
      </div>
    </div>
  );
}

export default RiskCard;
