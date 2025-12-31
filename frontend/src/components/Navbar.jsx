import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);
  const navigate = useNavigate();

  const ADMIN_URL = "https://prescripto-admin-hv1n.onrender.com/";

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="logo"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-item flex flex-col items-center ${isActive ? "active" : ""}`
          }
        >
          <li className="py-1">HOME</li>
          <hr />
        </NavLink>

        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            `nav-item flex flex-col items-center ${isActive ? "active" : ""}`
          }
        >
          <li className="py-1">ALL DOCTORS</li>
          <hr />
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `nav-item flex flex-col items-center ${isActive ? "active" : ""}`
          }
        >
          <li className="py-1">ABOUT</li>
          <hr />
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-item flex flex-col items-center ${isActive ? "active" : ""}`
          }
        >
          <li className="py-1">CONTACT</li>
          <hr />
        </NavLink>

        {/* Admin Panel Button */}
        <a
          href={ADMIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 px-4 py-1.5 rounded-full hover:bg-gray-100 transition"
        >
          Admin Panel
        </a>
      </ul>

      <div className="flex items-center gap-4">
        {token && userData ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={userData.image} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create account
          </button>
        )}

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2">HOME</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2">ALL DOCTORS</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2">ABOUT</p>
            </NavLink>

            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2">CONTACT</p>
            </NavLink>

            {/* Admin Panel Button (Mobile) */}
            <a
              href={ADMIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-4 py-2 rounded-full mt-2"
            >
              Admin Panel
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
