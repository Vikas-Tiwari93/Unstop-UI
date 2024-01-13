import React from "react";
import mobilepic from "../../../assets/images/mobile_screen_share.svg";
import laptop from "../../../assets/images/laptop_mac.svg";
import sidebtn from "../../../assets/images/segment.svg";
import "./navbar.css";
export default function Navbar({ setIsMobileSidebarOpen }) {
  return (
    <div className="main-div">
      <div className="div-left">
        <span style={{ display: "flex", gap: "5px" }}>
          <img
            src={sidebtn}
            alt=""
            className="sidebutton"
            onClick={() => setIsMobileSidebarOpen(true)}
          />
          <p className="Assessment-1">Assessment</p>
        </span>

        <img src={laptop} className="tiny2imagePhone"></img>
        <div className="border-right"></div>
        <div className="mobile-wrap">
          <div className="assess">
            <p className="Assessment-2">My Assessments</p>
          </div>
          <div className="assess-mobile">
            <p className="Assessment-3">Unstop Assignments</p>
          </div>
        </div>
      </div>
      <div>
        <img src={mobilepic} className="tiny2image " id="phone"></img>
      </div>
    </div>
  );
}
