import React, { useState, useEffect } from 'react';
import { AppText, portfolio } from "../../constant";
import { robo } from "../../assets/index";
import './Project.css'; // Assuming you want to keep an external CSS file for project-specific styles.

const Project = () => {
  const SectionHeading = ({ firstTitle, secondTitle }) => {
    return (
      <div>
        <h1 className="section-heading">
          {firstTitle}
          <span className="section-subheading">{secondTitle}</span>
        </h1>
      </div>
    );
  };

  const [portfolioList, setPortfolioList] = useState([]);
  const [portfolioListOrg, setPortfolioListOrg] = useState([]);

  useEffect(() => {
    setPortfolioList(portfolio);
    setPortfolioListOrg(portfolio);
  }, []);

  const filterPortfolio = (type) => {
    if (type === 'All') {
      setPortfolioList(portfolioListOrg);
    } else {
      const result = portfolioListOrg.filter(item => item.type === type);
      setPortfolioList(result);
      console.log(result);
    }
  };

  return (
    <div className="portfolio-container" id='projects'>
      <div className="portfolio-header">
        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
        <img src={robo} className="robo-icon" alt="robo" />
      </div>
      
      <div className="portfolio-filter">
        <button onClick={() => filterPortfolio('All')} className="filter-button">All</button>
        <button onClick={() => filterPortfolio('MERN')} className="filter-button">MERN App</button>
        <button onClick={() => filterPortfolio('website')} className="filter-button">Web App</button>
        <button onClick={() => filterPortfolio('Frontend')} className="filter-button">Frontend App</button>
        <button onClick={() => filterPortfolio('mobile')} className="filter-button">Mobile App</button>
      </div>

      <div className="portfolio-items">
        {portfolioList.map((item, index) => (
          <div key={index} className="portfolio-item">
            <img src={item.imageUrl} className="portfolio-item-image" alt={item.title} />
            <h1 className="portfolio-item-title">{item.title}</h1>
            <h1 className="portfolio-item-description">{item.desc}</h1>
            <div className="portfolio-item-buttons">
              <a href={item.demo} target="_blank" rel="noopener noreferrer" className="button demo-button">
                Demo
              </a>
              <a href={item.source} target="_blank" rel="noopener noreferrer" className="button source-button">
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
