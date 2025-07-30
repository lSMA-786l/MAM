import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Bookings from './pages/Bookings.jsx';
import RoomManagement from './pages/RoomManagement.jsx';
import RegisterCustomer from './pages/RegisterCustomer.jsx';
import Analytics from './pages/Analytics.jsx';
import Export from './pages/Export.jsx';
import Support from './pages/Support.jsx';
import CustomerLookup from './pages/CustomerLookup.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex gap-4">
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="/login">Login</Link>
        <Link className="text-white" to="/admin">Admin Dashboard</Link>
        <Link className="text-white" to="/bookings">Bookings</Link>
        <Link className="text-white" to="/rooms">Room Management</Link>
        <Link className="text-white" to="/register">Register Customer</Link>
        <Link className="text-white" to="/analytics">Analytics</Link>
        <Link className="text-white" to="/export">Export</Link>
        <Link className="text-white" to="/support">Support</Link>
        <Link className="text-white" to="/lookup">Customer Lookup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/rooms" element={<RoomManagement />} />
        <Route path="/register" element={<RegisterCustomer />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/export" element={<Export />} />
        <Route path="/support" element={<Support />} />
        <Route path="/lookup" element={<CustomerLookup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;