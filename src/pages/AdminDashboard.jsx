import React, { useState } from "react";
import AddTeacher from "../components/AddTeacher";

const AdminDashboard = () => {
  const [showTeacher, setShowTeacher] = useState(false);
  const [showStudent, setShowStudent] = useState(false);

  const handleTeacherButtonClick = () => {
    setShowTeacher(true);
    setShowStudent(false);
  };
  const handleStudentButtonClick = () => {
    setShowStudent(true);
    setShowTeacher(false);
  };

  return (
    <div className="admin">
      <div className="admin-sidebar">
        <button onClick={handleTeacherButtonClick}>Teachers</button>
        <button onClick={handleStudentButtonClick}>Students</button>
      </div>
      <div className="admin-content">
        <div className="admin-nav"> In admin nav</div>
        {showTeacher && <AddTeacher />}
        {showStudent && <div>Add Student Content</div>}
      </div>
    </div>
  );
};

export default AdminDashboard;
