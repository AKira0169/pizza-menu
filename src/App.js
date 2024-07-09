import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  if (isOpen) {
    return (
      <>
        <button
          className="close"
          onClick={() => {
            setOpen(false);
          }}
        >
          &times;
        </button>
        <div className="steps">
          <div className="numbers">
            <div className={`step-1 ${step === 1 ? "active" : ""}`}>1</div>
            <div className={`step-2 ${step === 2 ? "active" : ""}`}>2</div>
            <div className={`step-3 ${step === 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              className="previous"
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => {
                if (step > 1) setStep(step - 1);
              }}
            >
              Previous
            </button>
            <button
              className="next"
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={() => {
                if (step < 3) {
                  setStep(step + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <button
          className="close"
          onClick={() => {
            setOpen(true);
          }}
        >
          &times;
        </button>
      </>
    );
  }
}
