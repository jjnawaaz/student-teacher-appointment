import { useState } from "react";

import "./App.css";
import AddTeacher from "./components/AddTeacher";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Student- Teacher Booking Appointment</h1>
      <AddTeacher />
    </div>
  );
}

export default App;
