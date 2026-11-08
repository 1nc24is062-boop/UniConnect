import { Link } from "react-router-dom";

export default function Results() {
  return (
    <div
      style={{
        padding: "30px",
        background: "#f4f7fc",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#2563eb" }}>
        📝 Examination Results
      </h1>

      <table
        border="1"
        cellPadding="12"
        style={{
          width: "100%",
          background: "white",
        }}
      >
        <thead
          style={{
            background: "#2563eb",
            color: "white",
          }}
        >
          <tr>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Java Programming</td>
            <td>A</td>
          </tr>

          <tr>
            <td>Python Programming</td>
            <td>A+</td>
          </tr>

          <tr>
            <td>DBMS</td>
            <td>O</td>
          </tr>
        </tbody>
      </table>

      <br />

      <Link to="/dashboard">
        <button>⬅ Back Dashboard</button>
      </Link>
    </div>
  );
}