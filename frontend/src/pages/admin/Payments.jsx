
import React, {useState} from 'react'
import MainLayout from "../../layouts/MainLayout";
import { FaCheck, FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
const Newrows = [
  {
    id: 1,
    name: "Aarav Mehta",
    roomType: "Deluxe",
    bedType: "King",
    checkIn: "2026-07-02",
    checkOut: "2026-07-05",
    noOfDay: 3,
    noOfRoom: 1,
    meal: "Breakfast",
    roomRent: 1000,
    bedRent: 0,
    meals: 0,
    totalRent: 1000,
    status: "Pending",
  },
  {
    id: 2,
    name: "Priya Nair",
    roomType: "Suite",
    bedType: "Queen",
    checkIn: "2026-07-04",
    checkOut: "2026-07-08",
    noOfDay: 4,
    noOfRoom: 1,
    meal: "Half Board",
    roomRent: 1000,
    bedRent: 0,
    meals: 0,
    totalRent: 1000,
    status: "Paid",
  },
  {
    id: 3,
    name: "Rohan Iyer",
    roomType: "Standard",
    bedType: "Twin",
    checkIn: "2026-07-10",
    checkOut: "2026-07-12",
    noOfDay: 2,
    noOfRoom: 2,
    meal: "Room Only",
    roomRent: 1000,
    bedRent: 0,
    meals: 0,
    totalRent: 1000,
    status: "Pending",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    roomType: "Deluxe",
    bedType: "King",
    checkIn: "2026-07-15",
    checkOut: "2026-07-20",
    noOfDay: 5,
    noOfRoom: 1,
    meal: "Full Board",
    roomRent: 1000,
    bedRent: 0,
    meals: 0,
    totalRent: 1000,
    status: "Paid",
  },
  {
    id: 5,
    name: "Kabir Singh",
    roomType: "Suite",
    bedType: "King",
    checkIn: "2026-07-18",
    checkOut: "2026-07-21",
    noOfDay: 3,
    noOfRoom: 1,
    meal: "Breakfast",
    roomRent: 1000,
    bedRent: 0,
    meals: 0,
    totalRent: 1000,
    status: "Rejected",
  },
];

const statusStyles = {
Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
Pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
Rejected: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

function Payments() {
  const [rows, setRows] = useState(Newrows);
   
  const handleConfirm = (id) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Paid" } : r))
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
  return (
    <MainLayout pageTitle="Payments">
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-950 text-xs font-medium uppercase tracking-wide text-slate-300">
                <th scope="col" className="whitespace-nowrap px-4 py-3">S.No</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Name</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Room Type</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Bed Type</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Check-in</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Check-out</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">No of Day</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">No of Room</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Meal Type</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Room Rent</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Bed Rent</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Meals</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Total Bill</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3">Status</th>
                <th scope="col" className="whitespace-nowrap px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300">
              {rows.map((row, idx) => (
                <tr key={row.id} className="transition-colors hover:bg-slate-50">
                  <td className="whitespace-nowrap px-4 py-3 text-slate-500">{idx + 1}</td>
                  <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-800">{row.name}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.roomType}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.bedType}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.checkIn}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.checkOut}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.noOfDay}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.noOfRoom}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.meal}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.roomRent}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.bedRent}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.meals}</td>
                  <td className="whitespace-nowrap px-4 py-3 text-slate-600">{row.totalRent}</td>
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
                        title="Paid"
                        disabled={row.status === "Paid"}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-700 text-white transition-colors hover:bg-emerald-800"
                      >
                        <FaCheck size={12} strokeWidth={2.25} />
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  )
}

export default Payments