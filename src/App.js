import React from 'react';
import dotenv from 'dotenv';
import './index.scss';
import Header from './components/Header/Header';
import { About } from './components/About/About';
import SkillSection from './components/SkillSection/SkillSection';
import ContactMe from './components/ContactMe/ContactMe';
import { Footer } from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';

dotenv.config();

function App() {
  return (
    <div>
      <Header />
      <About />
      <SkillSection />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
