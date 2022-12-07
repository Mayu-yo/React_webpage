import './App.css';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Resercher from './Components/Resercher';
import Investor from './Components/Investor';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/researcher" element={<Resercher />} /> 
          <Route path="/investor" element={<Investor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
