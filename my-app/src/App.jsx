import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login"
import StatusPage from "./pages/status"
import TrackerPage from "./pages/tracker"
import NotFound from "./pages/notfound"
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/:id/status" element={<StatusPage />} />
        <Route path="/:id/tracker" element={<TrackerPage />} />
        <Route path="*" element={< NotFound/>} />
      </Routes>
      
    </Router>
  )
}

export default App
