import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import { About } from './components/About/About';
import SkillSection from './components/SkillSection/SkillSection';
import ContactMe from './components/ContactMe/ContactMe';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <SkillSection />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
