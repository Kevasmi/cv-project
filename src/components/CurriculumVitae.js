import React from 'react';
import '../styles/CurriculumVitae.css';
import CVEducationSection from './CVEducationSection';
import CVPersonalSection from './CVPersonalSection';
import CVProfessionalSection from './CVProfessionalSection';

class CurriculumVitae extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(e) {
    this.props.onEditClick(e);
  }

  render() {
    return (
      <div className='cv-container'>
        <button className='edit-button' onClick={this.handleEditClick}>
          <span class='material-symbols-outlined'>edit</span>
        </button>
        <CVPersonalSection personalInfo={this.props.personalInfo} />
        <CVProfessionalSection professionalInfo={this.props.professionalInfo} />
        <CVEducationSection educationInfo={this.props.educationInfo} />
      </div>
    );
  }
}

export default CurriculumVitae;
