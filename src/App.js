import React from 'react';
import './App.css';
// import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.handlePersonalInputChange = this.handlePersonalInputChange.bind(this);
    this.handleProfessionalRoleChangeOne =
      this.handleProfessionalRoleChangeOne.bind(this);
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

  handlePersonalInputChange(e) {
    const name = e.target.name;
    const { value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
        personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  }

  handlePhoneChange(e) {
    const { value } = e.target;
    this.setState({
          role: value,
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
            onPersonalInputChange={this.handlePersonalInputChange}
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
