import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';
function ProjectSection() {
    console.log('showing projects.json content', projects);
    return (
        <div className="container">
            {projects.map(el => (
                <ProjectCard
                    title={el.title}
                    description={el.description}
                    picture_url={el.picture_url}
                />
            ))}
        </div>
    );
}

export default ProjectSection;
