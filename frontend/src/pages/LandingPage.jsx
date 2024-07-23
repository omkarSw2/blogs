import Footer from "@/components/customeComponents/Footer";
import Navbar from "@/components/customeComponents/Navbar";
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
