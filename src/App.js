import React from 'react';
import './styles/App.css';
import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.handlePersonalInputChange = this.handlePersonalInputChange.bind(this);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        description: '',
      },
      formNotSubmitted: true,
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
    console.log(this.state.personalInfo);
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

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      ...prevState,
      formNotSubmitted: this.state.formNotSubmitted ? false : true,
    }));
  }

  render() {
    return (
      <div className='App'>
        <header className='main-header'>
          <h1 className='main-title'>CV Generator</h1>
        </header>
        <main>
          {this.state.formNotSubmitted ? (
            <Form
              personalInfo={this.state.personalInfo}
              professionalInfo={this.state.professionalInfo}
              educationInfo={this.state.educationInfo}
              onPersonalInputChange={this.handlePersonalInputChange}
              onProfessionalChange={this.handleProfessionalChange}
              onEducationChange={this.handleEducationChange}
              onSubmitEvent={this.handleSubmit}
            />
          ) : (
            <CurriculumVitae
              formSubmitted={this.state.formNotSubmitted}
              personalInfo={this.state.personalInfo}
              professionalInfo={this.state.professionalInfo}
              educationInfo={this.state.educationInfo}
              onEditClick={this.handleSubmit}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
