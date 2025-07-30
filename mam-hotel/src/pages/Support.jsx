import React, { useState } from "react";

function Support() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Placeholder: Simulate sending message
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="bg-gray-800 rounded-lg shadow p-8 w-full max-w-md animate-fade-in">
        <h1 className="text-2xl font-bold mb-6">Support</h1>
        {submitted ? (
          <div className="text-green-400 font-semibold text-center">Thank you! Your message has been sent.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="bg-gray-700 px-4 py-2 rounded text-white" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required className="bg-gray-700 px-4 py-2 rounded text-white" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required rows={4} className="bg-gray-700 px-4 py-2 rounded text-white" />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Support;