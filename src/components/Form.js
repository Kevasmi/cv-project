import React from 'react';
import '../styles/Form.css';
import EducationInformation from './EducationInformation';
import PersonalInformation from './PersonalInformation';
import ProfessionalList from './ProfessionalList';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddProfessionalSection =
      this.handleAddProfessionalSection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddProfessionalSection() {
    this.props.onAddProfessionalSection();
  }

  handleSubmit(e) {
    this.props.onSubmitEvent(e);
  }

  render() {
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <h2 className='form-personal-header'>Personal Information</h2>
          <PersonalInformation
            personalInfo={this.props.info.personalInfo}
            onPersonalInputChange={this.props.onPersonalInputChange}
          />
          <ProfessionalList
            professionalInfo={this.props.info.professionalInfo}
            onAdd={this.props.onAddProfessionalSection}
            onChange={this.props.onProfessionalChange}
          />
          <EducationList
            educationInfo={this.props.info.educationInfo}
            onChange={this.props.onEducationChange}
            onAdd={this.props.onAddEducationSection}
          />

          <button type='submit' className='submitBtn'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
