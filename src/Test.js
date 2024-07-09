import { useState } from "react";

export default function Test() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="container align-items-center justify-content-center text-center">
        <div className="row">
          <div className="col-3 ">
            <button
              className="btn btn-danger "
              onClick={() => {
                setStep(step - 1);
              }}
            >
              -
            </button>
          </div>
          <div className="col-6 ">
            <h1>Step {step}</h1>
          </div>
          <div className="col-3 ">
            <button
              className="btn btn-primary "
              onClick={() => {
                setStep(step + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-3 ">
            <button
              className="btn btn-danger "
              onClick={() => {
                setCount(count - step);
              }}
            >
              -
            </button>
          </div>
          <div className="col-6 ">
            <h1>count {count}</h1>
          </div>
          <div className="col-3 ">
            <button
              className="btn btn-primary "
              onClick={() => {
                setCount(count + step);
              }}
            >
              +
            </button>
          </div>
        </div>
        <h1> date : {date.toDateString()} </h1>
      </div>
    </>
  );
}
