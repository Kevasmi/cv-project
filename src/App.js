import React from 'react';
import './App.css';
// import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.handlePersonalInputChange = this.handlePersonalInputChange.bind(this);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.state = {
      personalInfo: {
        name: '',
        phone: '',
        email: '',
        address: '',
      },
      professionalInfo: {
        role: '',
        startDate: '',
        endDate: '',
        name: '',
        description: '',
      },
      educationInfo: {
        name: '',
        city: '',
        degree: '',
        startDate: '',
        endDate: '',
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
    console.log(this.state.professionalInfo);
  }

  handleProfessionalChange(e) {
    const name = e.target.name;
    const { value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      professionalInfo: {
        ...prevState.professionalInfo,
        [name]: value,
      },
    }));
    console.log(this.state.professionalInfo);
  }

  handleEducationChange(e) {
    const name = e.target.name;
    const { value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }));
    console.log(this.state.educationInfo);
  }

  render() {
    return (
      <div className='App'>
        <section className='form-side'>
          <Form
            personalInfo={this.state.personalInfo}
            professionalInfo={this.state.professionalInfo}
            educationInfo={this.state.educationInfo}
            onPersonalInputChange={this.handlePersonalInputChange}
            onProfessionalChange={this.handleProfessionalChange}
            onEducationChange={this.handleEducationChange}
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
