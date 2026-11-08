import { Link } from "react-router-dom";

export default function Grievance() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>
        📢 Grievance Portal
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <input
          type="text"
          placeholder="Subject"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <textarea
          rows="5"
          placeholder="Describe your grievance"
          style={{
            width: "100%",
            padding: "10px",
          }}
        ></textarea>

        <br /><br />

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Submit Complaint
        </button>
      </div>

      <br />

      <Link to="/dashboard">
        <button>⬅ Back Dashboard</button>
      </Link>
    </div>
  );
}
