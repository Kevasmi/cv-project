import React from 'react';
import '../styles/CVEducationSection.css';

class CVEducationSection extends React.Component {
  render() {
    return (
      <section className='cv-education-info'>
        <section className='cv-education-container'>
          <h3 className='cv-education-name'>{this.props.educationItem.name}</h3>
          <p className='cv-education-city'>{this.props.educationItem.city}</p>
          <p className='cv-education-degree'>
            {this.props.educationItem.degree}
          </p>
          <p className='cv-education-date'>
            {this.props.educationItem.startDate} to{' '}
            {this.props.educationItem.endDate}
          </p>
          <p className='cv-education-description'>
            {this.props.educationItem.description}
          </p>
        </section>
      </section>
    );
  }
}

export default CVEducationSection;
