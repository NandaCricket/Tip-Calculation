
import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function calculateTip() {
    if (billAmount === "" || tipPercentage === "") {
      setErrorMsg("Enter Valid Input");
    } else {
      setErrorMsg("");
      let billAmountValue = parseFloat(billAmount);
      let tipPercentageValue = parseFloat(tipPercentage);

      let calculateTipAmount = (billAmountValue / 100) * tipPercentageValue;
      let calculateTotalAmount = billAmountValue + calculateTipAmount;

      setTipAmount(calculateTipAmount.toFixed());
      setTotalAmount(calculateTotalAmount.toFixed());
    }
  }

  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <div className="bill-div">
        <label id="billLabel">BILL AMOUNT</label>
        <br />
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          id="billInput"
        />
        <br />
      </div>
      <div>
        <label id="billLabel">TIP PERCENTAGE</label>
        <br />
        <input
          type="number"
          value={tipPercentage}
          onChange={(e) => setTipPercentage(e.target.value)}
          id="billInput"
        />
        <br />
      </div>
      <div>
        <label id="billLabel">TIP AMOUNT</label>
        <br />
        <input type="number" value={tipAmount} readOnly id="billInput" />
        <br />
      </div>
      <div>
        <label id="billLabel">TOTAL AMOUNT</label>
        <br />
        <input type="number" value={totalAmount} readOnly id="billInput" />
        <br />
      </div>
      <div>
        <button onClick={calculateTip} className="btnDiv">
          CALCULATOR
        </button>
        <p style={{ color: "red" }}>{errorMsg}</p>
      </div>
    </div>
  );
};

export default App; 
