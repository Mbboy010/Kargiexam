export type SubjectId = "maths" | "english" | "biology";

export interface User {
  id?: string;
  name: string;
  regNo: string;
}

export interface Question {
  id: string | number;
  question: string;
  options: string[];
  answer: string;
}