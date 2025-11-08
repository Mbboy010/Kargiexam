import  { useState } from "react";
import Login from "./components/Login";
import SubjectSelection from "./components/SubjectSelection";
import Exam from "./components/Exam";
import Result from "./components/Result";
import type { User, SubjectId } from "./data/types";

export default function App() {
  const [screen, setScreen] = useState<"login" | "subjects" | "exam">("login");
  const [user, setUser] = useState<User | null>(null);
  const [completed, setCompleted] = useState<SubjectId[]>([]);
  const [scores, setScores] = useState<Record<SubjectId, number>>({});
  const [currentSubject, setCurrentSubject] = useState<SubjectId | null>(null);

  const handleLogin = (userData: User) => {
    // Optionally add an id here if needed
    setUser(userData);
    setScreen("subjects");
  };

  const handleSelectSubject = (subject: SubjectId) => {
    setCurrentSubject(subject);
    setScreen("exam");
  };

  const handleFinish = (score: number) => {
    if (!currentSubject) return;
    setScores((prev) => ({ ...prev, [currentSubject]: score }));
    setCompleted((prev) => (prev.includes(currentSubject) ? prev : [...prev, currentSubject]));
    setCurrentSubject(null);
    setScreen("subjects");
  };

  const allCompleted = completed.length >= 3;

  return (
    <>
      {screen === "login" && <Login onLogin={handleLogin} />}
      {screen === "subjects" && !allCompleted && (
        <SubjectSelection onSelect={handleSelectSubject} completed={completed} />
      )}
      {screen === "exam" && currentSubject && user && (
        <Exam
          subject={currentSubject}
          user={user}
          onFinish={handleFinish}
          onTimeout={handleFinish}
        />
      )}
      {allCompleted && user && <Result user={user} scores={scores} />}
    </>
  );
}