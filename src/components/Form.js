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
            personalInfo={this.props.personalInfo}
            onPersonalInputChange={this.props.onPersonalInputChange}
          />
          <ProfessionalList
            professionalInfo={this.props.info.professionalInfo}
            onAdd={this.props.onAddProfessionalSection}
            onChange={this.props.onProfessionalChange}
          />
            Professional Information{' '}
            <span>
              <button type='button' className='professional-header-button'>
                + Add
              </button>
            </span>
          </h2>
          <CompanyInformation
            professionalInfo={this.props.professionalInfo}
            onProfessionalChange={this.props.onProfessionalChange}
          />
          <h2 className='form-education-header'>
            Education Information{' '}
            <span>
              <button type='button' className='education-header-button'>
                + Add
              </button>
            </span>
          </h2>
          <EducationInformation
            educationInfo={this.props.educationInfo}
            onEducationChange={this.props.onEducationChange}
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
