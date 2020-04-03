import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';
import NavBar from './NavBar';
import Footer from './Footer';
function PortfolioPage() {
    return (
        <>
            <NavBar />
            <main className="mt-5">
                <div className="container">
                    {projects.map(el => (
                        <ProjectCard
                            title={el.title}
                            description={el.description}
                            picture_url={el.picture_url}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default PortfolioPage;
