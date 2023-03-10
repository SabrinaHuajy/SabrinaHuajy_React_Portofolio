import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/Work" element={<Work/>} />
            <Route path="/Contact" element={<Contact/>} />

          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
