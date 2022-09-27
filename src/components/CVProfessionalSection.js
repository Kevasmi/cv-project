import React from 'react';
import '../styles/CVProfessionalSection.css';

const CVProfessionalSection = (props) => {
  return (
    <section className='cv-professional-info'>
      <section className='cv-professional-container'>
        <h3 className='cv-professional-name'>{props.professionalItem.name}</h3>
        <h4 className='cv-professional-role'>{props.professionalItem.role}</h4>
        <p className='cv-professional-date'>
          {props.professionalItem.startDate} to {props.professionalItem.endDate}
        </p>
        <p className='cv-professional-description'>
          {props.professionalItem.description}
        </p>
      </section>
    </section>
  );
};

export default CVProfessionalSection;
