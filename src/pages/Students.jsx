import { useEffect, useState } from "react";
import axios from "axios";
import StudentComponent from "../components/StudentComponent";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch students from JSONPlaceholder
    setLoading(true);
    setError("");

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // Map API data to student-like fields
        const mappedStudents = response.data.map((user) => ({
          id: user.id,
          number: user.id,
          name: user.name,
          course: user.company.bs, // example field for course
          year: Math.floor(Math.random() * 5) + 1, // random year 1-5
        }));
        setStudents(mappedStudents);
        setLoading(false);
      })
      .catch(() => {
        setError("❌ Failed to fetch student data from API.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* ERROR MESSAGE AT THE TOP */}
      {error && (
        <p style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
          {error}
        </p>
      )}

      {/* LOADING SPINNER */}
      {loading ? (
        <div style={styles.loadingScreen}>
          <div style={styles.spinner}></div>
        </div>
      ) : (
        /* STUDENT CARDS */
        <div style={styles.cardContainer}>
          {students.map((student) => (
            <StudentComponent
              key={student.id}
              number={student.number}
              name={student.name}
              course={student.course}
              year={student.year}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  loadingScreen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
  },

  spinner: {
    width: "60px",
    height: "60px",
    border: "6px solid #444",
    borderTop: "6px solid green",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  },
};

export default Students;
