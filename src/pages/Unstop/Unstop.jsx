import { useState } from "react";

import "./unstop.css";
import SideBar from "../../components/Unstop/SideBar/SideBar";

import Form from "../../components/Unstop/Form/Form";
import Navbar from "../../components/Unstop/Navbar/Navbar";
import AssessmentOverview from "../../components/Unstop/AssessmentOverview/AssessmentOverview";
import NewAssessmentCard from "../../components/Unstop/NewAssessmentCard/NewAssessmentCard";
import AssessmentCards from "../../components/Unstop/AssessmentCards/AssessmentCards";
import search from "../../assets/images/search.svg";
import filter from "../../assets/images/filter_list_alt.svg";
import bar from "../../assets/images/bar_chart.svg";
import SidebarMobile from "../../components/Unstop/SidebarMobile/SidebarMobile";
export default function Unstop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssesssmentClosed, setIsAssessmentclosed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const handleOpenAssessment = () => {
    setIsAssessmentclosed(!isAssesssmentClosed);
  };
  return (
    <div>
      <div className="page_layout">
        <SideBar />
        <SidebarMobile
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        />
        <div className="sidebar2">
          <div className="sidebar21">
            <Navbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
            <div className="asses_overview_main">
              <AssessmentOverview isAssesssmentClosed={isAssesssmentClosed} />
              <p className="ass_over_next">
                My Assessment
                <div className="my-asessment-image">
                  <img src={search} alt="" />
                  <img src={filter} alt="" />
                  <img src={bar} onClick={handleOpenAssessment} />
                </div>
              </p>
              <div className="my-assessment">
                <NewAssessmentCard setIsModalOpen={setIsModalOpen} />
                <AssessmentCards type="Math" />
                <AssessmentCards type="Math" lp={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
    </div>
  );
}
