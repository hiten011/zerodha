import React from "react";

import List from '../List';
import Card from '../Card'

function Awards() {
  return (
    <Card

        left = {
        <div className="d-flex flex-column align-items-center">
          <img className='img-fluid' src="media/images/largestBroker.svg" />
        </div>
        }
        
        right = {
        <>
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row d-flex justify-content-evenly">
            <div className="col-6 d-flex justify-content-center">
              <List list={["Futures and Options", "Commodity derivatives", "Currency derivatives"]}/>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <List list={["Futures and Options", "Commodity derivatives", "Currency derivatives"]}/>
            </div>
          </div>

          <img className="mx-auto d-block" src="media/images/pressLogos.png" style={{ width: "90%" }} />
        </>
        }
    />
  );
}

export default Awards;