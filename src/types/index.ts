export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
}