import React from 'react';
import '../styles/CurriculumVitae.css';

class CurriculumVitae extends React.Component {
  render() {
    return (
      <div className='cv-container'>
        <h1 className='cv-name'>Richard Lasco</h1>
        <header>
          <p className='cv-phone-number'>832-562-6989</p>
          <p className='cv-email'>lasco@gmail.com</p>
          <p className='cv-address'></p>
        </header>
        <section className='cv-professional-info'>
          <section className='cv-professional-container'>
            <h3 className='cv-company-name'>TWFG</h3>
            <h4 className='cv-role'>QA Intern</h4>
            <p className='cv-professional-date'>April 20th to Present</p>
            <p className='cv-description'>
              I help with making the documentation for the TWICO application
              used by the companies agents and clients to create quotes and bind
              policies.
            </p>
          </section>
          <section className='cv-professional-container'>
            <h2 className='cv-professional-title'>Professional History</h2>
            <h3 className='cv-company-name'>TWFG</h3>
            <h4 className='cv-role'>QA Intern</h4>
            <p className='cv-professional-date'>April 20th to Present</p>
            <p className='cv-description'>
              I help with making the documentation for the TWICO application
              used by the companies agents and clients to create quotes and bind
              policies.
            </p>
          </section>
        </section>
        <section className='cv-education-info'>
          <h2 className='cv-education-title'>Education</h2>
          <section className='cv-education-info'>
            <h3 className='cv-education-name'>Sam Houston State University</h3>
            <p className='cv-city'>Huntsville, TX</p>
            <p className='cv-degree'>
              B.A. Major in General Business, Minor in Marketing
            </p>
            <p className='cv-education-date'>
              August 27th, 2018 to June 18th, 2020
            </p>
          </section>
          <section className='cv-education-info'>
            <h3 className='cv-education-name'>Sam Houston State University</h3>
            <p className='cv-city'>Huntsville, TX</p>
            <p className='cv-degree'>
              B.A. Major in General Business, Minor in Marketing
            </p>
            <p className='cv-education-date'>
              August 27th, 2018 to June 18th, 2020
            </p>
          </section>
        </section>
      </div>
    );
  }
}

export default CurriculumVitae;
