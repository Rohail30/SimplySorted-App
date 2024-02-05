import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Memos from './components/Memos';
import Priority from './components/Priority';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/memo" element={<Memos />} />
          <Route path="/priority" element={<Priority />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
