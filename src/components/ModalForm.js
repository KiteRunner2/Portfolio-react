import React from 'react';

function ModalFrom() {
    return (
        <div class="container">
            <div
                class="modal fade"
                id="contactModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
            >
                <div
                    class="modal-dialog modal-dialog-centered container"
                    role="document"
                >
                    <div class="modal-content">
                        {/* <!--Section: Content--> */}
                        <section class="text-center dark-grey-text mb-5">
                            <div style="padding:1rem;">
                                {/* <!-- <div class="card"> --> */}
                                {/* <!-- <div class="card-body"> --> */}

                                {/* <!-- Section heading --> */}
                                <h3 class="font-weight-bold my-4">
                                    Contact me
                                </h3>

                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        {/* <!-- Name --> */}
                                        <input
                                            type="text"
                                            id="name"
                                            class="form-control"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        {/* <!-- Email --> */}
                                        <input
                                            type="email"
                                            id="email"
                                            class="form-control"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 mb-4">
                                        {/* <!-- Subject --> */}
                                        <input
                                            type="text"
                                            id="subject"
                                            class="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group mb-4">
                                            <textarea
                                                class="form-control rounded"
                                                id="message"
                                                rows="3"
                                                placeholder="Your message"
                                            ></textarea>
                                        </div>

                                        <div class="text-center">
                                            <button
                                                type="submit"
                                                onclick="submit();$('#contactModal').modal('hide')"
                                                class="btn btn-info btn-md btn-teal darken-1"
                                                style="box-shadow: 3px 3px 8px teal"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- </form> --> */}

                                {/* <!-- </div> --> */}
                                {/* <!-- </div> --> */}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalFrom;
