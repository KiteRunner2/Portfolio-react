import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectsSection';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <>
                <NavBar />
                <ProjectSection />
                <Footer />
            </>
        </Router>
    );
}

export default App;
