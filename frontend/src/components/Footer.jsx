import React from "react";
import logo from "../asset/Zaykafoot.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left"><img src={logo} alt="ZAYKA MAHAL" style={{ height: "220px" }} /></div>
          <div className="left">
            <p><b>VISIT US : </b>Ashiyana Colony, Lucknow  </p>
            <p><b>OPENS :</b> 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner">
          <div className="left">
            <p>Developed By <b>Ayush Prakash</b></p>
          </div>
          <div className="right">
            <p>ZAYKA MAHAL ©2024, All Rights Reserved </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;