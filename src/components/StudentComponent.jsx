import { useState } from "react";

function StudentComponent({ number, name, course, year }) {
  const [visible, setVisible] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <h3>Student {number}</h3>
      {visible && (
        <>
          <p>Name: {name}</p>
          <p>Course: {course}</p>
          <p>Year: {year}</p>
        </>
      )}
      <button
        onClick={() => setVisible(!visible)}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "5px 10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        {visible ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}

export default StudentComponent;
