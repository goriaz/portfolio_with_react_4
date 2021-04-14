import React, { Component } from 'react'

export default class News extends Component {
    render() {
        return (
            <div>

                {/* <!-- Newsletter Area --> */}
    <section className="newsletter-area pt-60 pb-60">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="text-center">
                    <h3 className="text-white">Subscribe for our Newsletter</h3>
                    <p>We won’t send any kind of spam</p>
                    <div className="subcribe-form" id="mc_embed_signup">
                        <form target="_blank" novalidate action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
                                <input type="email" name="EMAIL" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required/>
                                <div style={{position: "absolute", left: "-5000px"}}>
                                    <input type="text" name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value=""/>
                                </div>
                                <button className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></button>
                                <div className="info"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Newsletter Area --> */}


                
            </div>
        )
    }
}
