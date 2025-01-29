export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  medicalSources: string[];
  studyType?: 'Ensayo' | 'Observacional' | 'Metaanálisis';
  patientCount?: number;
}