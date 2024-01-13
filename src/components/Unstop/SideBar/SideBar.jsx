import "./sidebar.css";
import dashboard from "../../../assets/images/dashboard.svg";
import assessment from "../../../assets/images/note_alt.svg";
import quiz from "../../../assets/images/quiz.svg";
import redult from "../../../assets/images/admin_meds.svg";
export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar_comp">
        <img src={dashboard} />
        <span>Dashboard</span>
      </div>
      <div className="sidebar_comp extra">
        <img src={assessment} />
        <span>Assessment</span>
      </div>
      <div className="sidebar_comp">
        <img src={quiz} />
        <span>My Library</span>
      </div>

      <div className="sidebar_comp admin">
        <span>Admin</span>
      </div>

      <div className="sidebar_comp">
        <img style={{ alignItems: "center" }} src={redult} />
        <span>Round</span>
        <span>Status</span>
      </div>
    </div>
  );
}
