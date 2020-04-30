import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PortfolioPage from './components/PortfolioPage';
import HomePage from './components/HomePage';

function App() {
    return (
        <Router>
            <>
                <Route
                    exact
                    path={['/', '/about', '/index.html', '/test']}
                    component={HomePage}
                />
                <Route exact path="/portfolio" component={PortfolioPage} />
                {/* <Route exact path="/search" component={SearchPage} /> */}
            </>
        </Router>
    );
}

export default App;
