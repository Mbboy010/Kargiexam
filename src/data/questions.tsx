// src/data/questions.ts
import type { SubjectId, Question } from "../types";

export const questions: Record<SubjectId, Question[]> = {
  maths: [
    { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { id: 2, question: "What is 5 × 3?", options: ["15", "10", "20", "8"], answer: "15" },
    { id: 3, question: "Solve: 10 - 7 =", options: ["2", "3", "4", "17"], answer: "3" },
    { id: 4, question: "What is 12 ÷ 4?", options: ["3", "4", "6", "8"], answer: "3" },
    { id: 5, question: "What is 8 + 9?", options: ["16", "17", "18", "19"], answer: "17" },
    { id: 6, question: "What is √16?", options: ["2", "4", "6", "8"], answer: "4" },
    { id: 7, question: "What is 7 × 7?", options: ["49", "56", "42", "64"], answer: "49" },
    { id: 8, question: "What is 100 ÷ 10?", options: ["10", "1", "100", "0"], answer: "10" },
    { id: 9, question: "What is 15 - 8?", options: ["6", "7", "8", "23"], answer: "7" },
    { id: 10, question: "What is 4³?", options: ["64", "12", "16", "81"], answer: "64" },
  ],
  english: [
    { id: 1, question: "Synonym of 'Happy'?", options: ["Sad", "Joyful", "Angry", "Tired"], answer: "Joyful" },
    { id: 2, question: "Opposite of 'Big'?", options: ["Large", "Small", "Huge", "Tall"], answer: "Small" },
    { id: 3, question: "He ___ to school daily.", options: ["go", "goes", "going", "went"], answer: "goes" },
    { id: 4, question: "Past tense of 'Eat'?", options: ["Eated", "Ate", "Eats", "Eating"], answer: "Ate" },
    { id: 5, question: "Plural of 'Child'?", options: ["Childs", "Children", "Childes", "Child"], answer: "Children" },
    { id: 6, question: "'She' is a ___ pronoun.", options: ["Subject", "Object", "Possessive", "Reflexive"], answer: "Subject" },
    { id: 7, question: "Which is a noun?", options: ["Run", "Beautiful", "Book", "Quickly"], answer: "Book" },
    { id: 8, question: "I ___ a student.", options: ["am", "is", "are", "were"], answer: "am" },
    { id: 9, question: "What is the article?", options: ["and", "the", "run", "happy"], answer: "the" },
    { id: 10, question: "Correct spelling?", options: ["Recieve", "Receive", "Receeve", "Recieive"], answer: "Receive" },
  ],
  biology: [
    { id: 1, question: "Which is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi"], answer: "Mitochondria" },
    { id: 2, question: "Plants make food by?", options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"], answer: "Photosynthesis" },
    { id: 3, question: "Human heart has ___ chambers.", options: ["2", "3", "4", "6"], answer: "4" },
    { id: 4, question: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { id: 5, question: "Largest organ in human body?", options: ["Heart", "Brain", "Skin", "Liver"], answer: "Skin" },
    { id: 6, question: "DNA stands for?", options: ["Deoxyribonucleic Acid", "Deoxyribose Acid", "Dioxy Nucleic Acid", "None"], answer: "Deoxyribonucleic Acid" },
    { id: 7, question: "Which vitamin from sunlight?", options: ["A", "B", "C", "D"], answer: "D" },
    { id: 8, question: "Blood is red due to?", options: ["Plasma", "Hemoglobin", "Platelets", "WBC"], answer: "Hemoglobin" },
    { id: 9, question: "Process of cell division?", options: ["Mitosis", "Photosynthesis", "Digestion", "Respiration"], answer: "Mitosis" },
    { id: 10, question: "Study of plants is called?", options: ["Zoology", "Botany", "Ecology", "Geology"], answer: "Botany" },
  ],
};