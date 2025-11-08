import { useState } from "react";
import Login from "./components/Login";
import SubjectSelection from "./components/SubjectSelection";
import Exam from "./components/Exam";
import Result from "./components/Result";

export default function ExamCom() {
  const [screen, setScreen] = useState("login");
  const [user, setUser] = useState(null);
  const [completed, setCompleted] = useState([]);
  const [scores, setScores] = useState({});
  const [currentSubject, setCurrentSubject] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setScreen("subjects");
  };

  const handleSelectSubject = (subject) => {
    setCurrentSubject(subject);
    setScreen("exam");
  };

  const handleFinish = (score) => {
    setScores({ ...scores, [currentSubject]: score });
    setCompleted([...completed, currentSubject]);
    setScreen("subjects");
  };

  const allCompleted = completed.length === 3;

  return (
    <>
      {screen === "login" && <Login onLogin={handleLogin} />}
      {screen === "subjects" && !allCompleted && (
        <SubjectSelection onSelect={handleSelectSubject} completed={completed} />
      )}
      {screen === "exam" && (
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