import { useState } from 'react';

const QuestionnaireForm = () => {
  const [answers, setAnswers] = useState<string[]>(new Array(10).fill(''));
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
       "Question":  "What is your current level in DSA?",
       "id": "DSA"
    },
    {
       "Question": "What is your current level in Programming Languages?",
       "id": "Programming Languages"
    },
    {
       "Question": "What is your current level in Operating Systems?",
       "id": "Operating Systems"
    },
    {
       "Question": "What is your current level in Computer Networks?",
       "id": "Computer Networks"
    },
    {
       "Question": "What is your current level in Web Development?",
       "id": "Web Development"
    },
    {
       "Question": "What is your current level in Database Management?",
       "id": "Database Management"
    },
    {
       "Question": "What is your current level in Machine Learning?",
       "id": "Machine Learning"
    },
    {
       "Question": "What is your current level in System Design?",
       "id": "System Design"
    },
    {
       "Question": "What is your current level in Quantitative Aptitude?",
       "id": "Quantitative Aptitude"
    },
    {
       "Question": "What is your current level in Verbal Ability?",
       "id": "Verbal Ability"
    },
   
  ];

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.every(answer => answer.trim() !== '')) {
      setIsComplete(true);
      console.log('All answers:', answers);
    } else {
      alert('Please answer all questions before proceeding');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Learning Path Questionnaire</h2>
      
      <div className="space-y-6">
        {questions.map((questionObj, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <p className="text-lg mb-2">{`${index + 1}. ${questionObj.Question}`}</p>
            <input
              type="text"
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        Create My Plan
      </button>

      {isComplete && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Your answers have been saved successfully!
        </div>
      )}
    </div>
  );
};

export default QuestionnaireForm; 