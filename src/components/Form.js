import React from 'react';
import '../styles/Form.css';
import EducationList from './EducationList';
import PersonalInformation from './PersonalInformation';
import ProfessionalList from './ProfessionalList';

const Form = (props) => {
  const handleSubmit = (e) => {
    props.onSubmitEvent(e);
  };

  let content = (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h2 className='form-personal-header'>Personal Information</h2>
        <PersonalInformation
          personalInfo={props.info.personalInfo}
          onPersonalInputChange={props.onPersonalInputChange}
        />
        <ProfessionalList
          professionalInfo={props.info.professionalInfo}
          onAdd={props.onAddProfessionalSection}
          onChange={props.onProfessionalChange}
          onRemove={props.onRemoveProfessionalSection}
        />
        <EducationList
          educationInfo={props.info.educationInfo}
          onChange={props.onEducationChange}
          onAdd={props.onAddEducationSection}
          onRemove={props.onRemoveEducationSection}
        />

        <button type='submit' className='submitBtn'>
          Submit
        </button>
      </form>
    </div>
  );
  return content;
};

export default Form;
