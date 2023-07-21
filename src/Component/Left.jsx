import React from "react";

import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineNoteAlt } from "react-icons/md";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { PiNotepadBold } from "react-icons/pi";

import "../styles/left.css";

const Left = () => {
  return (
    <div className="left">
      <div className="dashboard">
        <p>
          <LuLayoutDashboard />
        </p>
        <p>dashboard</p>
      </div>

      <div className="assessment">
        <p>
          <MdOutlineNoteAlt />
        </p>
        <p>Assessment</p>
      </div>

      <div className="my-library">
        <p>
          <HiOutlineDocumentDuplicate />
        </p>
        <p>My Library</p>
      </div>
      <button>Admin</button>
      <div className="round-status">
        <p>
          <PiNotepadBold />
        </p>
        <p>
          Round <br />
          Status
        </p>
      </div>
    </div>
  );
};

export default Left;
