import React, { useState } from 'react';
import { Trophy } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correct: number;
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "What chemical in paper cups is known to be harmful?",
      options: ["Vitamin C", "BPA", "H2O", "Oxygen"],
      correct: 1
    },
    {
      id: 2,
      text: "How many paper cups end up in landfills yearly?",
      options: ["1 million", "16 million", "16 billion", "1 billion"],
      correct: 2
    },
    {
      id: 3,
      text: "Which cup material is best for hot beverages?",
      options: ["Single-use plastic", "Paper", "Ceramic", "Aluminum"],
      correct: 2
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="text-center">
        <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-4">Quiz Complete!</h3>
        <p className="text-xl mb-4">Your Score: {score}/{questions.length}</p>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setShowResult(false);
          }}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Sustainability Quiz</h3>
      <div className="mb-6">
        <p className="text-lg mb-4">{questions[currentQuestion].text}</p>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-green-50 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="text-sm text-gray-600">
        Question {currentQuestion + 1} of {questions.length}
      </div>
    </div>
  );
};

export default Quiz;