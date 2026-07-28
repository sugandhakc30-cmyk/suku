import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, ArrowLeft, ShieldCheck, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'General Inquiry',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 pb-16">
      
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Product Catalog
        </button>

        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
            <Mail className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white">
              Contact Editorial Desk &amp; Feedback
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Have a product suggestion, compliance question, or feedback for our testing team?
            </p>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="p-8 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-950 dark:text-emerald-200 text-center space-y-4 shadow-xl">
          <div className="w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Message Sent Successfully!
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Thank you, <strong>{formData.name}</strong>. Our editorial team has received your message regarding "<em>{formData.subject || formData.category}</em>" and will review it shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: '', email: '', category: 'General Inquiry', subject: '', message: '' });
            }}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div className="space-y-1.5 text-xs">
              <label className="block font-bold text-slate-800 dark:text-slate-200">
                Your Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5 text-xs">
              <label className="block font-bold text-slate-800 dark:text-slate-200">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
            </div>

          </div>

          {/* Category Selector */}
          <div className="space-y-1.5 text-xs">
            <label className="block font-bold text-slate-800 dark:text-slate-200">
              Inquiry Topic
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm font-medium"
            >
              <option value="General Inquiry">General Question</option>
              <option value="Product Suggestion">Product Review Suggestion</option>
              <option value="Compliance Question">Amazon Associates / Compliance Feedback</option>
              <option value="Partnership">Media &amp; Affiliate Partnership</option>
            </select>
          </div>

          {/* Subject */}
          <div className="space-y-1.5 text-xs">
            <label className="block font-bold text-slate-800 dark:text-slate-200">
              Subject Line
            </label>
            <input
              type="text"
              placeholder="Brief summary of your inquiry..."
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5 text-xs">
            <label className="block font-bold text-slate-800 dark:text-slate-200">
              Your Message <span className="text-rose-500">*</span>
            </label>
            <textarea
              required
              rows={5}
              placeholder="Type your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm leading-relaxed"
            />
          </div>

          {/* Submit */}
          <div className="pt-2 flex items-center justify-between">
            <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              Your email is kept strictly confidential.
            </p>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-md cursor-pointer transition-colors"
            >
              <span>Submit Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </form>
      )}

    </div>
  );
};
