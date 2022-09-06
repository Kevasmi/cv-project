import React from 'react';
import '../styles/Form.css';
import CompanyInformation from './CompanyInformation';
import EducationInformation from './EducationInformation';
import PersonalInformation from './PersonalInformation';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <h2 className='form-professional-header'>Professional Information</h2>
          <CompanyInformation
            professionalInfo={this.props.professionalInfo}
            onProfessionalChange={this.props.onProfessionalChange}
          />
          <h2 className='form-education-header'>Education Information</h2>
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
