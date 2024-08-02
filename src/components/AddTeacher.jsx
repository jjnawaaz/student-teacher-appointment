import React, { useState } from "react";
import { db } from "../firebase.js";
import { addDoc, collection } from "firebase/firestore";
import { convertLowercase } from "../utils/lowerCase.js";

const AddTeacher = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!department) newErrors.department = "Department is required";
    if (!subject) newErrors.subject = "Subject is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = {
      name,
      department,
      subject,
    };

    const lowerCaseData = convertLowercase(formData);
    try {
      await addDoc(collection(db, "teachers"), lowerCaseData);
      setName("");
      setDepartment("");
      setSubject("");
      setErrors({});
    } catch (error) {
      console.log("Error Adding Teacher", error);
    }
  };

  return (
    <div className="teacher">
      <h1>Add Teacher</h1>
      <form onSubmit={handleSubmit}>
        <div className="teacher-form">
          <label>Name</label>

          <div className="error-label">
            <input
              className="t-inputs"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <label>Department</label>
          <div className="error-label">
            <input
              className="t-inputs"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
            {errors.department && (
              <p className="error-text">{errors.department}</p>
            )}
          </div>

          <label>Subject</label>
          <div className="error-label">
            <input
              className="t-inputs"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {errors.subject && <p className="error-text">{errors.subject}</p>}
          </div>

          <button className="t-inputs-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
