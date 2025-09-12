import React from "react";
import { useLocation } from "react-router";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { PaymentForm } from "../Components/Page/Payment";
import { OrderSummary } from "../Components/Page/Order";

function Payment() {
  const {
    state: { apiResult, userInput },
  } = useLocation();

  const stripePromise = loadStripe(
    "pk_test_51RzdnS4X9x8P6AjF7oViSqx8SbiobUBtQ7HyY7FFWCdGZkeUW3kokKVN4zcMhvtoFxktx6hopMgZGUeeYbQuq9fA00lrivGTjZ"
  );
  const options = {
    // passing the client secret obtained from the server
    clientSecret: apiResult.clientSecret,
  };
console.log(apiResult);
  return (
    <Elements stripe={stripePromise} options={options}>
      <div className="container m-5 p-5">
        <div className="row">
          <div className="col-md-7">
            <OrderSummary data={apiResult} userInput={userInput} />
          </div>
          <div className="col-md-4 offset-md-1">
            <h3 className="text-success">Payment</h3>
            <div className="mt-5">
              <PaymentForm />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default Payment;
