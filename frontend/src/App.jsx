import React, { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  About,
  Contact_Us,
  Experience,
  Hero,
  Markee,
  Navbar,
  NotFound,
  Projects,
  Certificates,
} from "./features/constant";
import { Dashboard, EditProject, Login } from "./features/admin/constant";
import TechsLoading from "./components/main_loading/TechsLoading";

const Techs = lazy(() => import("./features/techs/Techs"));

const MainLayout = () => {
  return (
    <div className="text-white h-full selection:bg-[#70e7d6] selection:text-[#131313]">
      <Navbar />
      <div className="px-2 md:px-4 lg:px-12 flex flex-col gap-8">
        <Hero />
        <Markee />
        <Suspense fallback={<TechsLoading />}>
          <Techs />
        </Suspense>
        <Experience />
        <Projects />
        <Certificates />
        <Contact_Us />
      </div>
    </div>
  );
};

const AboutLayout = () => {
  return (
    <div className="text-white h-full selection:bg-[#70e7d6] selection:text-[#131313]">
      <Navbar />
      <div className="px-2 md:px-4 lg:px-12 flex flex-col gap-8">
        <About />
      </div>
    </div>
  );
};

const App = () => {
  const user = localStorage.getItem("admin");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route
          path="/admin/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/admin/login" />}
        />
        <Route path="/admin/project/edit" element={<EditProject />} />
        <Route
          path="/admin/login"
          element={user ? <Navigate to="/admin/dashboard" /> : <Login />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
