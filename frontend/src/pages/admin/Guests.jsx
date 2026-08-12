import React from 'react'
import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { FaRegTrashAlt } from "react-icons/fa";

const ROLE_STYLES = {
  Manager: { bg: "#EEEDFE", text: "#3C3489" },
  Cook: { bg: "#FAEEDA", text: "#633806" },
  Helper: { bg: "#E1F5EE", text: "#085041" },
  Cleaner: { bg: "#E6F1FB", text: "#0C447C" },
  Waiter: { bg: "#FAECE7", text: "#712B13" },
};

const INITIAL_STAFF = [
  { id: 1, name: "Ada Wilson", role: "Manager", img: "https://i.pravatar.cc/150?img=47" },
  { id: 2, name: "Mateo Nelson", role: "Cook", img: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "Thea Reyes", role: "Helper", img: "https://i.pravatar.cc/150?img=32" },
  { id: 4, name: "Augustus Ward", role: "Cleaner", img: "https://i.pravatar.cc/150?img=14" },
  { id: 5, name: "Pablo Bennet", role: "Waiter", img: "https://i.pravatar.cc/150?img=51" },
  { id: 6, name: "Jexon Webster", role: "Manager", img: "https://i.pravatar.cc/150?img=15" },
  { id: 7, name: "Gemma Phillips", role: "Cook", img: "https://i.pravatar.cc/150?img=44" },
  { id: 8, name: "Nyla Wood", role: "Helper", img: "https://i.pravatar.cc/150?img=25" },
  { id: 9, name: "Noresh Thomen", role: "Cleaner", img: "https://i.pravatar.cc/150?img=13" },
  { id: 10, name: "Talia Cooper", role: "Waiter", img: "https://i.pravatar.cc/150?img=48" },
  { id: 11, name: "Fatimo Moy", role: "Manager", img: "https://i.pravatar.cc/150?img=36" },
  { id: 12, name: "Lily Waters", role: "Cook", img: "https://i.pravatar.cc/150?img=45" },
];


function StaffCard({ staff, onDelete }) {
  const style = ROLE_STYLES[staff.role] || { bg: "#F1EFE8", text: "#444441" };
 
  return (
    <div className="break-inside-avoid mb-3.5 bg-white border border-gray-200 rounded-xl p-3.5">
      <div className="flex items-start justify-between">
        <img
          src={staff.img}
          alt={staff.name}
          className="w-13 h-13 rounded-full object-cover"
          style={{ width: 52, height: 52 }}
        />
        <button
          onClick={() => onDelete(staff.id)}
          aria-label={`Remove ${staff.name}`}
          className="w-7 h-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors flex-shrink-0"
        >
          <FaRegTrashAlt size={15} />
        </button>
      </div>
 
      <p className="text-[15px] font-medium text-gray-900 mt-2.5 mb-0.5">
        {staff.name}
      </p>
 
      <span
        className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full mt-0.5"
        style={{ backgroundColor: style.bg, color: style.text }}
      >
        {staff.role}
      </span>
    </div>
  );
}

function Guests() {
  const [staffList, setStaffList] = useState(INITIAL_STAFF);

const handleDelete = (id) => {
setStaffList((prev) => prev.filter((s) => s.id !== id));
};
  return (
    <MainLayout pageTitle="Guests">
    <div className="w-full min-h-screen">
 
        {staffList.length === 0 ? (
          <p className="text-sm text-gray-500">No staff members left. Add someone to get started.</p>
        ) : (
          <div style={{ columnCount: 3, columnGap: 14 }} className="staff-columns">
            {staffList.map((staff) => (
              <StaffCard key={staff.id} staff={staff} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
 
      <style>{`
        @media (max-width: 640px) {
          .staff-columns { column-count: 1 !important; }
        }
      `}</style>
    </MainLayout>
  )
}

export default Guests