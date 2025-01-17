import React from 'react';
import './Skills.css';
import { skill } from '../../assets';
import { skillsList } from '../../constant';

// Define AppText object
const AppText = {
  Skills: 'Tools&',
  Experties: 'Technologies', // Correct spelling of 'Expertise'
};

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-header">
        <img src={skill} className="skills-icon" alt="Skill Icon" />
        <h1 className="skills-title">
          {AppText.Skills}
          <span className="skills-subtitle">{AppText.Experties}</span>
        </h1>
      </div>

      <div className="skills-list-container">
        <div className="skills-grid">
          {skillsList.map((item, index) => (
            <div className="skill-item" key={index}>
              <img src={item.icon} alt={item.name} className="skill-icon" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
