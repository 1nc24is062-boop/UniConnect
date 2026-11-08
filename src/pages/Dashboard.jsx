import { Link } from "react-router-dom";

export default function Dashboard() {
  const cardStyle = {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2563eb",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "30px",
      }}
    >
      <h1
        style={{
          color: "#2563eb",
          textAlign: "center",
        }}
      >
        🎓 UniConnect Student Dashboard
      </h1>

      {/* Student Profile */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2>👤 Student Profile</h2>

        <p><strong>Name:</strong> Yashwanth N</p>
        <p><strong>USN:</strong> 1NC24IS062</p>
        <p><strong>Department:</strong> Information Science</p>
        <p><strong>Semester:</strong> 1st Semester</p>
      </div>
      <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  }}
>
  <div style={cardStyle}>📚 Courses: 6</div>
  <div style={cardStyle}>📅 Attendance: 91%</div>
  <div style={cardStyle}>🏆 CGPA: 8.9</div>
</div>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Link
          to="/attendance"
          style={{ textDecoration: "none" }}
        >
          <div style={cardStyle}>
            📅 Attendance
          </div>
        </Link>

        <Link
          to="/courses"
          style={{ textDecoration: "none" }}
        >
          <div style={cardStyle}>
            📚 Course Registration
          </div>
        </Link>

        <Link
          to="/results"
          style={{ textDecoration: "none" }}
        >
          <div style={cardStyle}>
            📝 Results
          </div>
        </Link>

        <Link
          to="/grievance"
          style={{ textDecoration: "none" }}
        >
          <div style={cardStyle}>
            📢 Grievance Portal
          </div>
        </Link>
      </div>
    </div>
  );
}