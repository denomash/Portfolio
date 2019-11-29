import React from 'react';
import './index.scss';
import Header from './components/Header/Header';
import { About } from './components/About/About';
import SkillSection from './components/SkillSection/SkillSection';

function App() {
  return (
    <div>
      <Header />
      <About />
      <SkillSection />
    </div>
  );
}

export default App;
