import { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ProtectedRoute from "./components/customComponents/ProtectedRoute";

// Lazy load the components
const LandingPage = lazy(() => import("./pages/LandingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Blogs = lazy(() => import("./pages/Blogs"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ForgetPassword = lazy(() => import("./ForgetPassword"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

const isAuthenticated = () => {
  return localStorage.getItem("authToken") !== null;
};

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
        <Route
          path="/blogs"
          element={
            <ProtectedRoute
              element={Blogs}
              isAuthenticated={isAuthenticated()}
            />
          }
        />
        <Route path="/blog:slug" element={<HomePage />} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
