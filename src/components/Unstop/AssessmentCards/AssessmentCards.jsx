import "./assessmentcard.css";
import bag from "../../../assets/images/Frame 1000008703.svg";
import dot from "../../../assets/images/3 dot.svg";
import calender from "../../../assets/images/calendar_today.svg";
import link from "../../../assets/images/link.svg";
export default function AssessmentCards({ lp = 1, type }) {
  return (
    <div className="my-assess-items item2 formed-card">
      <div className="end-items">
        <img src={bag} className="left-icon"></img>
        <div className="mobile-card-head-mid">
          <div className="inside-item-mobile">
            <p className="item1-head-mobile">{type} Assessment</p>
            <div className="mobile-calender">
              <p className="job">Job</p>
              <img src={calender} className="calender"></img>
              <p className="date">20 Apr 2023</p>
            </div>
          </div>
        </div>

        <img src={dot} className="right-icon"></img>
      </div>
      <p className="item1-head">{type} Assessment</p>
      <div className="inside-item">
        <p className="job">Job</p>
        <img src={calender} className="calender"></img>
        <p className="date">20 Apr 2023</p>
      </div>
      <div className="main-second">
        <div className="bot-left">
          <div>
            <p className="bold">00</p>
            <p id="duration">Duration</p>
          </div>
          <div>
            <p className="bold">00</p>
            <p id="duration">Questions</p>
          </div>
        </div>
        <div className="bot-right">
          <div className="img-div">
            <img src={link}></img>
            <p>Share</p>
          </div>
          <span style={{ position: "relative", width: "40px" }}>
            {Array(lp)
              .fill("")
              .map((elm, index) => {
                return (
                  <button id={`lpbutton${index}`} key={index}>
                    LP
                  </button>
                );
              })}
          </span>
        </div>
      </div>
    </div>
  );
}
