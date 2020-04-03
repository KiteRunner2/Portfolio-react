import React from 'react';

import NavBar from './NavBar';
import Footer from './Footer';
function HomePage() {
    const style = {
        fontSize: 'larger',
        boxShadow: { boxShadow: '3px 3px 8px teal' }
    };
    return (
        <>
            <NavBar />
            <main className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h1 className="font-weight-bold">
                                Let's Work Together!
                            </h1>
                            <p style={style}>
                                I am indepenent Full-Stack Web Developer based
                                in Toronto, Canada. I specialize in front-end
                                and back-end web development. Skilled in
                                HTML/CSS, Javascript, Node.js, Angular, React,
                                MongoDB, MySQL. First class communication,
                                organization and administration skills. Good
                                team player but can work indepently.
                            </p>
                        </div>
                    </div>
                </div>
                <header className="deep-purple ligthen-1">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3"></div>
                            <div class="col-md-6 py-4 text-center">
                                <div class="card mb-4">
                                    {/* <!--Card image--> */}
                                    {/* <!-- <div class="view overlay">
                  <img src="./assets/img/mypic_small.jpg" class="card-img-top"
                    alt="">
                  <a href="#">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div> --> */}
                                    <div class="card-body">
                                        {/* <!--Title--> */}
                                        <h4 class="card-title font-italic">
                                            Looking to grow your team?
                                        </h4>
                                        {/* <!--Text--> */}
                                        <p class="card-text">
                                            I'm available for permanent/contract
                                            roles in the following locations:
                                            remote (with availability for up to
                                            50% travel), or on-site in Greater
                                            Toronto Area (GTA).
                                        </p>

                                        <p class="card-text">
                                            {' '}
                                            I'm also open to full-time roles at
                                            the senior/leadership level.
                                        </p>
                                        <p class="card-text">
                                            Last update: April 1st, 2020
                                        </p>
                                        <a
                                            href="portfolio.html"
                                            class="btn btn-teal darken-1"
                                            style={style.boxShadow}
                                        >
                                            Learn more
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3"></div>
                        </div>
                    </div>
                </header>
            </main>
            <Footer />
        </>
    );
}

export default HomePage;