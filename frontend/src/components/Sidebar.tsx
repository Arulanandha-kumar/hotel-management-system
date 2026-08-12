import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHotel,
  FaBed,
  FaCalendarCheck,
  FaUsers,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaHome,
  FaPowerOff
} from "react-icons/fa";
import { useEffect, useState } from "react";
import API from "../api";

const menuItems = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/admin",
  },
  {
    name: "Room Booking",
    icon: <FaBed />,
    path: "/rooms",
  },
  {
    name: "Payments",
    icon: <FaMoneyBillWave />,
    path: "/payments",
  },
  {
    name: "Guests",
    icon: <FaUsers />,
    path: "/guests",
  },
];

const Sidebar = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await API.get("/admin");
        setMessage(res.data.message);
      } catch (err) {
        // alert("Unauthorized! Please login again");
        // localStorage.removeItem("token");
        // navigate("/login");
        handleLogout();
      }
    };

    fetchHome();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token"); // 🔥 remove token
    navigate("/login");               // 🔥 redirect
  };
  return (
    <aside className="w-[256px] min-w-[256px] bg-slate-950 text-white">
      <div className="p-4 border-b border-slate-700">
        <h2 className="text-2xl font-bold">
          Hotel Admin
        </h2>
      </div>

      <ul className="mt-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-4 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <button 
        className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 transition"
        onClick={handleLogout}
        >
        <FaPowerOff size={20} />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;