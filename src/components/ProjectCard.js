import React from 'react';
function ProjectCard(props) {
    return (
        <>
            <div className="row" style={{ paddingBottom: '3rem' }}>
                <div className="col-md-5 mb-4">
                    <div dangerouslySetInnerHTML={{ __html: props.title }} />
                    {/* </hr> */}
                    <div
                        dangerouslySetInnerHTML={{ __html: props.description }}
                    />
                </div>
                {/* <!--Grid column--> */}
                <div class="col-md-7 mb-4">
                    <div class="view overlay z-depth-1-half">
                        <img
                            src={props.picture_url}
                            class="card-img-top"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
