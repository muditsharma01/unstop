import React from "react";
import Head from "./assessments/Head";
import AssessmentOverview from "./assessments/AssessmentOverview";
import MyAssessment from "./assessments/MyAssessment";

import "../styles/right.css";

const Right = () => {
  return (
    <div className="right">
      <Head />
      <AssessmentOverview />
      <MyAssessment />
    </div>
  );
};

export default Right;
