import React, { useState, useEffect } from 'react'
import MainLayout from "../../layouts/MainLayout";
import { FaCheck, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import api from "../../services/Reservationapi";
import { toast, ToastContainer } from "react-toastify";
import Swal from 'sweetalert2'

const Newrows = [
  {
    id: 1,
    name: "Aarav Mehta",
    status: "Pending",
    country: "India",
    phone: "+91 98765 43210",
    roomType: "Deluxe",
    bedType: "King",
    noOfRoom: 1,
    meal: "Breakfast",
    checkIn: "2026-07-02",
    checkOut: "2026-07-05",
    noOfDay: 3,
  },
  {
    id: 2,
    name: "Priya Nair",
    status: "Confirmed",
    country: "India",
    phone: "+91 91234 56780",
    roomType: "Suite",
    bedType: "Queen",
    noOfRoom: 1,
    meal: "Half Board",
    checkIn: "2026-07-04",
    checkOut: "2026-07-08",
    noOfDay: 4,
  },
  {
    id: 3,
    name: "Rohan Iyer",
    status: "Pending",
    country: "UAE",
    phone: "+971 50 123 4567",
    roomType: "Standard",
    bedType: "Twin",
    noOfRoom: 2,
    meal: "Room Only",
    checkIn: "2026-07-10",
    checkOut: "2026-07-12",
    noOfDay: 2,
  },
  {
    id: 4,
    name: "Sneha Reddy",
    status: "Confirmed",
    country: "Singapore",
    phone: "+65 9123 4567",
    roomType: "Deluxe",
    bedType: "King",
    noOfRoom: 1,
    meal: "Full Board",
    checkIn: "2026-07-15",
    checkOut: "2026-07-20",
    noOfDay: 5,
  },
  {
    id: 5,
    name: "Kabir Singh",
    status: "Rejected",
    country: "UK",
    phone: "+44 7700 900123",
    roomType: "Suite",
    bedType: "King",
    noOfRoom: 1,
    meal: "Breakfast",
    checkIn: "2026-07-18",
    checkOut: "2026-07-21",
    noOfDay: 3,
  },
];

const statusStyles = {
Confirmed: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
Rejected: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

function RoomBooking() {

const [rows, setRows] = useState(Newrows);
const [guestList, setGuestList] = useState([]);

const [currentPage, setCurrentPage] = useState(1);
const rowsPerPage = 5;

const indexOfLastRow = currentPage * rowsPerPage;
const indexOfFirstRow = indexOfLastRow - rowsPerPage;

const currentRows = guestList.slice(indexOfFirstRow, indexOfLastRow);

const totalPages = Math.ceil(guestList.length / rowsPerPage);
 
  const handleConfirm = (id) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Confirmed" } : r))
    );
  };
 
  const handleDelete = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };
 
  const handleEdit = (id) => {
    const row = rows.find((r) => r.id === id);
    const newName = window.prompt("Edit name", row?.name);
    if (newName && newName.trim()) {
      setRows((prev) =>
        prev.map((r) => (r.id === id ? { ...r, name: newName.trim() } : r))
      );
    }
  };

  const getNumberOfDays = (checkIn, checkOut) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const diffTime = end - start;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  
  const deleteUser = async (id) => {
    const deleteResult = await Swal.fire({
      title: "Delete Reservation?",
      text: "Do you want to Delete this reservation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#c42206",
    });

    if (!deleteResult.isConfirmed) return;
    try {
      await api.delete("api/reservations" + "/" + id);

      Swal.fire({
      icon: "success",
      title: "Deleted!",
      text: "Reservation has been deleted.",
      timer: 1500,
      showConfirmButton: false,
    });
    getUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete reservation.",
      });
    }
  }

  const updateStatus = async (id) => {

     const result = await Swal.fire({
      title: "Confirm Reservation?",
      text: "Do you want to confirm this reservation?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, Confirm",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#059669",
    });

    if (!result.isConfirmed) return;

    try {
    await api.put(`api/reservations/${id}`, {
      status: "Confirmed",
    });

    Swal.fire({
      icon: "success",
      title: "Confirmed!",
      text: "Reservation has been confirmed.",
      timer: 1500,
      showConfirmButton: false,
    });

    getUsers();
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Failed to update reservation status.",
    });
  }

    //  const isConfirmed = window.confirm(
    //   "Are you sure you want to confirm this reservation?"
    // );

    // if (!isConfirmed) return;
    // try {
    //   await api.put(`api/reservations/${id}`, {
    //     status: "Confirmed"
    //   });
    //   getUsers();
    // } catch (error) {
    //   console.error(error);
    // }
  }

  const getUsers = async () => {
  const res = await api.get("api/reservations");
  setGuestList(res.data.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <MainLayout pageTitle="Room Bookings">
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-950 text-xs font-medium uppercase tracking-wide text-slate-300">
                  <th scope="col" className="whitespace-nowrap px-4 py-3">S.No</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Name</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Email</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Country</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Phone</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Type of Room</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Type of Bed</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">No of Room</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Meal</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Check-in</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Check-out</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">No of Day</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3">Status</th>
                  <th scope="col" className="whitespace-nowrap px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {/* {guestList.map((guest) => {
                  return (
                    <tr key={guest._id}>
                      <td>{guest.guestName}</td>
                    </tr>
                  );
                })} */}
                {currentRows.map((guest, index)=>{
                return (
                  <tr key={guest._id} className="transition-colors hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-3 text-slate-500">{indexOfFirstRow + index + 1}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">{guest.guestName}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                      {guest.email}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{guest.country}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{guest.phone}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{guest.roomType}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{guest.bedType}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{guest.noofrooms}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{guest.breakfast}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{new Date(guest.checkIn).toLocaleDateString()}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{new Date(guest.checkOut).toLocaleDateString()}</td>       
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{getNumberOfDays(guest.checkIn, guest.checkOut)} Days</td>       
                    <td className="whitespace-nowrap px-4 py-3">
                      <span
                        className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[guest.status]}`}
                      >
                        {guest.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          title="Confirm"
                          disabled={guest.status === "Confirmed"}
                          onClick={() => updateStatus(guest._id)}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white transition-colors hover:bg-emerald-800 disabled:opacity-50"
                        >
                          <FaCheck size={12} strokeWidth={2.25} />
                        </button>
                        <button
                          title="Edit"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-white transition-colors hover:bg-blue-800"
                        >
                          <FaPencilAlt size={12} strokeWidth={2.25} />
                        </button>
                        <button
                          title="Delete"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-700 text-white transition-colors hover:bg-rose-800"
                          onClick={()=> deleteUser(guest._id)}
                        >
                          <FaRegTrashAlt size={12} strokeWidth={2.25} />
                        </button>
                      </div>
                    </td>
                  </tr> 
                  );         
                })}
                {/* {rows.map((row, idx) => (
                  <tr key={row.id} className="transition-colors hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-3 text-slate-500">{idx + 1}</td>
                    <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">{row.name}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">
                      {row.name.toLowerCase().replace(" ", ".")}@example.com
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.country}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.phone}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.roomType}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.bedType}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.noOfRoom}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.meal}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.checkIn}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.checkOut}</td>
                    <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.noOfDay}</td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <span
                        className={`inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[row.status]}`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          title="Confirm"
                          disabled={row.status === "Confirmed"}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white transition-colors hover:bg-emerald-800"
                        >
                          <FaCheck size={12} strokeWidth={2.25} />
                        </button>
                        <button
                          title="Edit"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 text-white transition-colors hover:bg-blue-800"
                        >
                          <FaPencilAlt size={12} strokeWidth={2.25} />
                        </button>
                        <button
                          title="Delete"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-rose-700 text-white transition-colors hover:bg-rose-800"
                        >
                          <FaRegTrashAlt size={12} strokeWidth={2.25} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))} */}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-end gap-2 p-4">
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#020618] rounded disabled:opacity-20"
            >
              Previous
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#020618] rounded disabled:opacity-20"
            >
              Next
            </button>
          </div>
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
    </MainLayout>
  )
}

export default RoomBooking