import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>

                {/* <!-- Header Area --> */}
		<div className="main-wrapper-first">
			<header>
				<div className="container">
					<div className="header-wrap">
						<div className="header-top d-flex justify-content-between align-items-center">
							<div className="logo">
								<a href="index.html"><img src="assets/img/logo.png" alt=""/></a>
							</div>
							<div className="main-menubar d-flex align-items-center">
								<nav className="hide">
									<a href="index.html">Home</a>
									<a href="generic.html">Generic</a>
									<a href="elements.html">Elements</a>
								</nav>
								<div className="menu-bar"><span className="lnr lnr-menu"></span></div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
		{/* {/* <!-- End Header Area -->} */}
                
            </div>
        )
    }
}
