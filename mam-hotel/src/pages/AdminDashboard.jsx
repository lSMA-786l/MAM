import React from "react";

const statCards = [
  { label: "Total Rooms", value: 120 },
  { label: "Rooms Occupied", value: 85 },
  { label: "Total Revenue", value: "₹5,20,000" },
  { label: "Unpaid Bookings", value: 7 },
  { label: "Admin Login Count", value: 42 }
];

const latestBookings = [
  { id: "B001", name: "Amit Kumar", room: 101, days: 3, rent: 4500, paid: true },
  { id: "B002", name: "Priya Singh", room: 102, days: 2, rent: 3000, paid: false },
  { id: "B003", name: "Rahul Das", room: 103, days: 1, rent: 1500, paid: true },
  { id: "B004", name: "Sunita Roy", room: 104, days: 4, rent: 6000, paid: true }
];

function AdminDashboard() {
  const [showModal, setShowModal] = React.useState(false);
  const handleCleanFaceID = () => setShowModal(true);
  const handleConfirmClean = () => {
    setShowModal(false);
    // TODO: Delete face data older than 6 months from Firestore/Storage
    alert("Old face data deleted!");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10">
        {statCards.map(card => (
          <div key={card.label} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow hover:scale-105 transition duration-300">
            <div className="text-2xl font-bold mb-2">{card.value}</div>
            <div className="text-gray-300">{card.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mb-8">
        <a href="/admin/register" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">➕ Register Customer</a>
        <a href="/admin/analytics" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">📈 Analytics</a>
        <a href="/admin/export" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">📁 Export</a>
        <button onClick={handleCleanFaceID} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">🧹 Clean Old Face ID</button>
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow mb-8">
        <h2 className="text-xl font-bold mb-4">Latest Bookings</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Booking ID</th>
              <th>Name</th>
              <th>Room</th>
              <th>Days</th>
              <th>Rent</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {latestBookings.map(b => (
              <tr key={b.id} className="border-t border-gray-700">
                <td className="py-2">{b.id}</td>
                <td>{b.name}</td>
                <td>{b.room}</td>
                <td>{b.days}</td>
                <td>₹{b.rent}</td>
                <td>{b.paid ? <span className="text-green-400">✅</span> : <span className="text-red-400">❌</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md text-center animate-fade-in">
            <div className="mb-4 text-yellow-400 text-4xl">⚠️</div>
            <h3 className="text-xl font-bold mb-2">Delete Old Face Data?</h3>
            <p className="mb-6">Are you sure you want to delete face data older than 6 months?</p>
            <div className="flex gap-4 justify-center">
              <button onClick={handleConfirmClean} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-semibold">Confirm</button>
              <button onClick={() => setShowModal(false)} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;