import React from "react";

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg border-bottom"
			style={{ backgroundColor: "#FFF" }}
		>
			<div className="container-fluid d-flex justify-content-between align-items-center p-1">
                <div className="ms-5">
                    <a className="navbar-brand" href="#">
                        <img
                            className="img-fluid"
                            src="media/images/logo.svg"
                            style={{ maxWidth: "130px" }}
                            alt="Logo"
                        />
                    </a>
                </div>

                <div className="me-5">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link me-4" href="#">
                                Signup
                            </a>
                            <a className="nav-link me-4" href="#">
                                About
                            </a>
                            <a className="nav-link me-4" href="#">
                                Product
                            </a>
                            <a className="nav-link me-4" href="#">
                                Pricing
                            </a>
                            <a className="nav-link" href="#">
                                Support
                            </a>
                        </div>
                    </div>
                </div>
			</div>
		</nav>
	);
}

export default Navbar;
