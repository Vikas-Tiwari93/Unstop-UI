import React from "react";
import dashboard from "../../../assets/images/dashboard.svg";
import assessment from "../../../assets/images/note_alt.svg";
import quiz from "../../../assets/images/quiz.svg";
import redult from "../../../assets/images/admin_meds.svg";
import cut from "../../../assets/images/cut.svg";
import "./sidebarmobile.css";
export default function SidebarMobile({
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
}) {
  return (
    <div
      className={` ${isMobileSidebarOpen ? "sidemob active" : "not-active"}`}
    >
      <div className="side1">
        <span>Menu</span>
        <img onClick={() => setIsMobileSidebarOpen(false)} src={cut} />
      </div>
      <div className="side2">
        <img src={dashboard} />
        <span>Dashboard</span>
      </div>
      <div className="side2 extra">
        <img src={assessment} />
        <span>Assessment</span>
      </div>
      <div className="side2">
        <img src={quiz} />
        <span>My Library</span>
      </div>
      <div className="underline1"></div>
      <div className="side21">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img style={{ paddingRight: "8px" }} src={redult} />
          <span>Round Status</span>
        </div>

        <div className="admin">
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}
