import React, { useState } from "react";
import type { FormEvent } from "react";
import type { SubjectId, Question, User } from "../data/types";

interface LoginProps {
  onLogin: (userData: User) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [name, setName] = useState<string>("");
  const [regNo, setRegNo] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedReg = regNo.trim();
    if (trimmedName && trimmedReg) {
      onLogin({ name: trimmedName, regNo: trimmedReg });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Exam Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Registration Number"
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
            style={styles.input}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start Exam
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f2f5",
  },
  card: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "350px",
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "opacity 0.15s",
  },
};