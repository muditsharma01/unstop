import React from "react";

import { CiGrid2H } from "react-icons/ci";
import { MdOutlinePeopleAlt, MdLink } from "react-icons/md";
import { TbWorldUp } from "react-icons/tb";

import "../../styles/assessmentsStyle/assessmentOverview.css";

const AssessmentOverview = () => {
  return (
    <div className="assessment-overview">
      <p className="head">Assessments Overview</p>

      <div className="assessments">
        <div className="total-assessment">
          <p>Total Assessment</p>
          <p>
            <CiGrid2H /> 34
          </p>
        </div>

        <div className="candidate-details">
          <p className="title">Candidates</p>
          <div className="candidates">
            <p>
              <MdOutlinePeopleAlt />
            </p>
            <div className="total-candidate">
              <p>
                11,145 <span>+89</span>
              </p>
              <p>Total Candidate</p>
            </div>
            <div className="who-attemped">
              <p>
                1,14 <span>+89</span>
              </p>
              <p>Who Attemped</p>
            </div>
          </div>
        </div>

        <div className="candidates-source candidate-details">
          <p className="title">Candidates Source</p>
          <div className="links candidates">
            <p>
              <TbWorldUp />
            </p>
            <div className="email total-candidate">
              <p>
                11,000 <span>+89</span>
              </p>
              <p>E-mail</p>
            </div>
            <div className="social-share who-attemped">
              <p>
                145 <span>+89</span>
              </p>
              <p>Social Share</p>
            </div>
            <div className="unique-link who-attemped">
              <p>
                145 <span>+89</span>
              </p>
              <p>Unique Link</p>
            </div>
          </div>
        </div>

        <div className="total-purpose total-assessment">
          <p>Total Purpose</p>
          <p>
            <span>
              <MdLink />
            </span>{" "}
            11
          </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentOverview;
