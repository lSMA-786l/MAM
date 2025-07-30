import React, { useState } from "react";

const hotels = [
  { label: "MAM-DELHI", value: "delhi" },
  { label: "MAM-KOLKATA", value: "kolkata" }
];

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hotel, setHotel] = useState(hotels[0].value);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with real authentication logic
    if (email === "admin@example.com" && password === "admin" && hotel) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Invalid credentials or hotel selection.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-white text-center">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">Hotel</label>
          <select
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            value={hotel}
            onChange={e => setHotel(e.target.value)}
            required
          >
            {hotels.map(h => (
              <option key={h.value} value={h.value}>{h.label}</option>
            ))}
          </select>
        </div>
        {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;