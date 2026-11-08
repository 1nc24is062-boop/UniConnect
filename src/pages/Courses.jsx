import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        background: "#f4f7fc",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>
        📚 Course Registration
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <label>Select Elective Subject</label>
        <br /><br />

        <select
          style={{
            width: "100%",
            padding: "10px",
          }}
        >
          <option>Artificial Intelligence</option>
          <option>Machine Learning</option>
          <option>Cloud Computing</option>
          <option>Cyber Security</option>
        </select>

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
          Register Course
        </button>
      </div>

      <br />

      <Link to="/dashboard">
        <button>⬅ Back Dashboard</button>
      </Link>
    </div>
  );
}