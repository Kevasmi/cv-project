import React from 'react';
import '../styles/CVPersonalSection.css';

const CVPersonalSection = (props) => {
  return (
    <section className='cv-personal-info'>
      <h1 className='cv-name'>{props.personalInfo.name}</h1>
      <header className='cv-header'>
        <ul>
          <li className='cv-phone-number'>
            <span>{props.personalInfo.phone}</span>
          </li>
          <li className='cv-email'>
            <span>{props.personalInfo.email}</span>
          </li>
          <li className='cv-address'>
            <span>{props.personalInfo.address}</span>
          </li>
          <li></li>
        </ul>
      </header>
    </section>
  );
};

export default CVPersonalSection;
