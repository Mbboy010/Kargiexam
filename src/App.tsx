import { useState } from "react";
import Login from "./components/Login";
import SubjectSelection from "./components/SubjectSelection";
import Exam from "./components/Exam";
import Result from "./components/Result";

type Screen = "login" | "subjects" | "exam";
type User = { name: string; id: string };
type Scores = Record<string, number>;

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [user, setUser] = useState<User | null>(null);
  const [completed, setCompleted] = useState<string[]>([]);
  const [scores, setScores] = useState<Scores>({});
  const [currentSubject, setCurrentSubject] = useState<string | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setScreen("subjects");
  };

  const handleSelectSubject = (subject: string) => {
    setCurrentSubject(subject);
    setScreen("exam");
  };

  const handleFinish = (score: number) => {
    if (currentSubject) {
      setScores({ ...scores, [currentSubject]: score });
      setCompleted([...completed, currentSubject]);
      setScreen("subjects");
    }
  };

  const allCompleted = completed.length === 3;

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
      {allCompleted && <Result user={user} scores={scores} />}
    </>
  );
}