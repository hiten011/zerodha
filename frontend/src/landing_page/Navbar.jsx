import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg border-bottom"
			style={{ backgroundColor: "#FFF" }}
		>
			<div className="container-fluid d-flex justify-content-between align-items-center p-1">
                <div className="ms-5">
                    <Link className="navbar-brand" to="/">
                        <img
                            className="img-fluid"
                            src="media/images/logo.svg"
                            style={{ maxWidth: "130px" }}
                            alt="Logo"
                        />
                    </Link>
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
                            <Link className="nav-link me-4" to="signup">
                                Signup
                            </Link>
                            <Link className="nav-link me-4" to="about">
                                About
                            </Link>
                            <Link className="nav-link me-4" to="product">
                                Product
                            </Link>
                            <Link className="nav-link me-4" to="pricing">
                                Pricing
                            </Link>
                            <Link className="nav-link" to="support">
                                Support
                            </Link>
                        </div>
                    </div>
                </div>
			</div>
		</nav>
	);
}

export default Navbar;
