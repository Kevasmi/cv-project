import React from 'react';
import '../styles/Form.css';
import EducationList from './EducationList';
import PersonalInformation from './PersonalInformation';
import ProfessionalList from './ProfessionalList';

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
            personalInfo={this.props.info.personalInfo}
            onPersonalInputChange={this.props.onPersonalInputChange}
          />
          <ProfessionalList
            professionalInfo={this.props.info.professionalInfo}
            onAdd={this.props.onAddProfessionalSection}
            onChange={this.props.onProfessionalChange}
            onRemove={this.props.onRemoveProfessionalSection}
          />
          <EducationList
            educationInfo={this.props.info.educationInfo}
            onChange={this.props.onEducationChange}
            onAdd={this.props.onAddEducationSection}
            onRemove={this.props.onRemoveEducationSection}
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
