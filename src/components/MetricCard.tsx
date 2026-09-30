import React from 'react';

interface MetricCardProps {
  label: string;
  value: string | number;
  unit?: string;
  subtext?: string;
  status?: 'normal' | 'moderate' | 'heavy' | 'neutral';
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  subtext,
  status = 'neutral',
  icon
}) => {
  const statusBorderClasses = {
    normal: 'border-emerald-200 bg-emerald-50/30',
    moderate: 'border-amber-200 bg-amber-50/30',
    heavy: 'border-rose-200 bg-rose-50/30',
    neutral: 'border-charcoal-200 bg-white'
  };

  const statusTextClasses = {
    normal: 'text-emerald-700',
    moderate: 'text-amber-700',
    heavy: 'text-rose-700',
    neutral: 'text-brand-700'
  };

  return (
    <div className={`p-4 rounded-xl border ${statusBorderClasses[status]} shadow-sm transition-all duration-200`}>
      <div className="flex items-center justify-between text-xs font-medium text-charcoal-500 mb-1.5">
        <span>{label}</span>
        {icon && <span className="text-charcoal-400">{icon}</span>}
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className={`text-2xl sm:text-3xl font-bold tracking-tight ${statusTextClasses[status]}`}>
          {value}
        </span>
        {unit && <span className="text-xs sm:text-sm font-medium text-charcoal-500">{unit}</span>}
      </div>
      {subtext && (
        <div className="mt-1.5 text-xs text-charcoal-500 leading-snug">
          {subtext}
        </div>
      )}
    </div>
  );
};
