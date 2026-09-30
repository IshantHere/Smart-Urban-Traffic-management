import React from 'react';
import { TrafficStatus } from '../types/traffic';

interface StatusBadgeProps {
  status: TrafficStatus;
  isLive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  isLive = true,
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs sm:text-sm px-2.5 py-1',
    lg: 'text-sm sm:text-base px-3.5 py-1.5 font-medium'
  };

  if (!isLive) {
    return (
      <span className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-amber-50 text-amber-800 border border-amber-200 ${sizeClasses[size]}`}>
        <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        Demonstration Mode
      </span>
    );
  }

  switch (status) {
    case 'normal':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-emerald-50 text-emerald-800 border border-emerald-200 ${sizeClasses[size]}`}>
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          Normal Flow
        </span>
      );
    case 'moderate':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-amber-50 text-amber-800 border border-amber-200 ${sizeClasses[size]}`}>
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Moderate Delay
        </span>
      );
    case 'heavy':
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-rose-50 text-rose-800 border border-rose-200 ${sizeClasses[size]}`}>
          <span className="w-2 h-2 rounded-full bg-rose-500"></span>
          Heavy Congestion
        </span>
      );
    default:
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full font-medium bg-charcoal-100 text-charcoal-700 border border-charcoal-300 ${sizeClasses[size]}`}>
          <span className="w-2 h-2 rounded-full bg-charcoal-400"></span>
          Status Unknown
        </span>
      );
  }
};
