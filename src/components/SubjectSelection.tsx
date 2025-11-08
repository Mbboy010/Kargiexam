import React from "react";
import type { SubjectId, Question, User } from "../data/types";

interface Subject {
  id: SubjectId;
  name: string;
  color: string;
}

interface SubjectSelectionProps {
  onSelect: (subjectId: SubjectId) => void;
  completed?: SubjectId[];
}

export default function SubjectSelection({
  onSelect,
  completed = [],
}: SubjectSelectionProps) {
  const subjects: Subject[] = [
    { id: "maths", name: "Mathematics", color: "#28a745" },
    { id: "english", name: "English", color: "#007bff" },
    { id: "biology", name: "Biology", color: "#dc3545" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Select Subject</h2>
      <div style={styles.grid}>
        {subjects.map((sub) => {
          const isDone = completed.includes(sub.id);
          return (
            <button
              key={sub.id}
              onClick={() => onSelect(sub.id)}
              style={{
                ...styles.card,
                backgroundColor: sub.color,
                opacity: isDone ? 0.7 : 1,
                cursor: isDone ? "not-allowed" : "pointer",
              }}
              disabled={isDone}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h3>{sub.name}</h3>
              {isDone && <span style={styles.done}>✓ Completed</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { padding: "2rem", textAlign: "center" },
  title: { marginBottom: "2rem", color: "#333" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "1rem",
  },
  card: {
    padding: "2rem",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    border: "none",
    position: "relative",
    transition: "transform 0.12s",
  },
  done: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "rgba(0,0,0,0.3)",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "12px",
  },
};