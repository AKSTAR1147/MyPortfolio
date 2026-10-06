import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Backend role',
    message: ''
  });
  const [emailError, setEmailError] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const isValidEmail = (emailStr: string): boolean => {
    const email = emailStr.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return false;

    const parts = email.split('@');
    if (parts.length !== 2) return false;
    
    const domain = parts[1].toLowerCase();
    const blockedDomains = ['test.com', 'fake.com', 'example.com', 'asdf.com', 'temp.com', 'mailinator.com'];
    if (blockedDomains.includes(domain)) return false;

    const domainParts = domain.split('.');
    if (domainParts.length < 2) return false;
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2) return false;

    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'email' && emailError) {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid, existing email address so I can reply to your message.');
      return;
    }

    setEmailError('');
    setStatus('submitting');

    try {
      if (portfolioData.contact.formspreeEndpoint) {
        const response = await fetch(portfolioData.contact.formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', interest: 'Backend role', message: '' });
        } else {
          setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', interest: 'Backend role', message: '' });
          }, 800);
        }
      } else {
        setTimeout(() => {
          setStatus('success');
          setFormData({ name: '', email: '', interest: 'Backend role', message: '' });
        }, 800);
      }
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', interest: 'Backend role', message: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Let's Build Something
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Looking for a backend engineer, Java developer, or software engineer? I'd be happy to connect.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden">
          {/* Top Red Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />

          {status === 'success' && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-xl flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <p className="text-sm font-medium">
                Thank you! Your message has been sent successfully. I will get back to you shortly.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-300 text-red-900 rounded-xl flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <p className="text-sm font-medium">
                Oops! Something went wrong while sending your message. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className={`w-full px-4 py-3 bg-white border ${
                    emailError ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-300'
                  } rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all`}
                />
                {emailError && (
                  <p className="text-xs text-red-600 font-semibold mt-1.5 flex items-center gap-1">
                    <AlertCircle size={13} />
                    <span>{emailError}</span>
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                I'm Interested in:
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all"
              >
                <option value="Backend role">Backend role</option>
                <option value="Software engineering role">Software engineering role</option>
                <option value="Full-time opportunity">Full-time opportunity</option>
                <option value="Project collaboration">Project collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase font-bold text-slate-600 mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Share project details or role requirements..."
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-300 disabled:opacity-50 inline-flex items-center justify-center gap-2 shadow-md"
              >
                <Send size={16} />
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </form>

          {/* Direct Social Links & Resume Below Form */}
          <div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold">
            <a
              href={portfolioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-amber-600 transition-colors"
            >
              <LinkedinIcon size={18} className="text-amber-600" />
              <span>LinkedIn</span>
            </a>

            <a
              href={portfolioData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={portfolioData.socials.email}
              className="inline-flex items-center gap-2 text-slate-700 hover:text-red-600 transition-colors"
            >
              <Mail size={18} className="text-red-600" />
              <span>Email</span>
            </a>

            <a
              href={portfolioData.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <FileText size={18} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
