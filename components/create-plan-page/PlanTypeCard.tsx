import React from 'react';
import { Briefcase, Code, Star, Building, FileText, Check } from 'lucide-react';

interface PlanType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PlanTypeCardProps {
  plan: PlanType;
  isSelected: boolean;
  onSelect: () => void;
}

const PlanTypeCard: React.FC<PlanTypeCardProps> = ({ plan, isSelected, onSelect }) => {
  const getIcon = () => {
    switch (plan.icon) {
      case 'briefcase':
        return <Briefcase size={20} className="text-white" />;
      case 'code':
        return <Code size={20} />;
      case 'star':
        return <Star size={20} />;
      case 'building':
        return <Building size={20} />;
      case 'file-text':
        return <FileText size={20} />;
      default:
        return <Briefcase size={20} />;
    }
  };

  return (
    <div 
      className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer
        ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
      onClick={onSelect}
    >
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 
          ${isSelected ? 'bg-blue-500' : 'bg-gray-200'}`}>
          {getIcon()}
        </div>
        <div>
          <h3 className="font-medium">{plan.title}</h3>
          <p className="text-sm text-gray-500">{plan.description}</p>
        </div>
      </div>
      
      {isSelected && (
        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
          <Check size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default PlanTypeCard;