import React, { useState } from "react";
import "../styles/newAssessment.css";

const NewAssessment = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  if (openModal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="modal">
        <div className="overlay" onClick={toggleModal}></div>
        <div className="modal-content" onClick={handleModalClick}>
          <div className="heading-container">
            <h2 className="heading">Create new Assignment</h2>
          </div>
          <div className="name">
            <label htmlFor="name">Name of assessment</label>
            <input type="text" className="nameInput" placeholder="Type here" />
          </div>
          <div className="purpose">
            <label htmlFor="purpose">Purpose of the assessment</label>
            <select name="purpose" id="purpose">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="Descripton">
            <label htmlFor="description">Description</label>
            <select name="description" id="description">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="skills">
            <label htmlFor="skills">Skills</label>
            <textarea name="skills" id="skills" cols="30" rows="10"></textarea>
            <input type="text" className="skills" placeholder="Type here" />
          </div>
          
          <div className="save-btn">
            <button>Save</button>
          </div>
          <button className="close-modal" onClick={toggleModal}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default NewAssessment;
