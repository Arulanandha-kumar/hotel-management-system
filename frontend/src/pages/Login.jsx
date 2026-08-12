import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/login", form);

      localStorage.setItem("token", res.data.token); // 🔥 store token
      localStorage.setItem("role", res.data.role) // store role
      
      toast.success(res.data.message);
      // navigate("/home");
      setTimeout(() => {
        if (res.data.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/dashboard");
        }
      }, 3000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed",
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
    }
  };

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
  );
  const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden relative">

      {/* --- Left Side: Login Form --- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12 md:px-16 lg:px-24 relative z-10 bg-white">

        <div className="max-w-md mx-auto w-full">
          {/* Header Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
            <p className="text-gray-500 text-sm">Welcome back! Please login to your account.</p>
          </div>

          {/* Form */}
          <form autoComplete="off" onSubmit={handleSubmit} className="space-y-5">
            {/* Username Input */}
            <div className="relative">
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
              />
              <label htmlFor="username" className="block text-gray-600 text-sm font-medium mb-2">Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <UserIcon />
                </span>
                <input
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 bg-gray-50 focus:bg-white"
                  required />
              </div>
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <LockIcon />
                </span>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  autoComplete="new-password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-700 bg-gray-50 focus:bg-white"
                  required />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Log In
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account? <Link to="/signup" href="#" className="font-bold text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* --- Right Side: Image Section --- */}
      <div className="hidden md:block md:w-1/2 relative bg-gray-200">
        {/* The provided image URL */}
        <img
          src="/img/login-bg.jpg"
          alt="login bg image"
          className="w-full h-screen object-center object-cover"
        />
        {/* Optional overlay to enhance text contrast if needed, though currently decorative */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

    </div>
  )
}

export default Login