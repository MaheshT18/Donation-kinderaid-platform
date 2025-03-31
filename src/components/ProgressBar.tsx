
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  current: number;
  goal: number;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, goal, className }) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);
  
  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between mb-1 text-sm">
        <span className="font-medium text-gray-600">${current.toLocaleString()}</span>
        <span className="text-gray-500">Goal: ${goal.toLocaleString()}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-teal-400 h-2.5 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="mt-1 text-right text-xs text-gray-500">{percentage}% Funded</div>
    </div>
  );
};

export default ProgressBar;
