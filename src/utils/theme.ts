import { ColorTheme } from '../types';

export interface ThemeStyles {
  primaryBtn: string;
  primaryBg: string;
  primaryText: string;
  badgeBg: string;
  borderAccent: string;
  ring: string;
  iconBg: string;
  gradientBadge: string;
}

export const themes: Record<ColorTheme, ThemeStyles> = {
  indigo: {
    primaryBtn: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow transition-all',
    primaryBg: 'bg-indigo-600',
    primaryText: 'text-indigo-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border border-indigo-200/80',
    borderAccent: 'border-indigo-600',
    ring: 'focus:ring-indigo-500',
    iconBg: 'bg-indigo-100 text-indigo-700',
    gradientBadge: 'from-indigo-500 to-violet-600',
  },
  emerald: {
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all',
    primaryBg: 'bg-emerald-600',
    primaryText: 'text-emerald-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    borderAccent: 'border-emerald-600',
    ring: 'focus:ring-emerald-500',
    iconBg: 'bg-emerald-100 text-emerald-700',
    gradientBadge: 'from-emerald-500 to-teal-600',
  },
  amber: {
    primaryBtn: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm hover:shadow transition-all',
    primaryBg: 'bg-amber-600',
    primaryText: 'text-amber-600',
    badgeBg: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    borderAccent: 'border-amber-600',
    ring: 'focus:ring-amber-500',
    iconBg: 'bg-amber-100 text-amber-800',
    gradientBadge: 'from-amber-500 to-orange-600',
  },
  rose: {
    primaryBtn: 'bg-rose-600 hover:bg-rose-700 text-white shadow-sm hover:shadow transition-all',
    primaryBg: 'bg-rose-600',
    primaryText: 'text-rose-600',
    badgeBg: 'bg-rose-50 text-rose-700 border border-rose-200/80',
    borderAccent: 'border-rose-600',
    ring: 'focus:ring-rose-500',
    iconBg: 'bg-rose-100 text-rose-700',
    gradientBadge: 'from-rose-500 to-pink-600',
  },
  sky: {
    primaryBtn: 'bg-sky-600 hover:bg-sky-700 text-white shadow-sm hover:shadow transition-all',
    primaryBg: 'bg-sky-600',
    primaryText: 'text-sky-600',
    badgeBg: 'bg-sky-50 text-sky-700 border border-sky-200/80',
    borderAccent: 'border-sky-600',
    ring: 'focus:ring-sky-500',
    iconBg: 'bg-sky-100 text-sky-700',
    gradientBadge: 'from-sky-500 to-blue-600',
  },
};
