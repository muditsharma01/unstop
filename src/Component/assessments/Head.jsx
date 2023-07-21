import React from "react";
import { BiMobile } from "react-icons/bi";

import "../../styles/assessmentsStyle/head.css";

const Head = () => {
  return (
    <div className="head">
      <div className="assessments">
        <p>Assessment</p>
        <p>My Assessments</p>
      </div>
      <div className="icon">
        <p>
          <BiMobile />
        </p>
      </div>
    </div>
  );
};

export default Head;
