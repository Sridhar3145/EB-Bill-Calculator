import React, { useState } from "react";

const Calculator = () => {
  const [pre, setPre] = useState(null);
  const [cur, setCur] = useState(null);
  const [bill, setBill] = useState(null);

  const handleClear = () => {
    setCur(null);
    setPre(null);
    setBill(null);
  };

  const handleCalculate = () => {
    if (pre === null || cur === null) {
      return alert("Please enter both previous and current readings.");
    }
    if (pre > cur) {
      return alert("Previous unit must be smaller than current unit.");
    }
    let units = cur - pre;
    if (units <= 100) {
      setBill("Bill not generated for consumption up to 100 units.");
      return;
    }
    let cost = 0;
    if (units <= 500) {
      if (units > 400) cost += (units - 400) * 6.15;
      if (units > 200) cost += (Math.min(units, 400) - 200) * 4.5;
      if (units > 100) cost += (Math.min(units, 200) - 100) * 2.25;
    } else {
      if (units > 1000) cost += (units - 1000) * 11.8;
      if (units > 800) cost += (Math.min(units, 1000) - 800) * 10.2;
      if (units > 600) cost += (Math.min(units, 800) - 600) * 9.2;
      if (units > 500) cost += (Math.min(units, 600) - 500) * 8.15;
      cost += (Math.min(units, 500) - 400) * 6.15;
      cost += (Math.min(units, 400) - 100) * 4.5;
    }
    setBill(cost);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-color min-h-screen">
      <div className="font-abc">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Electricity Bill Calculator
        </h1>
        <p className="text-center text-xl text-gray-600 mb-6">
          Use our interactive electricity bill calculator to get an accurate
          estimate of your monthly electricity costs.Simply input <br />
          your usage details, and our calculator will do the rest. This tool
          helps you understand where your money is going and
          <br /> how you can start saving.
        </p>
        <div className="flex items-center justify-center bg-color">
          <div className="bg-green-400 shadow-md rounded-lg p-6 max-w-md  w-full">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
              EB Calculator
            </h1>
            <input
              type="number"
              value={pre !== null ? pre : ""}
              onChange={(e) => setPre(Number(e.target.value))}
              placeholder="Previous Reading"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <input
              type="number"
              value={cur !== null ? cur : ""}
              onChange={(e) => setCur(Number(e.target.value))}
              placeholder="Current Reading"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring focus:ring-blue-300"
            />
            <button
              className="w-full py-2 rounded-lg mb-4 bg-green-300  text-black   hover:bg-gray-600 hover:text-white transition"
              onClick={handleCalculate}
            >
              Calculate
            </button>
            <button
              className="w-full bg-green-300  text-black py-2 rounded-lg hover:bg-gray-600 hover:text-white transition"
              onClick={handleClear}
            >
              Clear
            </button>
            {bill !== null && (
              <div className="mt-4 text-center">
                <p className="text-lg font-semibold text-gray-800">
                  Total Electricity Bill:{" "}
                  {typeof bill === "string" ? bill : `₹${bill.toFixed(2)}`}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center bg-color">
          <div className="mt-6 bg-green-400 shadow-md rounded-lg p-4 max-w-md w-full ">
            <h3 className="text-2xl font-abc font-bold text-gray-800 mb-2">
              Guidelines
            </h3>
            <ul className="list-disc list-inside text-gray-600 font-abc text-sm">
              <li>Put last month's reading as the previous reading.</li>
              <li>Check the current reading on your meter and input it.</li>
              <li>This will only calculate for home use.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
