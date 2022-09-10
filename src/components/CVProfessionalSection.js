import React from 'react';
import '../styles/CVProfessionalSection.css';

class CVProfessionalSection extends React.Component {
  render() {
    return (
      <section className='cv-professional-info'>
        <section className='cv-professional-container'>
          <h3 className='cv-professional-name'>
            {this.props.professionalItem.name}
          </h3>
          <h4 className='cv-professional-role'>
            {this.props.professionalItem.role}
          </h4>
          <p className='cv-professional-date'>
            {this.props.professionalItem.startDate} to{' '}
            {this.props.professionalItem.endDate}
          </p>
          <p className='cv-professional-description'>
            {this.props.professionalItem.description}
          </p>
        </section>
      </section>
    );
  }
}

export default CVProfessionalSection;
