import type { Service, Industry, Testimonial, CaseStudy, FAQItem, DevelopmentStep } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'booking',
    title: 'Online Booking Systems',
    description: 'Real-time scheduling portals configured for web and mobile. Custom calendars synchronizing directly with Google Calendar and Microsoft Outlook.',
    icon: 'fa-regular fa-calendar-days',
    iconBg: 'bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400',
  },
  {
    id: 'crm',
    title: 'Customer Profiles & CRM',
    description: 'Automated profiles tracking detailed client appointment histories, custom fields, preference histories, and targeted loyalty rewards.',
    icon: 'fa-solid fa-users',
    iconBg: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 'staff',
    title: 'Staff Coordination Systems',
    description: 'Shift management dashboards offering per-staff custom pricing tiers, individualized lunch breaks, and automated digital work calendars.',
    icon: 'fa-solid fa-address-book',
    iconBg: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400',
  },
  {
    id: 'payments',
    title: 'Local Payment Gateways',
    description: 'Direct out-of-the-box integrations supporting Telebirr, Chapa API, and CBE Birr, allowing instant invoice processing and partial secure deposit holds.',
    icon: 'fa-solid fa-money-bill-transfer',
    iconBg: 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400',
  },
  {
    id: 'sms',
    title: 'Smart Local SMS Engine',
    description: 'Automated SMS texts configured natively for Ethio Telecom networks. Instantly trigger confirmation messages, cancel alerts, and follow-ups.',
    icon: 'fa-solid fa-comment-sms',
    iconBg: 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
  },
  {
    id: 'analytics',
    title: 'Actionable Local Analytics',
    description: 'Real-time revenue metrics, cancellation statistics, staff utilization percentages, and service popularity reports in clear graphical data.',
    icon: 'fa-solid fa-chart-line',
    iconBg: 'bg-yellow-100 dark:bg-yellow-950 text-yellow-600 dark:text-yellow-400',
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    description: 'Modern salons and premium spas',
    icon: 'fa-solid fa-scissors',
    iconBg: 'bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400',
    features: [
      'Modern Barbershops & Hair Salons',
      'Premium Spas & Nail Studios',
      'Custom Makeup Artists',
    ],
  },
  {
    id: 'automotive',
    title: 'Automotive Services',
    description: 'Car detailing and maintenance',
    icon: 'fa-solid fa-car',
    iconBg: 'bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400',
    features: [
      'Car Detailing & High-End Washes',
      'Auto Repair Workshops',
      'Vehicle Inspection & Tire Services',
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Medical clinics and wellness centers',
    icon: 'fa-solid fa-stethoscope',
    iconBg: 'bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400',
    features: [
      'Medical Clinics & Dentists',
      'Physiotherapy & Wellness Centers',
      'Private Doctor Consultations',
    ],
  },
  {
    id: 'fitness',
    title: 'Fitness & Sports',
    description: 'Gyms and training centers',
    icon: 'fa-solid fa-dumbbell',
    iconBg: 'bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400',
    features: [
      'Gyms & Premium Fitness Centers',
      'Personal Training Scheduling',
      'Yoga & Sports Academies',
    ],
  },
  {
    id: 'homeservices',
    title: 'Home Services',
    description: 'Cleaning and maintenance',
    icon: 'fa-solid fa-house-chimney-user',
    iconBg: 'bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400',
    features: [
      'Professional Cleaning Companies',
      'Pest Control & Electrical Services',
      'Local Handyman Agencies',
    ],
  },
  {
    id: 'professional',
    title: 'Professional & Creative',
    description: 'Consultants and creative studios',
    icon: 'fa-solid fa-briefcase',
    iconBg: 'bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400',
    features: [
      'Lawyers, Accountants & Consultants',
      'Photographers & Creative Studios',
      'Tour Operators & Accommodation Booking',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'samson',
    name: 'Samson Tadesse',
    role: 'Owner, Samson Grooming Studio',
    image: 'https://placehold.co/100x100/3b82f6/ffffff?text=S',
    review: 'Booking Solutions completely revolutionized how we run our premium barbershop lanes. Customers book directly on our website, pay using Telebirr, and staff get notified on their calendars. It has completely eliminated front-desk phones!',
    rating: 5,
  },
  {
    id: 'marta',
    name: 'Dr. Marta Kassa',
    role: 'Medical Director, Bole Dental',
    image: 'https://placehold.co/100x100/10b981/ffffff?text=M',
    review: 'The automatic Ethio Telecom SMS notifications have completely resolved missed appointments for our clinic. Patient booking is seamless, and their technical support team in Addis Ababa has been incredibly fast.',
    rating: 5,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'bole-luxury',
    company: 'Bole Luxury Beauty Lounge',
    industry: 'Beauty & SPA',
    challenge: 'Manual phone bookings were causing frequent schedule overlaps and front-desk confusion.',
    solution: 'Custom-branded multi-therapist scheduling platform with Chapa deposit lockups.',
    results: [
      'Over 1,200 monthly digital bookings',
      'Zero appointment double-bookings',
      '100% staff utilization tracking',
    ],
    metrics: [
      { label: 'Bookings Growth', value: '+45%', trend: 'up' },
      { label: 'Monthly Bookings', value: '1,200+' },
    ],
  },
  {
    id: 'samson-auto',
    company: 'Samson Auto Care Center',
    industry: 'Auto Detailing',
    challenge: 'Managing multiple vehicle bays and detailing steps via classic paper records became impossible.',
    solution: 'Multi-bay resource scheduling engine with SMS status updates.',
    results: [
      'Automated scheduling for 5 service bays',
      'SMS alerts updated clients automatically upon completion',
      'Significant reduction in manual administrative work',
    ],
    metrics: [
      { label: 'Admin Time Saved', value: '80%', trend: 'up' },
    ],
  },
  {
    id: 'addis-dental',
    company: 'Addis Family Dental Clinic',
    industry: 'Healthcare',
    challenge: 'Missed appointments were creating empty dentist slots and dropping clinic daily revenues.',
    solution: 'HIPAA-compliant patient calendar with custom automatic SMS text alerts.',
    results: [
      'No-show rates dropped under 4% via automatic multi-lingual SMS confirmation templates',
      'Increased patient attendance',
      'Better revenue predictability',
    ],
    metrics: [
      { label: 'No-show Reduction', value: '-60%', trend: 'down' },
    ],
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'timeline',
    question: 'How long does custom platform development take?',
    answer: 'Most custom business booking platforms are fully designed, developed, integrated, and deployed within 4 to 6 weeks depending on requirements.',
    category: 'general',
  },
  {
    id: 'payments',
    question: 'Are local payments like Telebirr and Chapa supported?',
    answer: 'Yes, absolutely. We specialize in local API integrations, connecting your platform directly with Telebirr, Chapa, and CBE Birr for seamless automated payments.',
    category: 'technical',
  },
  {
    id: 'branches',
    question: 'Can multiple business branches utilize the same system?',
    answer: 'Yes, our enterprise packages are specifically designed for multi-branch structures, allowing central management alongside isolated branch staff shifts.',
    category: 'technical',
  },
  {
    id: 'ownership',
    question: 'Do we receive full ownership of the source code?',
    answer: 'Yes. Upon completion, we hand over full system Intellectual Property, hosting control, and complete code repositories.',
    category: 'general',
  },
];

export const DEVELOPMENT_STEPS: DevelopmentStep[] = [
  {
    id: 1,
    title: 'Discovery & Strategy',
    description: 'Evaluating existing workflows, detailing service types, staff tiers, and defining custom features.',
    icon: 'fa-solid fa-magnifying-glass',
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Structuring tailored design systems and interactive high-fidelity user workflows for desktop and mobile.',
    icon: 'fa-solid fa-palette',
  },
  {
    id: 3,
    title: 'Agile Development',
    description: 'Writing scalable backend API integrations, responsive dashboards, and configuring Chapa & SMS systems.',
    icon: 'fa-solid fa-code',
  },
  {
    id: 4,
    title: 'Support & Launch',
    description: 'Conducting detailed staff training, launching systems to main production hosts, and providing local support.',
    icon: 'fa-solid fa-rocket',
  },
];
