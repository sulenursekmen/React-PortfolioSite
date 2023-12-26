
import React from 'react';
import '../styles/Projects.css'; 
import VisibilityIcon from '@mui/icons-material/Visibility';
  
const Projects = () => {
    const projectsData = [
        {
          id: 1,
          title: 'React | Getir Clone ',
          description: 'Bu proje hakkında kısa bir açıklama.',
          link: 'https://github.com/sulenursekmen/React-GetirClone',
        },
        {
          id: 2,
          title: 'React | Quiz App',
          description: 'Bu proje hakkında kısa bir açıklama.',
          link: 'https://github.com/sulenursekmen/React-Quiz',
        },
        {
            id: 3,
            title: 'React | English Word App',
            description: 'Bu proje hakkında kısa bir açıklama.',
            link: 'https://github.com/sulenursekmen/React-EnglishWords',
          },
          {
            id: 4,
            title: 'React | Portfolio Web Site',
            description: 'Bu proje hakkında kısa bir açıklama.',
            link: 'https://github.com/sulenursekmen/React-PortfolioSite',
          },
          {
            id: 5,
            title: 'React | Weather App',
            description: 'Bu proje hakkında kısa bir açıklama.',
            link: 'https://github.com/sulenursekmen/React-WeatherApp',
          },
          {
            id: 6,
            title: 'React | Jira Application',
            description: 'Bu proje hakkında kısa bir açıklama.',
            link: 'https://github.com/sulenursekmen/JiraApplication-React',
          },
      
      ];
  return (
    <div className='projects-page'> 
    <h1 className='title'>PROJELER</h1>
        <div className="project-container">
      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <h3 className='card-title'>{project.title}</h3>
          <p className='card-description'>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="overlay">
              <button><span>Detayları Gör <VisibilityIcon/></span></button>
            </div>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Projects;
