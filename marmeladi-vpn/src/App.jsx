// src/App.js
import Main from './pages/main/Main';
import Register from './pages/register/Reg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
         <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
    </Routes>
</Router>
  )
}

export default App;
