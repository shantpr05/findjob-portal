import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20 border-t border-gray-200">
      {/* Logo */}
      <img width={160} src={assets.logo} alt="Job Portal Logo" />

      {/* Copyright */}
      <p className="flex-1 pl-4 text-sm text-gray-500 max-sm:hidden">
        © {new Date().getFullYear()} | All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="flex gap-2.5">
        <a href="#" aria-label="Facebook">
          <img width={38} src={assets.facebook_icon} alt="Facebook" />
        </a>
        <a href="#" aria-label="Twitter">
          <img width={38} src={assets.twitter_icon} alt="Twitter" />
        </a>
        <a href="#" aria-label="Instagram">
          <img width={38} src={assets.instagram_icon} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
