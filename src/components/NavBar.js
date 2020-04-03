import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const style = {
    // height: '10vh'
};

function NavBar() {
    const location = useLocation();
    return (
        <>
            <nav
                className="navbar navbar-expand-lg navbar-dark teal darken-1"
                style={style}
            >
                {/* <!-- Additional container --> */}
                <div className="container">
                    {/* <!-- Navbar brand --> */}
                    <Link to="/" className="navbar-brand" href="#">
                        Przemek Rudzki
                    </Link>

                    {/* <!-- Collapse button --> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#basicExampleNav"
                        aria-controls="basicExampleNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* <!-- Collapsible content --> */}
                    <div
                        className="collapse navbar-collapse"
                        id="basicExampleNav"
                    >
                        {/* <!-- Links --> */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link
                                    to="/portfolio"
                                    className={
                                        location.pathname === '/portfolio'
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                    // href="portfolio.html"
                                >
                                    Portfolio
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://github.com/KiteRunner2"
                                    target="blank"
                                >
                                    My GitHub
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="https://www.linkedin.com/in/rudzki/"
                                    target="blank"
                                >
                                    My LinkedIn
                                </a>
                            </li>
                            <li className="nav-item">
                                {/* <!-- <a className="nav-link" href="#" target="">Resume</a> --> */}
                            </li>
                            <li className="nav-item">
                                <a
                                    className="nav-link"
                                    data-toggle="modal"
                                    data-target="#contactModal"
                                    href="#"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                        {/* <!-- Links --> */}

                        <form className="form-inline">
                            <div className="md-form my-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </div>
                        </form>
                    </div>
                    {/* <!-- Collapsible content --> */}
                </div>
                {/* <!-- Additional container --> */}
            </nav>
        </>
    );
}

export default NavBar;
