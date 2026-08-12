import { FaBell, FaUserCircle } from "react-icons/fa";

interface TopbarProps {
  pageTitle: string;
}

const Topbar = ({ pageTitle }: TopbarProps) => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl text-black font-bold">
        {pageTitle}
      </h1>

      <div className="flex items-center gap-6">
        <FaBell size={20} />

        <div className="flex items-center text-black gap-2">
          <FaUserCircle size={28} />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Topbar;