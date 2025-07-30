import React, { useState } from "react";

const branches = ["MAM-DELHI", "MAM-KOLKATA"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Analytics() {
  const [branch, setBranch] = useState(branches[0]);
  const [month, setMonth] = useState(months[new Date().getMonth()]);
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Analytics</h1>
      <div className="flex flex-wrap gap-4 mb-8">
        <select value={branch} onChange={e => setBranch(e.target.value)} className="bg-gray-700 px-4 py-2 rounded text-white">
          {branches.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        <select value={month} onChange={e => setMonth(e.target.value)} className="bg-gray-700 px-4 py-2 rounded text-white">
          {months.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <input type="number" value={year} onChange={e => setYear(e.target.value)} className="bg-gray-700 px-4 py-2 rounded text-white w-28" min="2020" max="2100" />
        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">Apply Filters</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center animate-fade-in">
          <div className="text-lg font-semibold mb-2">Revenue per Month</div>
          <div className="w-full h-40 bg-gray-700 rounded flex items-center justify-center">[Chart Placeholder]</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center animate-fade-in">
          <div className="text-lg font-semibold mb-2">Room Occupancy Rate</div>
          <div className="w-full h-40 bg-gray-700 rounded flex items-center justify-center">[Chart Placeholder]</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 shadow flex flex-col items-center animate-fade-in">
          <div className="text-lg font-semibold mb-2">Repeat Customer Count</div>
          <div className="w-full h-40 bg-gray-700 rounded flex items-center justify-center">[Chart Placeholder]</div>
        </div>
      </div>
      <button className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-bold transition hover:scale-105 duration-300">Download Report</button>
    </div>
  );
}

export default Analytics;