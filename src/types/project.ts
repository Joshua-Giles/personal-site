export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  image: string;
  repo?: string;
  demo?: string;
  featured?: boolean;
  year: number;
}
