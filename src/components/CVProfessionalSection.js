import React from 'react';
import '../styles/CVProfessionalSection.css';

class CVProfessionalSection extends React.Component {
  render() {
    return (
      <section className='cv-professional-info'>
        <h2 className='cv-professional-title'>Professional History</h2>
        <section className='cv-professional-container'>
          <button className='edit-button-professional'>
            <span class='material-symbols-outlined'>edit</span>
          </button>
          <h3 className='cv-professional-name'>
            {this.props.professionalInfo.name}
          </h3>
          <h4 className='cv-professional-role'>
            {this.props.professionalInfo.role}
          </h4>
          <p className='cv-professional-date'>
            {this.props.professionalInfo.startDate} to{' '}
            {this.props.professionalInfo.endDate}
          </p>
          <p className='cv-professional-description'>
            {this.props.professionalInfo.description}
          </p>
        </section>
      </section>
    );
  }
}

export default CVProfessionalSection;
