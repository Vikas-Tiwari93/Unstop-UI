import "./assessoverview.css";
import view_1 from "../../../assets/images/view_agenda.svg";
import view_2 from "../../../assets/images/Frame 1000009353.svg";
import view_3 from "../../../assets/images/Frame 1000005832.svg";
import view_4 from "../../../assets/images/Frame 1000009100.svg";

export default function AssessmentOverview({ isAssesssmentClosed }) {
  return (
    <div
      className={
        isAssesssmentClosed ? "asses_overview_closed" : "asses_overview"
      }
    >
      <p className="ass_over">Assessment Overview</p>
      <div className="assessment_overview">
        <div className="assessment_overview_inner">
          <div className="over1">
            <p>Total Assessments</p>
            <div className="tiny1">
              <img src={view_1} />
              <span>34</span>
            </div>
          </div>
          <div className="over4 mobile">
            <p>Total Purpose</p>
            <div className="tiny4">
              <img src={view_4} className="tiny2image" />
              <p>11</p>
            </div>
          </div>

          <div className="over2">
            <p className="over2p">Candidates</p>
            <div className="tiny2">
              <img src={view_2} className="tiny2image" />
              <div className="tiny21">
                <div className="tiny321">
                  <p className="p1">11,145</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Total Candidates</p>
              </div>
              <div
                style={{ border: "1px solid #DADCE0", height: "40px" }}
              ></div>
              <div className="tiny21">
                <div className="tiny321">
                  <p className="p1">1,14</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Who Attempted</p>
              </div>
            </div>
          </div>

          <div className=" over3">
            <p className="over2p">Candidate Source</p>
            <div className="tiny2">
              <img src={view_3} className="tiny2image" />
              <div className="tiny21 border_tiny">
                <div className="tiny321">
                  <p className="p1">11,100</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Email</p>
              </div>
              <div
                style={{ border: "1px solid #DADCE0", height: "40px" }}
              ></div>
              <div className="tiny21 border_tiny">
                <div className="tiny321">
                  <p className="p1">145</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Social Share</p>
              </div>
              <div
                style={{ border: "1px solid #DADCE0", height: "40px" }}
              ></div>
              <div className="tiny21">
                <div className="tiny321">
                  <p className="p1">145</p>
                  <p className="p2">+89</p>
                </div>
                <p className="p3">Unique Link</p>
              </div>
            </div>
          </div>
        </div>
        <div className="over4 no-display">
          <p>Total Purpose</p>
          <div className="tiny4">
            <img src={view_4} className="tiny2image" />
            <p>11</p>
          </div>
        </div>
      </div>
    </div>
  );
}
