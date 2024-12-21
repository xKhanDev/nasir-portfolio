import React from "react";
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
  Techs,
} from "./features/constant";
import { Dashboard, EditProject, Login } from "./features/admin/constant";
import useAuthStore from "./zustand/useAuth";

const MainLayout = () => {
  return (
    <div className="text-white h-full selection:bg-[#70e7d6] selection:text-[#131313]">
      <Navbar />
      <div className="px-2 md:px-4 lg:px-12 flex flex-col gap-8">
        <Hero />
        <Markee />
        <Techs />
        <Experience />
        <Projects />
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
  const user = useAuthStore((state) => state.user);
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
        <Route path="/admin/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
};

export default App;
