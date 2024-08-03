import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentSearch from "../components/StudentSearch";
import StudentMessages from "../components/StudentMessages";
import StudentAppointments from "../components/StudentAppointments";

const StudentDashboard = () => {
  const [searchteacher, setSearchTeacher] = useState(true);
  const [appointments, setAppointments] = useState();
  const [messages, setMessages] = useState();
  const navigate = useNavigate();

  const handleSearchTeacher = () => {
    setSearchTeacher(true);
    setAppointments(false);
    setMessages(false);
  };
  const handleAppointments = () => {
    setSearchTeacher(false);
    setAppointments(true);
    setMessages(false);
  };
  const handleMessages = () => {
    setSearchTeacher(false);
    setAppointments(false);
    setMessages(true);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="admin">
      <div className="admin-sidebar">
        <button onClick={handleSearchTeacher}>Search Teacher</button>
        <button onClick={handleAppointments}>Book Appointment</button>
        <button onClick={handleMessages}>Send Message</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="admin-content">
        {searchteacher && <StudentSearch />}
        {appointments && <StudentAppointments />}
        {messages && <StudentMessages />}
      </div>
    </div>
  );
};

export default StudentDashboard;
