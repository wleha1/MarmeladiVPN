// src/App.js
import Header from './components/Header/Header';
import Main from './pages/main/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Main />} />
    </Routes>
</Router>
  )
}

export default App;
