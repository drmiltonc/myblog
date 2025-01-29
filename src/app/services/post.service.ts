import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Nuevos biomarcadores en orina para diagnóstico temprano',
      excerpt: 'Identificación de exosomas específicos asociados a progresión renal',
      content: `Un estudio multicéntrico publicado en NEJM revela... (detalles técnicos)`,
      author: 'Dra. Ana Torres, Nefróloga',
      date: '2024-03-15',
      medicalSources: ['https://www.nejm.org/doi/10.1056/NEJMoa2306963'],
      studyType: 'Observacional',
      patientCount: 1245
    },
    {
      id: 2,
      title: 'Terapia combinada SGLT2 + GLP-1 muestra resultados prometedores',
      excerpt: 'Reducción del 40% en progresión a ESRD en pacientes con TFGe <30',
      content: `Análisis del estudio DELIGHT... (explicar mecanismos de acción)`,
      author: 'Dr. Carlos Méndez, Endocrinólogo',
      date: '2024-02-28',
      medicalSources: ['https://www.kidney-international.org/article/S0085-2538(24)00123-4/fulltext'],
      studyType: 'Ensayo',
      patientCount: 892
    },
    {
      id: 3,
      title: 'Avances en biopsia renal no invasiva mediante IA',
      excerpt: 'Algoritmo deep learning predice fibrosis con 92% de precisión',
      content: `Tecnología desarrollada por la Universidad de Stanford...`,
      author: 'Dra. Laura Vega, Patóloga Renal',
      date: '2024-04-10',
      medicalSources: ['https://www.nature.com/articles/s41591-024-02878-y'],
      patientCount: 367
    },
    {
      id: 4,
      title: 'Nuevas guías KDIGO 2024: Cambios en manejo de albuminuria',
      excerpt: 'Umbral revisado para inicio temprano de terapia antiinflamatoria',
      content: `Resumen de las recomendaciones... (comparativa con guías anteriores)`,
      author: 'Comité Internacional KDIGO',
      date: '2024-01-05',
      medicalSources: ['https://kdigo.org/guidelines/diabetic-kidney-disease/'],
      studyType: 'Metaanálisis'
    }
  ];

  getPosts() { return this.posts; }
  getPost(id: number) { return this.posts.find(post => post.id === id); }
}