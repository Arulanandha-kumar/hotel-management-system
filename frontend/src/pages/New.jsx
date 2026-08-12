import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {
  FaWifi,
  FaSwimmingPool,
  FaDumbbell,
  FaSpa,
  FaUtensils,
} from "react-icons/fa";

function New() {

  const navigate = useNavigate();
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">
            HotelMaster
          </h1>

          <ul className="hidden text-black md:flex gap-8 font-medium">
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button className="bg-blue-900 text-white px-5 py-2 rounded-lg"
          type='button'
          onClick={()=> (navigate("/login"))}
          >
            Login
          </button>
        </div>
      </nav>
      {/* Hero Section */}
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
              <button className="bg-yellow-500 px-8 py-3 rounded-lg font-semibold">
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
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
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
      </section>
      
      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-6">
          {[
            ["500+", "Luxury Rooms"],
            ["10K+", "Happy Guests"],
            ["50+", "Hotels"],
            ["24/7", "Support"],
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-8 text-center"
            >
              <h2 className="text-4xl font-bold text-blue-900">
                {item[0]}
              </h2>
              <p className="text-gray-600 mt-2">
                {item[1]}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Featured Rooms */}
      <section id="rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-black font-bold text-center mb-12">
            Featured Rooms
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Deluxe Room",
                price: "₹4,500",
                image:
                  "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
              },
              {
                title: "Executive Room",
                price: "₹6,500",
                image:
                  "https://images.unsplash.com/photo-1590490360182-c33d57733427",
              },
              {
                title: "Suite Room",
                price: "₹9,500",
                image:
                  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl text-black font-semibold">
                    {room.title}
                  </h3>

                  <p className="text-yellow-500 text-xl mt-2">
                    {room.price}/Night
                  </p>

                  <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded-lg">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 bg-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-black font-bold text-center mb-12">
            Hotel Services
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: <FaWifi />, title: "Free WiFi" },
              { icon: <FaUtensils />, title: "Restaurant" },
              { icon: <FaSwimmingPool />, title: "Pool" },
              { icon: <FaDumbbell />, title: "Gym" },
              { icon: <FaSpa />, title: "Spa" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow text-center"
              >
                <div className="text-4xl text-blue-900 mb-4 flex justify-center">
                  {service.icon}
                </div>

                <h3 className="text-black font-semibold">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="reviews"
        className="py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl text-black font-bold mb-12">
            What Our Guests Say
          </h2>

          <div className="bg-gray-100 p-10 rounded-xl">
            <p className="text-xl text-gray-500 italic">
              "Amazing experience! Clean rooms,
              excellent service, and easy booking."
            </p>

            <h4 className="mt-6 text-gray-500 font-bold">
              John Smith
            </h4>
          </div>
        </div>
      </section>

       {/* Newsletter */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Subscribe For Special Offers
          </h2>

          <p className="mb-8">
            Get updates about discounts and exclusive deals.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter Email"
              className="px-5 py-3 rounded-lg bg-white text-black w-full md:w-96"
            />

            <button className="bg-yellow-500 px-6 py-3 rounded-lg font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-black text-white py-10"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">
              HotelMaster
            </h3>
            <p>
              Smart Hotel Management System for modern hospitality.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>Rooms</li>
              <li>Services</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Contact
            </h4>
            <p>+91 9876543210</p>
            <p>info@hotelmaster.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Address
            </h4>
            <p>
              123 Luxury Street,
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default New