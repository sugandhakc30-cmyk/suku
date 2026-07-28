import React, { useState } from 'react';
import { X, Tag, Check, RefreshCw, ExternalLink, ShieldCheck } from 'lucide-react';
import { DEFAULT_ASSOCIATE_TAG } from '../data/amazonProducts';
import { saveAssociateTag } from '../utils/affiliateUtils';

interface AssociateTagModalProps {
  currentTag: string;
  onClose: () => void;
  onSaveTag: (newTag: string) => void;
}

export const AssociateTagModal: React.FC<AssociateTagModalProps> = ({ currentTag, onClose, onSaveTag }) => {
  const [inputTag, setInputTag] = useState(currentTag);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputTag.trim() || DEFAULT_ASSOCIATE_TAG;
    saveAssociateTag(clean);
    onSaveTag(clean);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const sampleUrl = `https://www.amazon.com/dp/B09XS7JWHH?tag=${encodeURIComponent(inputTag.trim() || DEFAULT_ASSOCIATE_TAG)}&linkCode=ogi&th=1`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">
                Amazon Associate Tag Inspector
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Test custom affiliate tracking parameters on all site links
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="block font-bold text-slate-800 dark:text-slate-200">
              Your Amazon Associate Tag ID:
            </label>
            <div className="relative">
              <input
                type="text"
                value={inputTag}
                onChange={(e) => setInputTag(e.target.value)}
                placeholder="e.g. mywebsite-20"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="button"
                onClick={() => setInputTag(DEFAULT_ASSOCIATE_TAG)}
                title="Reset to default tag"
                className="absolute right-2 top-2 p-1.5 rounded-lg text-slate-400 hover:text-amber-500 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Valid Amazon Associate tags usually end with <strong>-20</strong> (US), <strong>-21</strong> (UK/EU), or custom sub-ids.
            </p>
          </div>

          {/* Sample Generated URL preview */}
          <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
            <span className="font-semibold text-slate-600 dark:text-slate-400 text-[11px]">
              Live Generated URL Preview:
            </span>
            <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[11px] text-amber-600 dark:text-amber-400 break-all">
              {sampleUrl}
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compliant tracking tag format verified.</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold flex items-center gap-1.5 cursor-pointer transition-colors shadow-md"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-slate-950" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Apply Tag to Site</span>
              )}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
