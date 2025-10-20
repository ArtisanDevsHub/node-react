import "./App.css";
import UserDashboard from "./component/dashboard/UserDashboard";
import NoteComponent from "./component/notes/NoteComponent";
import TimerComponent from "./component/TimerComponent";
import UserLoginComponent from "./component/user/UserLoginComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <h1 className="">Welcome to Notes</h1>

      <Router>
        <Routes>
          <Route path='/' element={<UserLoginComponent/>} />
          <Route path='/dashboard' element={<UserDashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
