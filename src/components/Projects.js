
import React from 'react';
import '../styles/Projects.css'; 

  
const Projects = () => {
    const projectsData = [
        {
          id: 1,
          title: 'Proje 1',
          description: 'Bu proje hakkında kısa bir açıklama.',
          link: 'https://proje1-linki.com',
        },
        {
          id: 2,
          title: 'Proje 2',
          description: 'Bu proje hakkında kısa bir açıklama.',
          link: 'https://proje2-linki.com',
        },
        {
            id: 3,
            title: 'Proje 2',
            description: 'Bu proje hakkında kısa bir açıklama.',
            link: 'https://proje2-linki.com',
          },
      
      ];
  return (
    <div className='projects-page'>
        <div className="project-container">
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="overlay">
              <button>Detayları Gör</button>
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
