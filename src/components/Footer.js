import React from 'react';

function Footer() {
    return (
        <>
            <footer class="page-footer font-small teal darken-1 pt-4 mt-4">
                {/* <!-- Footer Links --> */}
                <div class="container text-center">
                    {/* <!-- Grid row --> */}
                    <div class="row">
                        {/* <!-- Grid column --> */}
                        <hr class="clearfix w-100 d-md-none pb-3" />

                        {/* <!-- Grid column --> */}
                        <div class="col-md-12 mb-md-0 mb-3">
                            {/* <!-- Links --> */}
                            <h5 class="text-uppercase">Links</h5>

                            <ul class="list-unstyled">
                                <li>
                                    <a
                                        href="https://github.com/KiteRunner2"
                                        target="blank"
                                    >
                                        My GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/rudzki/"
                                        target="blank"
                                    >
                                        My LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://stackoverflow.com/users/9341591/kiterunner"
                                        target="blank"
                                    >
                                        My StackOverflow
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://twitter.com/kiterunner_ca"
                                        target="blank"
                                    >
                                        My Twitter
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/kiterunner_ca/"
                                        target="blank"
                                    >
                                        My Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
                {/* <!-- Footer Links --> */}
                {/* <!-- Copyright --> */}
                <div class="footer-copyright text-center py-3">
                    © 2020 Copyright:
                    <a href="https://rudzki.ca"> Rudzki.ca</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </>
    );
}

export default Footer;
