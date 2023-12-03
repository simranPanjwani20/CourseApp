import React, { useState } from 'react';
import './Accordion.css'; 

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className={`accordion-title ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            {item.title}
          </div>
          {index === activeIndex && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
