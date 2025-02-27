import React from 'react';
import FaangCompanies from './FaangCompanies';
import YourProgress from './YourProgress';
import CoinsCollected from './CoinsCollected';
import DailyChallenges from './DailyChallenges';
import PathCircle from './PathCircle';

const Path: React.FC = () => {
  const challenges = [
    {
      title: 'Complete Quiz',
      completed: 0,
      total: 5,
      coins: 20
    },
    {
      title: 'Solve 3 LeetCode Problems',
      completed: 0,
      total: 2,
      coins: 30
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <FaangCompanies 
        title="FAANG Companies"
        subtitle="Master DSA & Interview Skills"
      />
      
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {/* Path circles with more vertical spacing */}
          <div className="space-y-8">
            <PathCircle number={1} isLocked={false} isActive={true} />
            <PathCircle number={2} />
            <PathCircle number={3} />
            <PathCircle number={4} />
            <PathCircle number={5} />
          </div>
        </div>
        
        <div className="space-y-4">
          <YourProgress 
            day={1}
            totalDays={30}
            percentComplete={3}
            streak={1}
            timeToday={10}
          />
          
          <CoinsCollected 
            coins={50}
            todayCoins={50}
            dailyGoal={50}
            totalGoal={100}
          />
          
          <DailyChallenges challenges={challenges} />
        </div>
      </div>
    </div>
  );
};

export default Path; 