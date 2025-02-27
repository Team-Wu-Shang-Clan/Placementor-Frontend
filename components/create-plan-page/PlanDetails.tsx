import React, { useState } from 'react';
import { Briefcase, Check } from 'lucide-react';
import QuestionnaireForm from './QuestionnaireForm';



interface PlanType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PlanDetailsProps {
  planType?: PlanType;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ planType }) => {

  const [selectedDays, setSelectedDays] = useState(30);
  const [goal, setGoal] = useState('');
  
  if (!planType) return null;

  const features = [
    "Daily video lessons",
    "Curated blog articles",
    "LeetCode practice problems",
    "Daily quizzes",
    "AI mock interviews"
  ];

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDuration = parseInt(e.target.value);
    
    setSelectedDays(newDuration);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mr-3">
          <Briefcase size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-medium">{planType.title}</h3>
          <p className="text-sm text-gray-500">{planType.description}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2">Plan includes:</h4>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                <Check size={14} className="text-green-500" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Duration:</h4>
        <div className="relative">
          <input
            type="range"
            min="15"
            max="90"
            step="15"
            value={selectedDays}
            onChange={handleDurationChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>15 days</span>
            <span>30 days</span>
            <span>60 days</span>
            <span>90 days</span>
          </div>
          <div className="text-sm text-gray-700 mt-2">
            Selected duration: {selectedDays} days
          </div>
        </div>
      </div>


      <div className="mb-6">
        <QuestionnaireForm />
      </div>
    
      
      
    </div>
  );
};

export default PlanDetails;