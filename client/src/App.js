import Header from './components/header/Header';
import Login from './components/auth/Login';
import Logout from './components/auth/Logout';
import Home from './components/home/Home';
import CreateEvent from './components/events/CreateEvent';
import About from './components/About';
import Dashboard from './components/dashboard/Dashboard';
import DataProvider from './context/DataProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header></Header>
        <CreateEvent></CreateEvent>
        <Router>
          <Routes>
            <Route path="home" element={<Home />} />
            {/* <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="about" element={<About />} /> */}
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="*" element={<NoPage />} /> */}

          </Routes>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
