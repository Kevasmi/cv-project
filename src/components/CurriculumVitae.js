import React from 'react';
import '../styles/CurriculumVitae.css';
import CVEducationList from './CVEducationList';
import CVPersonalSection from './CVPersonalSection';
import CVProfessionalList from './CVProfessionalList';

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
          <span className='material-symbols-outlined'>edit</span>
        </button>
        <CVPersonalSection personalInfo={this.props.personalInfo} />
        <h2 className='cv-professional-title'>Professional History</h2>
        <CVProfessionalList professionalInfo={this.props.professionalInfo} />
        <h2 className='cv-education-title'>Education</h2>
        <CVEducationList educationInfo={this.props.educationInfo} />
      </div>
    );
  }
}

export default CurriculumVitae;
