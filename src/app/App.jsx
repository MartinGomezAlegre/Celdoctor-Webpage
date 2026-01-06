import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-white">
      <Header />

      {/* ACA se renderizan las páginas de /pages */}
      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
