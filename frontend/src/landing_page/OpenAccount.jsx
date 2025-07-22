import React from "react";
import Button from './Button'

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h2 className="mb-4">Open a Zerodha account</h2>
        <p className="mb-5">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Button text="Sign up for free" />
      </div>
    </div>
  );
}

export default OpenAccount;