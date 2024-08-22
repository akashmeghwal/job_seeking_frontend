import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Akash Meghwal.</div>
      <div>
        <Link to={"https://x.com/MeghwalAka92056"} target="_blank">
          <FaTwitter />
        </Link>

        <Link to={"https://www.linkedin.com/in/akashm1/"} target="_blank">
          <FaLinkedin />
        </Link>

        <Link to={"https://www.instagram.com/akdamdiya/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
