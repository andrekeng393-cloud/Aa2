export type SiteCategory = 'agency' | 'freelance' | 'restaurant' | 'shop';

export type ColorTheme = 'indigo' | 'emerald' | 'amber' | 'rose' | 'sky';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  linkText?: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface StatItem {
  label: string;
  value: string;
  detail: string;
}

export interface SiteContent {
  id: SiteCategory;
  categoryName: string;
  siteName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBadge: string;
  aboutTitle: string;
  aboutText: string;
  aboutSubtext: string;
  stats: StatItem[];
  servicesTitle: string;
  servicesSubtitle: string;
  services: ServiceItem[];
  projectsTitle: string;
  projectsSubtitle: string;
  projects: ProjectItem[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: TestimonialItem[];
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  contactHours: string;
}
