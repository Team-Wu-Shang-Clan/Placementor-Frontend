import React from 'react';

interface CoinsCollectedProps {
  coins: number;
  todayCoins: number;
  dailyGoal: number;
  totalGoal: number;
}

const CoinsCollected: React.FC<CoinsCollectedProps> = ({
  coins,
  todayCoins,
  dailyGoal,
  totalGoal
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
      <h3 className="font-semibold flex items-center gap-2 mb-3">
        <span className="text-yellow-400">🏆</span>
        Coins Collected
      </h3>
      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold">{coins}</span>
        <span className="text-sm text-gray-500">+{todayCoins} today</span>
      </div>
      <div className="mb-2">
        <div className="text-sm text-gray-600 mb-1">Daily Goal</div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-yellow-400 h-2 rounded-full" 
            style={{ width: `${(dailyGoal / totalGoal) * 100}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-500 mt-1">
          {dailyGoal}/{totalGoal} coins
        </div>
      </div>
    </div>
  );
};

export default CoinsCollected; 