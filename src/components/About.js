import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>



                {/* <!-- About Area --> */}
     <section className="about-area">
        <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-lg-6 about-left">
                    <img className="img-fluid" src="assets/img/about.jpg" alt=""/>
                </div>
                <div className="col-lg-6 about-right p-40">
                    <div className="begining-content">
                        <div className="single_about">
                            <h2>Powerful Performance</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className="single_about">
                            <h2>Light & Dark Color Schemes</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End About Area --> */}

                
            </div>
        )
    }
}
