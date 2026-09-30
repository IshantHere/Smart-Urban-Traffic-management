import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  message = 'Loading live traffic telemetry...',
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-charcoal-50/60 rounded-xl border border-charcoal-200 text-center">
      <Loader2 className="w-8 h-8 text-brand-600 animate-spin mb-3" />
      <span className="text-sm font-medium text-charcoal-700">{message}</span>
      <span className="text-xs text-charcoal-400 mt-1">Interrogating traffic flow API endpoints...</span>
    </div>
  );
};
