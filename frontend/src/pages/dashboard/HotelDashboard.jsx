import React, { useEffect, useState } from "react";
import {
  FaHotel,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaMapMarkerAlt,
  FaStar,
  FaTimes,
  FaSwimmingPool,
  FaWifi,
  FaUtensils,
  FaParking,
  FaSpa,
  FaDumbbell,
  FaCocktail,
  FaConciergeBell,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaPowerOff
} from "react-icons/fa";
import Modal from 'react-modal';
import API from "../../api";
import { useNavigate } from "react-router-dom";
import api from "../../services/Reservationapi";
import { toast, ToastContainer } from "react-toastify";

function HotelDashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.6)",
      zIndex: 9998,
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      border: "none",
      borderRadius: 0,
      background: "transparent",
    },
  };

  const rooms = [
    {
      id: 1,
      name: "Deluxe King Room with Balcony",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
      guests: 3,
      size: "462 sq.ft",
      bed: "1 King Bed",
      bathroom: "1 Bathroom",
      view: "Garden View",
      floor: "Ground Floor",
      price: "4,999",
    },
    {
      id: 2,
      name: "Executive Sea View Room",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
      guests: 2,
      size: "510 sq.ft",
      bed: "King Bed",
      bathroom: "Luxury Bathroom",
      view: "Sea View",
      floor: "First Floor",
      price: "6,999",
    },
    {
      id: 3,
      name: "Premium Family Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      guests: 5,
      size: "720 sq.ft",
      bed: "2 Queen Beds",
      bathroom: "2 Bathrooms",
      view: "City View",
      floor: "Second Floor",
      price: "9,499",
    },
  ];
  const hotels = [
    {
      id: 1,
      name: "Superior Room",
      location: "Chennai",
      description: "Ranging from basic to high-end, these offer escalating levels of luxury, size, and view quality.",
      rating: 4.8,
      price: 4500,
      available: true,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    },
    {
      id: 2,
      name: "Deluxe Room",
      location: "Goa",
      description: "Ranging from basic to high-end, these offer escalating levels of luxury, size, and view quality.",
      rating: 4.6,
      price: 6200,
      available: true,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    },
    {
      id: 3,
      name: "Executive Room",
      location: "Ooty",
      description: "Premium, spacious options often with added luxury amenities, workspaces, or top-tier service.",
      rating: 4.4,
      price: 3800,
      available: false,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    },
    {
      id: 4,
      name: "Single Room",
      location: "Bangalore",
      description: "Designed based on occupancy, ranging from one single bed to two separate beds.",
      rating: 4.9,
      price: 7500,
      available: true,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    },
  ];

  const facilities = [
    {
      icon: <FaSwimmingPool size={40} />,
      title: "Swimming Pool",
      desc: "Relax and refresh in our luxurious outdoor swimming pool.",
    },
    {
      icon: <FaWifi size={40} />,
      title: "Free Wi-Fi",
      desc: "High-speed internet available throughout the property.",
    },
    {
      icon: <FaUtensils size={40} />,
      title: "Restaurant",
      desc: "Enjoy delicious local and international cuisines.",
    },
    {
      icon: <FaParking size={40} />,
      title: "Free Parking",
      desc: "Secure parking available for all hotel guests.",
    },
    {
      icon: <FaSpa size={40} />,
      title: "Spa & Wellness",
      desc: "Relax your body and mind with premium spa treatments.",
    },
    {
      icon: <FaDumbbell size={40} />,
      title: "Fitness Center",
      desc: "Modern gym equipped with latest fitness equipment.",
    },
    {
      icon: <FaCocktail size={40} />,
      title: "Bar & Lounge",
      desc: "Enjoy cocktails and premium beverages every evening.",
    },
    {
      icon: <FaConciergeBell size={40} />,
      title: "24/7 Room Service",
      desc: "Round-the-clock hospitality for your comfort.",
    },
  ];

  const filteredHotels = hotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchHome = async () => {
      try {
        const res = await API.get("/dashboard");
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

  const [guestName, setGuestName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [roomType, setRoomType] = useState('');
  const [bedType, setBetType] = useState('');
  const [noofrooms, setNoOfRooms] = useState('');
  const [breakfast, setBreakFast] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const [errors, setErrors] = useState({});

  const submitReservation = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    const newErrors = {};

  if (!guestName.trim()) {
    newErrors.guestName = "Guest name is required";
  }
  
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!country.trim()) {
    newErrors.country = "Country is required";
  }

  if (!phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(phone)) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  if (!roomType) {
    newErrors.roomType = "Please select a room type";
  }

  if (!bedType) {
    newErrors.bedType = "Please select a bed type";
  }

  if (!noofrooms) {
    newErrors.noofrooms = "Please select number of rooms";
  }

  if (!breakfast) {
    newErrors.breakfast = "Please select a meal option";
  }

  if (!checkIn) {
    newErrors.checkIn = "Check-in date is required";
  }

  if (!checkOut) {
    newErrors.checkOut = "Check-out date is required";
  }

  if (checkIn && checkOut && new Date(checkOut) <= new Date(checkIn)) {
    newErrors.checkOut = "Check-out must be after check-in";
  }

  setErrors(newErrors);

  // Don't call API if validation fails
  if (Object.keys(newErrors).length > 0) {
    return;
  }

    try {
      const reservationData = {
        guestName,
        email,
        country,
        phone,
        roomType,
        bedType,
        noofrooms,
        breakfast,
        checkIn,
        checkOut,
      };

      const response = await api.post(
        "api/reservations",
        reservationData
      );
      // alert(response.data.message);
      toast.success(response.data.message);
      setGuestName('');
      setEmail('');
      setPhone('');
      setCountry('');
      setRoomType('');
      setBetType('');
      setNoOfRooms('');
      setBreakFast('');
      setCheckIn('');
      setCheckOut('');
      setIsOpen(false);
      console.log("form values added successfully");
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.error(
      //   error.response?.data?.message || error.message
      // );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white">
              <FaHotel size={20} />
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-800">
                HotelHub
              </h1>
              <p className="text-xs text-slate-500">
                Hotel Management
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-600 hover:text-blue-600">
              <FaBell size={20} />
              <span className="absolute -top-2 -right-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </button>

            <FaUserCircle
              size={34}
              className="text-slate-700 cursor-pointer"
            />
            <button 
              className="bg-red-600 px-6 py-2 rounded-lg font-semibold"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      <section
        id="home"
        className="h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945')",
        }}
      >
        <div className="bg-black/50 w-full h-[500px] flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-bold mb-6">
              Experience Luxury &
              <br />
              Comfort
            </h1>

            <p className="text-xl mb-8 max-w-2xl">
              Book premium rooms, manage reservations,
              and enjoy world-class hospitality with our
              Smart Hotel Management System.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 px-8 py-3 rounded-lg font-semibold">
                Book Now
              </button>

              <button className="border border-white px-8 py-3 rounded-lg">
                Explore Rooms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search */}
      {/* <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="bg-white rounded-xl shadow-xl p-6 grid md:grid-cols-5 gap-4">
          <input
            type="date"
            className="border border-gray-400 text-gray-500 p-3 rounded-lg"
          />

          <input
            type="date"
            className="border border-gray-400 text-gray-500 p-3 rounded-lg"
          />

          <select className="border border-gray-400 text-gray-500 p-3 rounded-lg">
            <option>Guests</option>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>4 Guests</option>
          </select>

          <select className="border border-gray-400 text-gray-500 p-3 rounded-lg">
            <option>Room Type</option>
            <option>Deluxe</option>
            <option>Executive</option>
            <option>Suite</option>
          </select>

          <button className="bg-blue-900 text-white rounded-lg">
            Search Rooms
          </button>
        </div>
      </section> */}

      <main className="p-6 lg:p-10">
        {/* Hero Section */}
        {/* <section className="mb-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-lg">
            <h2 className="text-3xl font-bold">
              Welcome Back 👋
            </h2>

            <p className="mt-2 text-blue-100">
              Manage your hotels, bookings and guests from one place.
            </p>

            <div className="mt-6 flex max-w-lg items-center gap-3 rounded-xl bg-white px-4 py-3 shadow">
              <FaSearch className="text-slate-400" />

              <input
                type="text"
                placeholder="Search hotels or locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent outline-none text-slate-700"
              />
            </div>
          </div>
        </section> */}

        {/* Statistics */}
        {/* <section className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-slate-800">
              125
            </h3>
            <p className="mt-2 text-slate-500">
              Total Hotels
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-green-600">
              89
            </h3>
            <p className="mt-2 text-slate-500">
              Available Rooms
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-orange-500">
              43
            </h3>
            <p className="mt-2 text-slate-500">
              Bookings Today
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-3xl font-bold text-purple-600">
              ₹1.2L
            </h3>
            <p className="mt-2 text-slate-500">
              Revenue
            </p>
          </div>
        </section> */}

        {/* Hotels Section */}
        <section>
          <div className="mb-6 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-slate-800">
              Our Rooms
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-56 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-xl text-center font-bold text-slate-800 mb-2">
                    {hotel.name}
                  </h3>

                  {/* <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <FaMapMarkerAlt />
                    <span>{hotel.location}</span>
                  </div> */}
                  <p className="text-slate-600">{hotel.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      <FaStar />
                      <span className="font-medium text-slate-700">
                        {hotel.rating}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <span className="font-bold text-blue-600">
                        ₹{hotel.price}
                      </span>
                      <span className="text-sm text-slate-500">/ per head</span>
                    </span>
                  </div>

                  <div className="mt-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${hotel.available
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                    >
                      {hotel.available
                        ? "Available"
                        : "Fully Booked"}
                    </span>
                  </div>

                  <button
                    onClick={openModal}
                    className="mt-5 w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Hotel Banner */}
      </main>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-14">
            <p className="text-yellow-600 font-semibold uppercase tracking-widest">
              Our Facilities
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              Everything You Need For A Comfortable Stay
            </h2>

            <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
              Experience world-class hospitality with luxurious facilities
              designed to make your stay relaxing, enjoyable and unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {facilities.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 p-8 text-center group"
              >

                <div className="text-blue-600 mb-6 flex justify-center group-hover:scale-110 duration-300">
                  {item.icon}
                </div>

                <h3 className="font-bold text-black text-xl mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {/* About */}
            <div>
              <h2 className="text-3xl font-bold mb-5 text-blue-600">
                RoyalStay
              </h2>
              <p className="text-gray-400 leading-7">
                Experience luxury, comfort and unforgettable hospitality.
                Book your perfect stay with us and enjoy premium services
                designed for every traveler.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-yellow-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-yellow-600">
                  <FaInstagram />
                </a>
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-yellow-600">
                  <FaTwitter />
                </a>
                <a href="#" className="bg-blue-600 p-3 rounded-full hover:bg-yellow-600">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Rooms</a>
                </li>
                <li>
                  <a href="#">Facilities</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Our Services
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>Luxury Rooms</li>
                <li>Restaurant</li>
                <li>Spa & Wellness</li>
                <li>Conference Hall</li>
                <li>Airport Pickup</li>
              </ul>
            </div>

            {/* Contact */}

            <div>
              <h3 className="text-xl font-semibold mb-6">
                Contact
              </h3>
              <div className="space-y-5 text-gray-400">
                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-blue-600 mt-1" />
                  <span>
                    123 Beach Road,
                    Chennai,
                    Tamil Nadu
                  </span>
                </div>

                <div className="flex gap-3">
                  <FaPhoneAlt className="text-blue-600 mt-1" />
                  <span>+91 98765 43210</span>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="text-blue-600 mt-1" />
                  <span>info@royalstay.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 py-6 text-center text-gray-400">
          © {new Date().getFullYear()} RoyalStay Hotel.
          All Rights Reserved.
        </div>
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-full max-w-5xl rounded-2xl bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between rounded-t-2xl bg-blue-700 px-6 py-4">
            <h2 className="text-2xl font-bold text-white">
              Reservation
            </h2>

            <button
              onClick={closeModal}
              className="rounded-full bg-white p-2 text-gray-700 hover:bg-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={submitReservation}>
            <div className="grid md:grid-cols-2">
              {/* Guest Information */}

              <div className="space-y-3 border-r bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  Guest Information
                </h3>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={guestName}
                  onChange={(e)=>setGuestName(e.target.value)}
                  className="w-full bg-white text-gray-500 rounded-lg border p-3 outline-none focus:border-blue-500"
                />
                {errors.guestName && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.guestName}
                  </p>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full bg-white text-gray-500 rounded-lg border p-3 outline-none focus:border-blue-500"
                />
                {errors.email && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}

                <select className="w-full bg-white text-gray-500 rounded-lg border p-3"
                value={country}
                onChange={(e)=>setCountry(e.target.value)}>
                  <option value="" disabled>Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                {errors.country && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.country}
                  </p>
                )}

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full bg-white text-gray-500 rounded-lg border p-3"
                />
                {errors.phone && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Reservation */}

              <div className="space-y-4 bg-blue-50 p-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  Reservation Information
                </h3>
                <select className="w-full bg-white text-gray-500 rounded-lg border p-3"
                value={roomType}
                onChange={(e)=>setRoomType(e.target.value)}>
                  <option value="" disabled>Type of Room</option>
                  <option value="Superior Room">Superior Room</option>
                  <option value="Deluxe Room">Deluxe Room</option>
                  <option value="Executive Room">Executive Room</option>
                  <option value="vaSingle Roomlue">Single Room</option>
                </select>
                {errors.roomType && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.roomType}
                  </p>
                )}

                <select className="w-full bg-white text-gray-500 rounded-lg border p-3"
                value={bedType}
                onChange={(e)=>setBetType(e.target.value)}>
                  <option value="" disabled>Type of Bed</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Triple">Triple</option>
                  <option value="Quad">Quad</option>
                </select>
                {errors.bedType && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.bedType}
                  </p>
                )}

                <select className="w-full bg-white text-gray-500 rounded-lg border p-3"
                value={noofrooms}
                onChange={(e)=>setNoOfRooms(e.target.value)}>
                  <option value="" disabled>Select Room</option>
                  <option value="1">1 Room</option>
                  <option value="2">2 Rooms</option>
                  <option value="3">3 Rooms</option>
                </select>
                {errors.noofrooms && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.noofrooms}
                  </p>
                )}

                <select className="w-full bg-white text-gray-500 rounded-lg border p-3"
                value={breakfast}
                onChange={(e)=>setBreakFast(e.target.value)}>
                  <option value="" disabled>Select Meal Plan</option>
                  <option value="No Meal">No Meal</option>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Half Board">Half Board</option>
                  <option value="Full Board">Full Board</option>
                </select>
                {errors.breakfast && (
                  <p className="mt-1 mb-1 text-sm text-red-500">
                    {errors.breakfast}
                  </p>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 text-black block text-sm">
                      Check-In
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e)=>setCheckIn(e.target.value)}
                      className="w-full bg-white text-gray-500 rounded-lg border p-3"
                    />
                    {errors.checkIn && (
                      <p className="mt-1 mb-1 text-sm text-red-500">
                        {errors.checkIn}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1 text-black block text-sm">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e)=>setCheckOut(e.target.value)}
                      className="w-full bg-white text-gray-500 rounded-lg border p-3"
                    />
                    {errors.checkOut && (
                      <p className="mt-1 mb-1 text-sm text-red-500">
                        {errors.checkOut}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}

            <div className="flex items-center justify-end gap-4 border-t p-6">
              <button
                onClick={closeModal}
                className="rounded-lg border px-6 py-3 bg-gray-500 hover:bg-gray-600"
              >
                Cancel
              </button>

              <button className="rounded-lg bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-700">
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </Modal>
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
    </div>
  )
}

export default HotelDashboard