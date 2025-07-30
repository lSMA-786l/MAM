import React, { useState } from "react";

function generateBookingId() {
  return "BK-" + Math.random().toString(36).substr(2, 8).toUpperCase();
}

function RegisterCustomer() {
  const [form, setForm] = useState({
    name: "",
    room: "",
    rent: "",
    stay: "",
    bookingId: generateBookingId(),
    face: null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCapture = () => {
    // Placeholder for webcam capture logic
    setForm({ ...form, face: "[face image data]" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder: Save to Firestore with face snapshot & booking ID
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">Register Customer</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 shadow-lg w-full max-w-md animate-fade-in">
        <input name="name" type="text" placeholder="Customer Name" className="mb-3 px-4 py-2 rounded bg-gray-700 text-white w-full" value={form.name} onChange={handleChange} required />
        <input name="room" type="number" placeholder="Room Number" className="mb-3 px-4 py-2 rounded bg-gray-700 text-white w-full" value={form.room} onChange={handleChange} required />
        <input name="rent" type="number" placeholder="Rent" className="mb-3 px-4 py-2 rounded bg-gray-700 text-white w-full" value={form.rent} onChange={handleChange} required />
        <input name="stay" type="number" placeholder="Stay Duration (days)" className="mb-3 px-4 py-2 rounded bg-gray-700 text-white w-full" value={form.stay} onChange={handleChange} required />
        <div className="mb-3 text-left">Booking ID: <span className="font-mono bg-gray-700 px-2 py-1 rounded">{form.bookingId}</span></div>
        <div className="mb-4">
          <div className="mb-2 font-semibold">Webcam Preview (face-api.js)</div>
          <div className="w-40 h-32 bg-gray-700 rounded flex items-center justify-center mb-2">[Webcam Placeholder]</div>
          <button type="button" onClick={handleCapture} className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white font-semibold">Capture Face</button>
        </div>
        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white font-bold transition hover:scale-105 duration-300">Submit Booking</button>
      </form>
      {submitted && (
        <div className="mt-6 bg-green-700 px-6 py-3 rounded text-white font-semibold animate-fade-in">Booking submitted! (Simulated)</div>
      )}
    </div>
  );
}

export default RegisterCustomer;