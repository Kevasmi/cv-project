import React from 'react';
import './App.css';
// import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.handlePersonalNameChange = this.handlePersonalNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.state = {
        personalInfo: {
          name: '',
          phone: '',
          email: '',
          address: '',
        },
        professionalInfo: {
          one: {
            role: '',
            startDate: '',
            endDate: '',
            name: '',
            description: '',
          },
          two: {
            role: '',
            startDate: '',
            endDate: '',
            name: '',
            description: '',
          },
        },
        educationInfo: {
          one: {
            name: '',
            city: '',
            degree: '',
            startDate: '',
            endDate: '',
          },
          two: {
            name: '',
            city: '',
            degree: '',
            startDate: '',
            endDate: '',
          },
        },
    };
  }

  handlePersonalNameChange(e) {
    const { value } = e.target;
    this.setState({
        personalInfo: {
        name: value,
      },
    });
    console.log(this.state.personalInfo.name);
  }

  handlePhoneChange(e) {
    const { value } = e.target;
    this.setState({
        personalInfo: {
        phone: value,
      },
    });
    console.log(this.state.personalInfo.phone);
  }

  handleEmailChange(e) {
    const { value } = e.target;
    this.setState({
        personalInfo: {
        email: value,
      },
    });
    console.log(this.state.personalInfo.email);
  }

  handleAddressChange(e) {
    this.setState({
      formData: {
        personalInfo: {
          address: e.target.value,
        },
      },
    });
    console.log(this.state.formData.personalInfo.address);
  }

  render() {
    return (
      <div className='App'>
        <section className='form-side'>
          <Form
            personalInfo={this.state.personalInfo}
            professionalInfo={this.state.professionalInfo}
            onPersonalNameChange={this.handlePersonalNameChange}
            onPhoneChange={this.handlePhoneChange}
            onEmailChange={this.handleEmailChange}
            onAddressChange={this.handleAddressChange}
          />
        </section>
        {/* <section className='cv-side'>
        <CurriculumVitae />
      </section> */}
      </div>
    );
  }
}

export default App;
