import React, { useState } from "react";

const initialBookings = [
  { id: "B001", name: "Amit Kumar", room: 101, days: 3, rent: 4500, paid: true },
  { id: "B002", name: "Priya Singh", room: 102, days: 2, rent: 3000, paid: false },
  { id: "B003", name: "Rahul Das", room: 103, days: 1, rent: 1500, paid: true },
  { id: "B004", name: "Sunita Roy", room: 104, days: 4, rent: 6000, paid: true }
];

function Bookings() {
  const [bookings, setBookings] = useState(initialBookings);
  const [search, setSearch] = useState("");
  const [editing, setEditing] = useState(null);
  const [editRent, setEditRent] = useState(0);

  const filtered = bookings.filter(b =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.room.toString().includes(search) ||
    b.id.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (id, rent) => {
    setEditing(id);
    setEditRent(rent);
  };

  const handleSave = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, rent: editRent } : b));
    setEditing(null);
  };

  const handleTogglePaid = (id) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, paid: !b.paid } : b));
  };

  const handleDelete = (id) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Bookings</h1>
      <div className="mb-6 flex gap-4">
        <input
          type="text"
          placeholder="Search by name, room, or booking ID"
          className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none w-80"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="bg-gray-800 rounded-lg p-6 shadow">
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400">
              <th className="py-2">Booking ID</th>
              <th>Name</th>
              <th>Room</th>
              <th>Days</th>
              <th>Rent</th>
              <th>Paid</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(b => (
              <tr key={b.id} className="border-t border-gray-700">
                <td className="py-2">{b.id}</td>
                <td>{b.name}</td>
                <td>{b.room}</td>
                <td>{b.days}</td>
                <td>
                  {editing === b.id ? (
                    <input
                      type="number"
                      value={editRent}
                      onChange={e => setEditRent(Number(e.target.value))}
                      className="w-20 px-2 py-1 rounded bg-gray-700 text-white"
                    />
                  ) : (
                    <>₹{b.rent}</>
                  )}
                </td>
                <td>
                  <button onClick={() => handleTogglePaid(b.id)} className={b.paid ? "text-green-400" : "text-red-400"}>
                    {b.paid ? "✅" : "❌"}
                  </button>
                </td>
                <td className="flex gap-2">
                  {editing === b.id ? (
                    <button onClick={() => handleSave(b.id)} className="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-white font-semibold">Save</button>
                  ) : (
                    <button onClick={() => handleEdit(b.id, b.rent)} className="bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded text-white font-semibold">Edit</button>
                  )}
                  <button onClick={() => handleDelete(b.id)} className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-white font-semibold">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookings;