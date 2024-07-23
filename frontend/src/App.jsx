import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import PricingPage from "./pages/PricingPage";
import ForgetPassword from "./ForgetPassword";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingPage />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/plans" element={<PricingPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog:slug" element={<HomePage />} />
      </Route>
    </>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
