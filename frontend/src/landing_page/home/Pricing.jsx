import React from "react";
import Card from "../Card";

function Pricing() {
	return (
		<Card
			left={
				<>
					<h1 className="mb-3 fs-2">Unbeatable pricing</h1>
					<p>
						We pioneered the concept of discount broking and price transparency
						in India. Flat fees and no hidden charges.
					</p>
					<a href="" style={{ textDecoration: "none" }}>
						See Pricing{" "}
						<i class="fa fa-long-arrow-right" aria-hidden="true"></i>
					</a>
				</>
			}
			right={
				<>
					<div className="row text-center">
						<div className="col p-3 border">
							<h1 className="mb-3">₹0</h1>
							<p>
								Free equity delivery and
								<br />
								direct mutual funds
							</p>
						</div>
						<div className="col p-3 border">
							<h1 className="mb-3">₹20</h1>
							<p>Intraday and F&O</p>
						</div>
					</div>
				</>
			}
		/>
	);
}

export default Pricing;
