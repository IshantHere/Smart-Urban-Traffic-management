import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold tracking-wide uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-900 tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-charcoal-600 text-base sm:text-lg leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};
