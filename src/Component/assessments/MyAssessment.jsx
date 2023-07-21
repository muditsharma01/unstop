import React, { useState } from "react";

import { RxPlus, RxLink2 } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscBriefcase } from "react-icons/vsc";
import { LuCalendarDays } from "react-icons/lu";
import NewAssessment from "../NewAssessment";

import "../../styles/assessmentsStyle/myAssessment.css";

const MyAssessment = () => {
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <div className="my-assessment">
      <p className="head">My Assessment</p>
      <div className="assessments">
        <div onClick={toggleModal} className="new-assessment common-1">
          <div className="icon">
            <p>
              <RxPlus />
            </p>
            {openModal && <NewAssessment />}
          </div>
          <p>New Assessment</p>
          <p>
            From here you can add questions of multiple types like <br />
            MCQ's, subjective(text or paragraph)
          </p>
        </div>

        <div className="math-assessment common-1">
          <div className="icon">
            <div className="abouve">
              <p className="ic">
                <VscBriefcase />
              </p>
              <div className="bottom">
                <p className="head">Math Assessment</p>
                <div className="job">
                  <p>Job</p>
                  <p>
                    <span>
                      <LuCalendarDays />
                    </span>{" "}
                    20 Apr 2023
                  </p>
                </div>
              </div>
            </div>
            <p className="option">
              <BsThreeDotsVertical />
            </p>
          </div>

          
        </div>

        <div className="math-assessment common-1">
          <div className="icon">
            <div className="abouve">
              <p className="ic">
                <VscBriefcase />
              </p>
              <div className="bottom">
                <p className="head">Math Assessment</p>
                <div className="job">
                  <p>Job</p>
                  <p>
                    <span>
                      <LuCalendarDays />
                    </span>{" "}
                    20 Apr 2023
                  </p>
                </div>
              </div>
            </div>
            <p className="option">
              <BsThreeDotsVertical />
            </p>
          </div>
          <div className="duration">
            <div className="common">
              <p className="dur">
                00 <br />
                <span>Duration</span>
              </p>
              <p className="que">
                00 <br />
                <span>Questions</span>
              </p>
            </div>
            <div className="common">
              <button>
                <span>
                  <RxLink2 />
                </span>
                Send
              </button>
              <p className="lp lp-p">LP</p>
              <p className="lp lp-b">LP</p>
              <p className="lp lp-r">LP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssessment;
