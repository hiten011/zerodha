import React from "react";
import Card from "../Card";

function Education() {
	return (
		<Card
			left={
				<div className="d-flex justify-content-center align-items-center">
					<img src="media/images/education.svg" style={{ width: "70%" }} />
				</div>
			}

			right={
				<>
					<h1 className="mb-3 fs-2">Free and open market education</h1>
					<p>
						Varsity, the largest online stock market education book in the world
						covering everything from the basics to advanced trading.
					</p>
					<a href="" style={{ textDecoration: "none" }}>
						Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
					</a>
					<p className="mt-5">
						TradingQ&A, the most active trading and investment community in
						India for all your market related queries.
					</p>
					<a href="" style={{ textDecoration: "none" }}>
						TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
					</a>
				</>
			}
		/>
	);
}

export default Education;
