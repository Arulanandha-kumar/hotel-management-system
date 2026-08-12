import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainLayout = ({ children, pageTitle }) => {
  return (
    <div className="flex text-white min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Topbar pageTitle={pageTitle} />

        <main className="p-6" style={{width: "calc(100vw - 265px)", display: "inline-block"}}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout