import "./form.css";

import cut from "../../../assets/images/cut.svg";
export default function Form({ setIsModalOpen, isModalOpen }) {
  return (
    <div className={isModalOpen ? "form-overlay" : "noform"}>
      <div className={isModalOpen ? "form-wrapper" : "noform-wrapper"}>
        <form className="form-content">
          {/* Your form elements go here */}
          <div className="form_top">
            <h2 className="Formhead-desktop">Create new assessment</h2>
            <h2 className="Formhead-mobile">Sub-Section Details</h2>
            <img
              src={cut}
              className="close"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <div className="form_div_input">
            <div className="form_div_input1">
              <p>Name of assessment</p>
              <input type="text" placeholder="Type Here" />
            </div>
            <div className="form_div_input1">
              <p>Purpose of the test is</p>
              <select>
                <option style={{ color: "#1C4980" }}>Select</option>
              </select>
            </div>
            <div className="form_div_input1">
              <p>Description</p>
              <select>
                <option style={{ color: "#1C4980" }}>Select</option>
              </select>
            </div>
            <div className="form_div_input1">
              <p>Skills</p>
              <div className="skills">
                <span>
                  UI/UX and Design <img src={cut} />
                </span>
                <span>
                  No of Question <img src={cut} />
                </span>
                <span>
                  Web Development <img src={cut} />
                </span>
                <span>
                  UI/UX and Design <img src={cut} />
                </span>
                <span>
                  Web Development <img src={cut} />
                </span>
              </div>
              <input
                className="skills_input"
                type="email"
                placeholder="Type here"
              />
            </div>
            <div className="form_div_input1">
              <p>Duration of assessment</p>
              <input className="hrs" type="email" placeholder="HH:MM:SS" />
            </div>
          </div>
        </form>
        <div className="but_div">
          <button className="sub_button" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
