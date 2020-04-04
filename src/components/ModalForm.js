import React from 'react';

function handleFormSubmit() {
    console.log('handle form submit called');
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let postData = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };
    console.log(postData);
    // console.log(document.getElementById('contactModal').dataset);
    // document.getElementById('wrapper').style = 'display:none';
    // document.getElementById('contactModal').className = 'modal fade';
    // document.getElementById('contactModal').style = 'display:none';
}

function ModalFrom() {
    //     function submit() {

    //         // console.log(postData);
    //         $.post('/wyslijmail.php', postData).then(response => {
    //             $('#name').val('');
    //             $('#email').val('');
    //             $('#subject').val('');
    //             $('#message').val('');
    //             if (response == 'ok') {
    //                 $('#alertMessage')
    //                     .html(`<div id="x1" class="alert alert-success alert-dismissible fade show" role="alert">
    //   Thank you! Your messsage has been sent!<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //   </div>`);
    //                 setTimeout(function() {
    //                     $('#x1').fadeOut(1000);
    //                 }, 2500);
    //                 return true;
    //             } else {
    //                 $('#alertMessage')
    //                     .html(`<div id="x1" class="alert alert-danger alert-dismissible fade show" role="alert">
    //               There was a problem sending your message. Please try again later.<button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //             <span aria-hidden="true">&times;</span>
    //           </button>
    //   </div>`);
    //                 setTimeout(function() {
    //                     $('#x1').fadeOut(1000);
    //                 }, 2500);
    //                 return true;
    //             }
    //         });
    //     }

    const style = {
        padding: {
            padding: '1rem',
        },
        boxShadow: {
            boxShadow: '3px 3px 8px teal',
        },
    };
    return (
        <div
            className="modal fade"
            id="contactModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-dialog-centered container"
                role="document"
            >
                <div className="modal-content">
                    {/* <!--Section: Content--> */}
                    <section className="text-center dark-grey-text mb-5">
                        <div style={style.padding}>
                            {/* <!-- <div className="card"> --> */}
                            {/* <!-- <div className="card-body"> --> */}

                            {/* <!-- Section heading --> */}
                            <h3 className="font-weight-bold my-4">
                                Contact me
                            </h3>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    {/* <!-- Name --> */}
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="col-md-6 mb-4">
                                    {/* <!-- Email --> */}
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Your email"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 mb-4">
                                    {/* <!-- Subject --> */}
                                    <input
                                        type="text"
                                        id="subject"
                                        className="form-control"
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group mb-4">
                                        <textarea
                                            className="form-control rounded"
                                            id="message"
                                            rows="3"
                                            placeholder="Your message"
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            onClick={handleFormSubmit}
                                            className="btn btn-info btn-md btn-teal darken-1"
                                            style={style.boxShadow}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- </form> --> ;$('#contactModal').modal('hide') */}

                            {/* <!-- </div> --> */}
                            {/* <!-- </div> --> */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ModalFrom;
