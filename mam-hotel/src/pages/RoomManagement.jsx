import React, { useState } from "react";

const initialRooms = [
  { number: 101, status: "available", rent: 1500 },
  { number: 102, status: "occupied", rent: 2000 },
  { number: 103, status: "available", rent: 1800 },
  { number: 104, status: "occupied", rent: 2200 }
];

function RoomManagement() {
  const [rooms, setRooms] = useState(initialRooms);
  const [showAdd, setShowAdd] = useState(false);
  const [newRoom, setNewRoom] = useState({ number: "", rent: "", status: "available" });
  const [editIdx, setEditIdx] = useState(null);
  const [editRoom, setEditRoom] = useState({ number: "", rent: "", status: "available" });

  const handleAddRoom = () => {
    setRooms([...rooms, { ...newRoom, number: Number(newRoom.number), rent: Number(newRoom.rent) }]);
    setShowAdd(false);
    setNewRoom({ number: "", rent: "", status: "available" });
  };

  const handleEditRoom = (idx) => {
    setEditIdx(idx);
    setEditRoom(rooms[idx]);
  };

  const handleSaveEdit = () => {
    setRooms(rooms.map((r, i) => i === editIdx ? { ...editRoom, number: Number(editRoom.number), rent: Number(editRoom.rent) } : r));
    setEditIdx(null);
  };

  const handleToggleStatus = (idx) => {
    setRooms(rooms.map((r, i) => i === idx ? { ...r, status: r.status === "available" ? "occupied" : "available" } : r));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Room Management</h1>
      <button onClick={() => setShowAdd(true)} className="mb-6 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">Add Room</button>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map((room, idx) => (
          <div key={room.number} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center shadow hover:scale-105 transition duration-300">
            <div className="text-2xl font-bold mb-2">Room {room.number}</div>
            <div className="mb-2">
              Status: <span onClick={() => handleToggleStatus(idx)} className={room.status === "available" ? "text-green-400 cursor-pointer" : "text-red-400 cursor-pointer"}>{room.status === "available" ? "🟢 Available" : "🔴 Occupied"}</span>
            </div>
            <div className="mb-4">Rent: ₹{room.rent}</div>
            <button onClick={() => handleEditRoom(idx)} className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded text-white font-semibold">Update Room</button>
          </div>
        ))}
      </div>
      {showAdd && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md text-center animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Add New Room</h3>
            <input type="number" placeholder="Room Number" className="mb-2 px-4 py-2 rounded bg-gray-700 text-white w-full" value={newRoom.number} onChange={e => setNewRoom({ ...newRoom, number: e.target.value })} />
            <input type="number" placeholder="Rent" className="mb-2 px-4 py-2 rounded bg-gray-700 text-white w-full" value={newRoom.rent} onChange={e => setNewRoom({ ...newRoom, rent: e.target.value })} />
            <select className="mb-4 px-4 py-2 rounded bg-gray-700 text-white w-full" value={newRoom.status} onChange={e => setNewRoom({ ...newRoom, status: e.target.value })}>
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
            </select>
            <div className="flex gap-4 justify-center">
              <button onClick={handleAddRoom} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold">Add</button>
              <button onClick={() => setShowAdd(false)} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold">Cancel</button>
            </div>
          </div>
        </div>
      )}
      {editIdx !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md text-center animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Update Room</h3>
            <input type="number" placeholder="Room Number" className="mb-2 px-4 py-2 rounded bg-gray-700 text-white w-full" value={editRoom.number} onChange={e => setEditRoom({ ...editRoom, number: e.target.value })} />
            <input type="number" placeholder="Rent" className="mb-2 px-4 py-2 rounded bg-gray-700 text-white w-full" value={editRoom.rent} onChange={e => setEditRoom({ ...editRoom, rent: e.target.value })} />
            <select className="mb-4 px-4 py-2 rounded bg-gray-700 text-white w-full" value={editRoom.status} onChange={e => setEditRoom({ ...editRoom, status: e.target.value })}>
              <option value="available">Available</option>
              <option value="occupied">Occupied</option>
            </select>
            <div className="flex gap-4 justify-center">
              <button onClick={handleSaveEdit} className="bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded text-white font-semibold">Save</button>
              <button onClick={() => setEditIdx(null)} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-semibold">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomManagement;