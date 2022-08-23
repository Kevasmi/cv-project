import React from 'react';
import CompanyInformation from './CompanyInformation';
import EducationInformation from './EducationInformation';
import PersonalInformation from './PersonalInformation';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <form>
          <PersonalInformation
            personalInfo={this.props.formData.personalInfo}
            onPersonalNameChange={this.props.onPersonalNameChange}
            onPhoneChange={this.props.onPhoneChange}
            onEmailChange={this.props.onEmailChange}
            onAddressChange={this.props.onAddressChange}
          />
          <CompanyInformation />
          <EducationInformation />
          <button type='submit'>Submit</button>
          <button>Edit</button>
        </form>
      </div>
    );
  }
}

export default Form;
