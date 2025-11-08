import { useState, useEffect } from "react";
import { questions } from "../data/questions";

type Question = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

type User = {
  name: string;
  regNo: string;
};

interface ExamProps {
  subject: string;
  user: User;
  onFinish: (score: number) => void;
}

export default function Exam({ subject, user, onFinish }: ExamProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState<number>(4 * 60); // 4 minutes

  const subjectQuestions: Question[] = questions[subject] || [];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswer = (qid: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [qid]: answer }));
  };

  const handleSubmit = () => {
    let score = 0;
    subjectQuestions.forEach((q) => {
      if (answers[q.id] === q.answer) score += 20;
    });
    onFinish(score);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h2>{subject.charAt(0).toUpperCase() + subject.slice(1)} Exam</h2>
          <p style={styles.userInfo}>
            {user.name} | {user.regNo}
          </p>
        </div>
        <div style={styles.timer}>
          Time Left:{" "}
          <span
            style={{
              color: timeLeft < 60 ? "red" : "#28a745",
              fontWeight: "bold",
            }}
          >
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* All Questions */}
      <div style={styles.questionsContainer}>
        {subjectQuestions.map((q, index) => (
          <div key={q.id} style={styles.questionBlock}>
            <h3 style={styles.questionNumber}>
              Question {index + 1}{" "}
              <span style={styles.marks}>(20 marks)</span>
            </h3>
            <p style={styles.questionText}>{q.question}</p>
            <div style={styles.options}>
              {q.options.map((opt, i) => (
                <label key={i} style={styles.option}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    checked={answers[q.id] === opt}
                    onChange={() => handleAnswer(q.id, opt)}
                  />
                  <span style={styles.optionText}>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div style={styles.submitSection}>
        <button onClick={handleSubmit} style={styles.submitBtn}>
          Submit {subject.charAt(0).toUpperCase() + subject.slice(1)} Exam
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    padding: "1.5rem",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f8f9fa",
    padding: "1rem 1.5rem",
    borderRadius: "10px",
    marginBottom: "1.5rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  },
  userInfo: {
    margin: "0.3rem 0 0",
    color: "#555",
    fontSize: "0.95rem",
  },
  timer: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  questionsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    marginBottom: "2rem",
  },
  questionBlock: {
    background: "white",
    padding: "1.8rem",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    border: "1px solid #e9ecef",
  },
  questionNumber: {
    margin: "0 0 0.8rem",
    color: "#2c3e50",
    fontSize: "1.1rem",
  },
  marks: {
    fontSize: "0.85rem",
    color: "#27ae60",
    fontWeight: "normal",
  },
  questionText: {
    fontSize: "1.15rem",
    margin: "0 0 1rem",
    color: "#2c3e50",
    lineHeight: "1.5",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: "0.7rem",
  },
  option: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    fontSize: "1rem",
    cursor: "pointer",
  },
  optionText: {
    flex: 1,
  },
  submitSection: {
    textAlign: "center",
    padding: "1.5rem 0",
  },
  submitBtn: {
    padding: "14px 40px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(40, 167, 69, 0.3)",
    transition: "all 0.2s",
  },
};