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
      formData: {
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
      },
    };
  }

  handlePersonalNameChange(e) {
    this.setState({
      formData: {
        personalInfo: {
          name: e.target.value,
        },
      },
    });
    console.log(this.state.formData.personalInfo.name);
  }

  handlePhoneChange(e) {
    this.setState({
      formData: {
        personalInfo: {
          phone: e.target.value,
        },
      },
    });
    console.log(this.state.formData.personalInfo.phone);
  }

  handleEmailChange(e) {
    this.setState({
      formData: {
        personalInfo: {
          email: e.target.value,
        },
      },
    });
    console.log(this.state.formData.personalInfo.email);
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
            formData={this.state.formData}
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
