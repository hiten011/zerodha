import React from "react";

function Card({left, right}) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-around align-items-center">

                <div className="col-12 col-lg-6 p-5">{left}</div>
                
                <div className="col-12 col-lg-6 p-5">{right}</div>

            </div>
        </div>
    );
}

export default Card; 