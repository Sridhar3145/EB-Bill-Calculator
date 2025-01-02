import React from "react";

const Table = ({ title, data }) => (
  <div className="table-container w-full max-w-4xl mx-auto my-8">
    <table className="w-full border border-gray-300 shadow-lg">
      <thead>
        <tr>
          <th
            colSpan="2"
            className="text-lg font-semibold text-center border-b border-black bg-green-400 py-2"
          >
            {title}
          </th>
        </tr>
        <tr>
          <th className="font-medium text-gray-700 py-2 text-center bg-green-400">
            Units
          </th>
          <th className="font-medium text-gray-700 py-2 text-center bg-green-400">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-t border-black">
            <td className="py-2 text-center">{row.units}</td>
            <td className="py-2 text-center">{row.cost}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Chart = () => {
  const consumptionUpTo500 = [
    { units: "0-100", cost: "0" },
    { units: "101-200", cost: "2.25" },
    { units: "201-400", cost: "4.50" },
    { units: "401-500", cost: "6.15" },
  ];

  const consumptionAbove500 = [
    { units: "0-100", cost: "0" },
    { units: "101-400", cost: "4.50" },
    { units: "401-500", cost: "6.15" },
    { units: "501-600", cost: "8.15" },
    { units: "601-800", cost: "9.20" },
    { units: "801-1000", cost: "10.20" },
    { units: "Above 1000 units", cost: "11.80" },
  ];

  return (
    <div className="chart p-4">
      <div className="chart-inner text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Electricity Unit Per Rate Table
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Our detailed electricity unit per rate table breaks down the cost per
          unit of electricity. This table is a valuable resource to see how much
          you’re paying for each unit and identify opportunities for savings.
        </p>
      </div>

      {/* Table for consumption up to 500 units */}
      <Table title="Consumption up to 500 units" data={consumptionUpTo500} />

      {/* Table for consumption above 500 units */}
      <Table title="Consumption above 500 units" data={consumptionAbove500} />
    </div>
  );
};

export default Chart;
