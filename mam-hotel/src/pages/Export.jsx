import React, { useState } from "react";

function Export() {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState([]);

  const handlePreview = () => {
    // Placeholder: Simulate preview data
    setPreview([
      { id: "BK-1234", name: "John Doe", room: 101, status: "Paid", date: "2024-06-01" },
      { id: "BK-5678", name: "Jane Smith", room: 102, status: "Unpaid", date: "2024-06-02" }
    ]);
  };

  const handleDownload = () => {
    // Placeholder: Simulate Excel download
    alert("Excel file downloaded! (Simulated)");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Export Data</h1>
      <div className="flex flex-wrap gap-4 mb-6">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} className="bg-gray-700 px-4 py-2 rounded text-white" />
        <select value={status} onChange={e => setStatus(e.target.value)} className="bg-gray-700 px-4 py-2 rounded text-white">
          <option value="">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>
        <button onClick={handlePreview} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">Preview</button>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow mb-8">
        <div className="text-lg font-semibold mb-4">Preview Table</div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Booking ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Room</th>
              <th className="py-2">Status</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {preview.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-4">No data to preview</td></tr>
            ) : (
              preview.map(row => (
                <tr key={row.id} className="hover:bg-gray-700 transition">
                  <td className="py-2">{row.id}</td>
                  <td className="py-2">{row.name}</td>
                  <td className="py-2">{row.room}</td>
                  <td className="py-2">{row.status}</td>
                  <td className="py-2">{row.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <button onClick={handleDownload} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-bold transition hover:scale-105 duration-300">Download Excel</button>
    </div>
  );
}

export default Export;