import React from "react";

const galleryImages = [
  "/assets/room1.jpg",
  "/assets/room2.jpg",
  "/assets/lobby.jpg"
];

function Home() {
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
      <img src="/assets/logo.png" alt="Hotel Logo" className="absolute top-6 right-8 w-20 h-20 object-contain z-10" />
      <h1 className="text-4xl font-bold mb-4 mt-12">Welcome to MAM Hotel</h1>
      <p className="mb-6 max-w-xl text-center text-lg">
        Experience comfort and luxury at MAM Hotel. Our modern rooms, attentive staff, and premium amenities ensure a memorable stay for every guest.
      </p>
      <div className="w-full max-w-xl h-64 mb-8 relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={galleryImages[current]}
          alt="Hotel Gallery"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {galleryImages.map((_, idx) => (
            <span key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-white' : 'bg-gray-500'}`}></span>
          ))}
        </div>
      </div>
      <div className="flex gap-6 mt-4">
        <a href="/admin/register" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">Register</a>
        <a href="/customer" className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white font-semibold transition hover:scale-105 duration-300">Check My Booking</a>
      </div>
    </div>
  );
}

export default Home;