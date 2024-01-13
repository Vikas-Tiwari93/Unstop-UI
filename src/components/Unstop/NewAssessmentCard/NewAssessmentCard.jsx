import "./newassessment.css";
import plus from "../../../assets/images/add.svg";
export default function NewAssessmentCard({ setIsModalOpen }) {
  return (
    <div
      className="my-assess-items item1 add-modile"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="img-con">
        <img src={plus}></img>
      </div>
      <p className="item1-head">New Assessment</p>
      <p className="item1-text">
        From here you can add questions of multiple types like MCQs,
        subjective(text or paragraph)!
      </p>
    </div>
  );
}
