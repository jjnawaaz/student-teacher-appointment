import React, { useState } from "react";
import TeacherAppointments from "../components/TeacherAppointments";
import TeacherCancelAppointments from "../components/TeacherCancelAppointments";
import TeacherMessages from "../components/TeacherMessages";
import TeacherAllAppointments from "../components/TeacherAllAppointments";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const [showAppointments, setShowAppointments] = useState("");
  const [cancelAppointments, setCancelAppointments] = useState("");
  const [messages, setMessages] = useState("");
  const [allappointments, setAllappointments] = useState("");
  const navigate = useNavigate();

  const handleShowAppointments = () => {
    setShowAppointments(true);
    setCancelAppointments(false);
    setMessages(false);
    setAllappointments(false);
  };
  const handleCancelAppointments = () => {
    setShowAppointments(false);
    setCancelAppointments(true);
    setMessages(false);
    setAllappointments(false);
  };
  const handleMessages = () => {
    setShowAppointments(false);
    setCancelAppointments(false);
    setMessages(true);
    setAllappointments(false);
  };
  const handleAllAppointments = () => {
    setShowAppointments(false);
    setCancelAppointments(false);
    setMessages(false);
    setAllappointments(true);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="teacher">
      <div className="teacher-sidebar">
        <button onClick={handleShowAppointments}>Appointments</button>
        <button onClick={handleCancelAppointments}>Cancel Appointments</button>
        <button onClick={handleMessages}>View Messages</button>
        <button onClick={handleAllAppointments}>View All Appointments</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="teacher-content">
        <div className="admin-nav">In admin navbar</div>
        {showAppointments && <TeacherAppointments />}
        {cancelAppointments && <TeacherCancelAppointments />}
        {messages && <TeacherMessages />}
        {allappointments && <TeacherAllAppointments />}
      </div>
    </div>
  );
};

export default TeacherDashboard;
