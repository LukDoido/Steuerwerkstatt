import { NavLink, Service, TeamMember, BlogPost, Testimonial } from '../types';
import { BarChart4, Calculator, ClipboardCheck, FileText, LineChart, Scale } from 'lucide-react';

export const navLinks: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Dienstleistungen', path: '/services' },
  { name: 'Über uns', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Kontakt', path: '/contact' },
];

export const services: Service[] = [
  {
    id: 'buchhaltung',
    title: 'Buchhaltung',
    description: 'Wir führen Ihre Finanzbuchhaltung präzise und zuverlässig. Von der Kontenführung bis zur Mehrwertsteuerabrechnung – wir sorgen für Ordnung in Ihren Finanzen.',
    icon: 'BookOpen',
  },
  {
    id: 'steuerberatung',
    title: 'Steuerberatung',
    description: 'Profitieren Sie von unserer Expertise in der Steuergesetzgebung. Wir optimieren Ihre Steuersituation legal und effizient für Privatpersonen und Unternehmen.',
    icon: 'Calculator',
  },
  {
    id: 'jahresabschluss',
    title: 'Jahresabschlüsse',
    description: 'Wir erstellen rechtskonforme Jahresabschlüsse für Ihr Unternehmen und beraten Sie zu Optimierungsmöglichkeiten für das kommende Geschäftsjahr.',
    icon: 'FileText',
  },
  {
    id: 'lohnwesen',
    title: 'Lohnwesen',
    description: 'Überlassen Sie uns die komplexe Lohnbuchhaltung. Wir kümmern uns um Lohnabrechnungen, Sozialversicherungen und behördliche Meldungen.',
    icon: 'BarChart4',
  },
  {
    id: 'unternehmensberatung',
    title: 'Unternehmensberatung',
    description: 'Stärken Sie Ihr Unternehmen mit unserer strategischen Beratung. Wir unterstützen Sie bei Geschäftsplänen, Finanzierungen und Optimierungen.',
    icon: 'LineChart',
  },
  {
    id: 'rechtsberatung',
    title: 'Rechtsberatung',
    description: 'Wir beraten Sie in rechtlichen Fragen rund um Ihr Unternehmen, von der Gründung bis zu Vertragsangelegenheiten und Nachfolgeregelungen.',
    icon: 'Scale',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'member1',
    name: 'Lucas Banholzer',
    position: 'Geschäftsführer & Fachmann Finanz und Rechnungswesen',
    bio: 'Mit über sechs Jahren Erfahrung in der Finanzbranche, sowohl in internationalen Konzernen als auch in KMUs, leitet Lucas Banholzer unser Expertenteam..',
    image: 'https://i.imgur.com/HoFVHy6.png',
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post1',
    title: 'Steueränderungen 2025 für Schweizer KMU',
    excerpt: 'Die wichtigsten Änderungen im Steuerrecht 2025 und wie sie sich auf Ihr Unternehmen auswirken könnten.',
    date: '15. Oktober 2024',
    category: 'Steuern',
    image: 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'post2',
    title: 'Digitalisierung der Buchhaltung: Chancen nutzen',
    excerpt: 'Wie moderne Buchhaltungssoftware Zeit spart und die Qualität Ihrer Finanzberichte verbessert.',
    date: '28. September 2024',
    category: 'Buchhaltung',
    image: 'https://images.pexels.com/photos/4238488/pexels-photo-4238488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 'post3',
    title: 'Fristen im Blick: Wichtige Steuertermine 2025',
    excerpt: 'Übersicht der wichtigsten Abgabefristen für Steuererklärungen und Mehrwertsteuerabrechnungen im kommenden Jahr.',
    date: '10. September 2024',
    category: 'Fristen',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial1',
    name: 'Andreas Weber',
    company: 'Weber GmbH, Luzern',
    text: 'Die Steuerwerkstatt betreut unsere Buchhaltung und Steuern seit drei Jahren. Wir schätzen besonders die persönliche Beratung und die proaktiven Steueroptimierungsvorschläge.',
  },
  {
    id: 'testimonial2',
    name: 'Laura Huber',
    company: 'Café Seeblick, Horw',
    text: 'Als Gastronomin habe ich wenig Zeit für Papierkram. Das Team der Steuerwerkstatt nimmt mir diese Last ab und hat mir bereits viele wertvolle Tipps zur Kostenoptimierung gegeben.',
  },
  {
    id: 'testimonial3',
    name: 'Martin Keller',
    company: 'Keller Architektur AG',
    text: 'Dank der Steuerwerkstatt konnten wir unsere Steuerlast legal und sicher optimieren. Die Beratung ist stets kompetent und auf unsere Bedürfnisse zugeschnitten.',
  },
];