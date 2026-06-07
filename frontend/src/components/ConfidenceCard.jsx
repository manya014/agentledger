function ConfidenceCard({
  confidence,
}) {

  return (
    <div className="card">

      <h2>
        Confidence
      </h2>

      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >

        <div
          style={{
            fontSize: "72px",
            color: "#00FF88",
          }}
        >
          {confidence}%
        </div>

      </div>

    </div>
  );
}

export default ConfidenceCard;