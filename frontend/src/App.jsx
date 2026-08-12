import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AdminPage from "./pages/admin/AdminPage";
import UserPage from "./pages/UserPage"
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import New from "./pages/New";
import Userui from "./pages/Userui";
import Dashboard from "./pages/dashboard/Dashboard";
import ResumeAnalyzer from "./pages/resume/ResumeAnalyzer";
import MockInterview from "./pages/interview/MockInterview";
import JobMatcher from "./pages/jobs/JobMatcher";
import HotelDashboard from "./pages/dashboard/HotelDashboard";
import RoomBooking from "./pages/admin/RoomBooking";
import Guests from "./pages/admin/Guests";
import Payments from "./pages/admin/Payments";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/" element={<New />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminPage />
                {/* <Dashboard /> */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute role="user">
                {/* <Dashboard /> */}
                {/* <Userui />
                <UserPage /> */}
                <HotelDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/rooms" element={<RoomBooking />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/payments" element={<Payments />} />
          {/* <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="/ai-interview" element={<MockInterview />} />
          <Route path="/job-matcher" element={<JobMatcher />} /> */}
        </Routes>
      </Router>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </>
  )
}

export default App
