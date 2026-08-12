import React from 'react'
const { useState, useEffect } = React;
import API from "../api";
import { useNavigate } from "react-router-dom";

// --- SVG Icons Component ---
const Icon = ({ name }) => {
  const icons = {
    dashboard: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    ),
    users: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
    cart: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    ),
    settings: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.212 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      // <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
    menu: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
    ),
    bell: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    ),
    search: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    ),
    chevronDown: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    ),
    close: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    ),
    signout: (
      <>
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </>
    )
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[25px] h-[25px]">
      {icons[name] || icons.dashboard}
    </svg>
  );
};

// --- Sidebar Component ---
const Sidebar = ({ isOpen, onClose, activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'users', label: 'Users', icon: 'users' },
    { id: 'orders', label: 'Orders', icon: 'cart' },
    { id: 'settings', label: 'Settings', icon: 'settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 
          sidebar-transition transform lg:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-100">
          <div className="flex items-center gap-2 font-bold text-xl text-sky-600">
            <div className="bg-primary-600 text-sky-600 p-1 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            AdminKit
          </div>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-slate-600">
            <Icon name="close" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                if (window.innerWidth < 1024) onClose();
              }}
              className={`
                                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                                ${activePage === item.id
                  ? 'bg-primary-50 text-sky-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                            `}
            >
              <Icon name={item.icon} className={`${activePage === item.id ? 'text-sky-600' : 'text-slate-400'}`} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* User Profile (Bottom Sidebar) */}
        <div className="border-t border-slate-100 p-4">
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/seed/adminUser/40/40"
              alt="User"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Alex Morgan</p>
              <p className="text-xs text-slate-500 truncate">alex@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

// --- Topbar Component ---
const Topbar = ({ onMenuClick, onNotificationClick }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
        >
          <Icon name="menu" />
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="search" className="h-4 w-4 text-slate-400 group-focus-within:text-sky-500" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 bg-slate-50 border border-transparent focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-lg text-sm w-64 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <button
          onClick={onNotificationClick}
          className="p-2 text-slate-400 hover:text-sky-600 hover:bg-primary-50 rounded-full transition-colors relative"
        >
          <Icon name="bell" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>
        <div className="hidden sm:flex flex-col items-end mr-1">
          <span className="text-sm font-semibold text-slate-700">Alex Morgan</span>
          <span className="text-xs text-slate-500">Admin</span>
        </div>
        <img
          src="https://picsum.photos/seed/adminUser/40/40"
          alt="Profile"
          className="w-9 h-9 rounded-full cursor-pointer ring-2 ring-transparent hover:ring-primary-200 transition-all"
        />
        <div className='text-slate-400'>
            <Icon name="signout" />
        </div>
      </div>
    </header>
  );
};

// --- Stat Card Component ---
const StatCard = ({ title, value, change, changeType, icon, color }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon name={icon} className="w-6 h-6 text-white" />
        </div>
        <span className={`text-sm font-medium flex items-center gap-1 ${changeType === 'positive' ? 'text-emerald-600' : 'text-rose-600'}`}>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={changeType === 'positive' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
          </svg>
          {change}
        </span>
      </div>
      <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  );
};
// --- Content Area / Dashboard View ---
const DashboardContent = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value="$54,230"
          change="12.5%"
          changeType="positive"
          icon="cart"
          color="bg-primary-500"
        />
        <StatCard
          title="Total Users"
          value="2,450"
          change="8.1%"
          changeType="positive"
          icon="users"
          color="bg-indigo-500"
        />
        <StatCard
          title="Bounce Rate"
          value="42.3%"
          change="2.4%"
          changeType="negative"
          icon="dashboard"
          color="bg-rose-500"
        />
        <StatCard
          title="Active Sessions"
          value="845"
          change="5.2%"
          changeType="positive"
          icon="settings"
          color="bg-emerald-500"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">Recent Transactions</h2>
            <button className="text-sm text-sky-600 hover:text-sky-700 font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-6 py-3">Order ID</th>
                  <th className="px-6 py-3">Customer</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">#ORD-00{item}</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${item}/32/32`} alt="" />
                      </div>
                      <span className="text-slate-600">User {item}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">Oct 2{item}, 2023</td>
                    <td className="px-6 py-4 font-medium text-slate-700">${(100 * item + 12)}.50</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item % 2 === 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                        {item % 2 === 0 ? 'Completed' : 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Activity / Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <h2 className="font-semibold text-slate-800 mb-4">Weekly Activity</h2>
          <div className="flex items-end justify-between h-48 gap-2">
            {[35, 65, 45, 80, 55, 90, 70].map((height, index) => (
              <div key={index} className="w-full bg-slate-100 rounded-t-lg relative group">
                <div
                  style={{ height: `${height}%` }}
                  className="absolute bottom-0 w-full bg-primary-500 rounded-t-lg transition-all duration-500 group-hover:bg-primary-600"
                ></div>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {height} Sales
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100">
            <h3 className="text-sm font-medium text-slate-800 mb-3">Traffic Source</h3>
            <div className="space-y-3">
              {['Direct', 'Social', 'Referral'].map((source, idx) => (
                <div key={source} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-blue-500' : idx === 1 ? 'bg-indigo-500' : 'bg-cyan-500'}`}></span>
                    <span className="text-slate-600">{source}</span>
                  </div>
                  <span className="font-medium text-slate-800">{60 - (idx * 15)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Toast Notification Component ---
const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-bounce-in">
      <div className="bg-slate-800 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium text-sm">{message}</span>
      </div>
    </div>
  );
};

function UserPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('dashboard');
  const [toast, setToast] = useState({ show: false, message: '' });
  
  const navigate = useNavigate();

  const handleNotification = () => {
    setToast({ show: true, message: 'You have no new notifications.' });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-slate-50">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          activePage={activePage}
          setActivePage={setActivePage}
        />

        <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
          <Topbar
            onMenuClick={() => setSidebarOpen(true)}
            onNotificationClick={handleNotification}
          />

          <main className="flex-1 overflow-y-auto p-4 lg:p-8 scroll-smooth">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-800 capitalize">{activePage}</h1>
                <p className="text-slate-500 mt-1">Welcome back, here's what's happening today.</p>
              </div>

              {activePage === 'dashboard' ? (
                <DashboardContent />
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-dashed border-slate-300 text-slate-500">
                  <div className="bg-slate-50 p-4 rounded-full mb-3">
                    <Icon name="dashboard" className="w-8 h-8 text-slate-400" />
                  </div>
                  <p>Content for <strong>{activePage}</strong> coming soon.</p>
                </div>
              )}
            </div>
          </main>
        </div>

        <Toast
          isVisible={toast.show}
          message={toast.message}
          onClose={() => setToast({ ...toast, show: false })}
        />
      </div>
    </div>
  )
}

export default UserPage