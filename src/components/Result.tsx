import React from "react";
import type { User, SubjectId } from "../types";

interface ResultProps {
  user: User;
  scores: Partial<Record<SubjectId, number>>; // may not have all keys
}

export default function Result({ user, scores }: ResultProps) {
  const total = Object.values(scores).reduce((a, b) => a + (b ?? 0), 0);
  const totalPossible = Object.keys(scores).length * 200 || 600;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🎉 Exam Completed!</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Reg No:</strong> {user.regNo}
        </p>
        <hr style={styles.line} />
        <h3 style={styles.subtitle}>Subject Scores</h3>
        {Object.entries(scores).map(([sub, score]) => (
          <p key={sub}>
            <strong>{sub.charAt(0).toUpperCase() + sub.slice(1)}:</strong> {score}/200
          </p>
        ))}
        <h3 style={styles.total}>Total Score: {total}/{totalPossible}</h3>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#f0f2f5" },
  card: { background: "white", padding: "2rem 3rem", borderRadius: "12px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", textAlign: "center", minWidth: "320px" },
  title: { marginBottom: "1rem", color: "#28a745" },
  subtitle: { marginTop: "1.5rem", marginBottom: "0.5rem", color: "#333" },
  total: { marginTop: "1.5rem", fontSize: "1.2rem", color: "#007bff", fontWeight: "bold" },
  line: { margin: "1rem 0", border: "none", borderTop: "1px solid #ddd" },
};