import React from 'react';
import './App.css';
// import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.handlePersonalNameChange = this.handlePersonalNameChange.bind(this);
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

  render() {
    return (
      <div className='App'>
        <section className='form-side'>
          <Form
            formData={this.state.formData}
            onPersonalNameChange={this.handlePersonalNameChange}
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
