import React, { Component } from 'react'

export default class Feature extends Component {
    render() {
        return (
            <div>

                {/* <!-- Start Feature Area --> */}
<section className="featured-area">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-12 single-feature pt-80 pb-80 d-flex flex-row">
                <img className="img-fluid" src="assets/img/p1.jpg" alt=""/>
                <div className="desc">
                    <h2>Fresh Arrivals</h2>
                    <p>
                        Here, I focus on a range of items and features that we use in life without giving them a  thought. such as Coca Cola.
                    </p>
                    <a className="text-uppercase" href="#">Learn Details</a>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 single-feature pt-80 pb-80 d-flex flex-row">
                <img src="assets/img/p2.jpg" alt=""/>
                <div className="desc">
                    <h2>Online Store</h2>
                    <p>
                        Here, I focus on a range of items and features that we use in life without giving them a  thought. such as Coca Cola.
                    </p>
                    <a className="text-uppercase" href="#">Learn Details</a>
                </div>
            </div>
            <div className="col-md-4 col-sm-12 single-feature pt-80 pb-80 d-flex flex-row">
                <img src="assets/img/p3.jpg" alt=""/>
                <div className="desc">
                    <h2>Fresh Arrivals</h2>
                    <p>
                        Here, I focus on a range of items and features that we use in life without giving them a  thought. such as Coca Cola.
                    </p>
                    <a className="text-uppercase" href="#">Learn Details</a>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- End Feature Area --> */}
                
            </div>
        )
    }
}
