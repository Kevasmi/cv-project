import React from 'react';
import '../styles/CVEducationSection.css';

class CVEducationSection extends React.Component {
  render() {
    return (
      <section className='cv-education-info'>
        <h2 className='cv-education-title'>Education</h2>
        <section className='cv-education-container'>
          {/* <button className='edit-button-education'>
            <span class='material-symbols-outlined'>edit</span>
          </button> */}
          <h3 className='cv-education-name'>{this.props.educationInfo.name}</h3>
          <p className='cv-education-city'>{this.props.educationInfo.city}</p>
          <p className='cv-education-degree'>
            {this.props.educationInfo.degree}
          </p>
          <p className='cv-education-date'>
            {this.props.educationInfo.startDate} to{' '}
            {this.props.educationInfo.endDate}
          </p>
          <p className='cv-education-description'>
            {this.props.educationInfo.description}
          </p>
        </section>
      </section>
    );
  }
}

export default CVEducationSection;
