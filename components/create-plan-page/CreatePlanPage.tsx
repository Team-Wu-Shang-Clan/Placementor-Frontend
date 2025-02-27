import React, { useState } from 'react';
import PlanDetails from './PlanDetails';
import PlanTypeCard from './PlanTypeCard';

const planTypes = [
  {
    id: 'service-based',
    title: 'Service-Based Companies',
    description: 'TCS, Infosys, Wipro, CTS, Tech Mahindra',
    icon: 'briefcase',
  },
  {
    id: 'product-based',
    title: 'Product-Based Companies',
    description: 'Microsoft, Amazon, Flipkart, Walmart',
    icon: 'code',
  },
  {
    id: 'faang',
    title: 'FAANG Companies',
    description: 'Facebook, Apple, Amazon, Netflix, Google',
    icon: 'star',
  },
  {
    id: 'big4',
    title: 'Big 4 Companies',
    description: 'Deloitte, PwC, EY, KPMG',
    icon: 'building',
  },
  {
    id: 'generic',
    title: 'Generic Plan',
    description: 'Most essential preparation for any company',
    icon: 'file-text',
  },
];

const CreatePlanPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('service-based');

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Create Plan</h1>
      <p className="text-xl text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur</p>
      
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Select Plan Type</h2>
        <div className="space-y-3">
          {planTypes.map((plan) => (
            <PlanTypeCard
              key={plan.id}
              plan={plan}
              isSelected={selectedPlan === plan.id}
              onSelect={() => {
                console.log(selectedPlan)
                setSelectedPlan(plan.id)
              }
            }
            />
          ))}
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-500 mb-2">Your Plan</h2>
        <PlanDetails planType={planTypes.find(p => p.id === selectedPlan)} />
      </div>
    </div>
  );
};

export default CreatePlanPage;