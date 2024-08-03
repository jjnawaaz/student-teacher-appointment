import React, { useState } from "react";
import AdminAddTeacher from "../components/AdminAddTeacher";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [showTeacher, setShowTeacher] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const navigate = useNavigate();
  const handleTeacherButtonClick = () => {
    setShowTeacher(true);
    setShowStudent(false);
  };
  const handleStudentButtonClick = () => {
    setShowStudent(true);
    setShowTeacher(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="admin">
      <div className="admin-sidebar">
        <button onClick={handleTeacherButtonClick}>Teachers</button>
        <button onClick={handleStudentButtonClick}>Students</button>
        <button onClick={handleLogout}>Log out</button>
      </div>
      <div className="admin-content">
        <div className="admin-nav"> In admin nav</div>
        {showTeacher && <AdminAddTeacher />}
        {showStudent && <div>Add Student Content</div>}
      </div>
    </div>
  );
};

export default AdminDashboard;
