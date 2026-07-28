import React from 'react';
import { ShieldCheck, Info, Tag } from 'lucide-react';

interface ComplianceBannerProps {
  currentTag: string;
  onOpenTagModal: () => void;
}

export const ComplianceBanner: React.FC<ComplianceBannerProps> = ({ currentTag, onOpenTagModal }) => {
  return (
    <div className="bg-amber-500/10 dark:bg-amber-500/20 border-b border-amber-500/20 text-amber-900 dark:text-amber-200 text-xs px-4 py-2 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>
            <strong className="font-semibold">FTC & Amazon Associate Compliant Portal:</strong> Every product link includes explicit disclosure tags &amp; live price checks.
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 bg-amber-500/20 dark:bg-amber-400/20 px-2 py-0.5 rounded text-[11px] font-mono">
            <Tag className="w-3 h-3 text-amber-600 dark:text-amber-300" />
            <span>Tag: <strong>{currentTag}</strong></span>
          </div>
          <button
            onClick={onOpenTagModal}
            className="underline hover:text-amber-700 dark:hover:text-amber-100 transition-colors cursor-pointer flex items-center gap-1 font-medium"
          >
            <Info className="w-3 h-3" />
            Change Tag
          </button>
        </div>
      </div>
    </div>
  );
};
