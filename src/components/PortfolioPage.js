import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';
import NavBar from './NavBar';
import Footer from './Footer';
import ModalFrom from './ModalForm';
function PortfolioPage() {
    return (
        <>
            <div id="alertMessage"></div>
            <NavBar />
            <ModalFrom />
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
