import React from 'react';
import '../styles/CVEducationSection.css';

const CVEducationSection = (props) => {
  return (
    <section className='cv-education-info'>
      <section className='cv-education-container'>
        <h3 className='cv-education-name'>{props.educationItem.name}</h3>
        <p className='cv-education-city'>{props.educationItem.city}</p>
        <p className='cv-education-degree'>{props.educationItem.degree}</p>
        <p className='cv-education-date'>
          {props.educationItem.startDate} to {props.educationItem.endDate}
        </p>
        <p className='cv-education-description'>
          {props.educationItem.description}
        </p>
      </section>
    </section>
  );
};

export default CVEducationSection;
