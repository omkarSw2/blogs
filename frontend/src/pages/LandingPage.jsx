import Footer from "@/components/customComponents/Footer";
import Navbar from "@/components/customComponents/Navbar";
import { Outlet } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default LandingPage;
