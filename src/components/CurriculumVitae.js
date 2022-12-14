import React from 'react';
import '../styles/CurriculumVitae.css';
import CVEducationList from './CVEducationList';
import CVPersonalSection from './CVPersonalSection';
import CVProfessionalList from './CVProfessionalList';

const CurriculumVitae = (props) => {
  const handleEditClick = (e) => {
    props.onEditClick(e);
  };

  return (
    <div className='cv-container'>
      <button className='edit-button' onClick={handleEditClick}>
        <span className='material-symbols-outlined'>edit</span>
      </button>
      <CVPersonalSection personalInfo={props.personalInfo} />
      <h2 className='cv-professional-title'>Professional History</h2>
      <CVProfessionalList professionalInfo={props.professionalInfo} />
      <h2 className='cv-education-title'>Education</h2>
      <CVEducationList educationInfo={props.educationInfo} />
    </div>
  );
};

export default CurriculumVitae;
