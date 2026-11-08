import { Link } from "react-router-dom";

export default function Attendance() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#2563eb" }}>
        📅 Attendance Management
      </h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          background: "white",
        }}
      >
        <thead style={{ background: "#2563eb", color: "white" }}>
          <tr>
            <th>Subject</th>
            <th>Attendance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Java</td>
            <td>90%</td>
          </tr>

          <tr>
            <td>Python</td>
            <td>95%</td>
          </tr>

          <tr>
            <td>DBMS</td>
            <td>88%</td>
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