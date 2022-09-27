import React, { useState } from 'react';
import './styles/App.css';
import CurriculumVitae from './components/CurriculumVitae';
import Form from './components/Form';
import uniqid from 'uniqid';

const App = (props) => {
  const [state, setState] = useState({
    personalInfo: {
      name: '',
      phone: '',
      email: '',
      address: '',
    },
    professionalInfo: [],
    educationInfo: [],
    formNotSubmitted: true,
  });

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
    console.log(state.personalInfo);
  };

  const handleProfessionalChange = (e, id) => {
    const { name, value } = e.target;

    setState((prevState) => {
      const newProfessional = prevState.professionalInfo.map(
        (professionalItem) => {
          if (professionalItem.id === id) {
            return { ...professionalItem, [name]: [value] };
          }
          return professionalItem;
        }
      );
      return { ...prevState, professionalInfo: [...newProfessional] };
    });
  };

  const handleAddProfessionalSection = () => {
    setState(
      (prevState) => ({
        ...prevState,
        professionalInfo: [
          ...prevState.professionalInfo,
          {
            role: '',
            startDate: '',
            endDate: '',
            name: '',
            description: '',
            id: uniqid(),
          },
        ],
      }),
      () => {
        console.log(state.professionalInfo);
      }
    );
  };

  const handleRemoveProfessionalSection = (id) => {
    setState((prevState) => {
      const newProfessional = prevState.professionalInfo.filter(
        (professionalItem) => {
          return professionalItem.id !== id;
        }
      );
      return { ...prevState, professionalInfo: [...newProfessional] };
    });
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;

    setState((prevState) => {
      const newEducation = prevState.educationInfo.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: [value] };
        }
        return educationItem;
      });
      return { ...prevState, educationInfo: [...newEducation] };
    });
  };

  const handleAddEducationSection = () => {
    setState(
      (prevState) => ({
        ...prevState,
        educationInfo: [
          ...prevState.educationInfo,
          {
            name: '',
            city: '',
            degree: '',
            startDate: '',
            endDate: '',
            description: '',
            id: uniqid(),
          },
        ],
      }),
      () => {
        console.log(state.educationInfo);
      }
    );
  };

  const handleRemoveEducationSection = (id) => {
    setState((prevState) => {
      const newEducation = prevState.educationInfo.filter((educationItem) => {
        return educationItem.id !== id;
      });
      return { ...prevState, educationInfo: [...newEducation] };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      formNotSubmitted: state.formNotSubmitted ? false : true,
    }));
  };

  let content = (
    <div className='App'>
      <header className='main-header'>
        <h1 className='main-title'>CV Generator</h1>
      </header>
      <main>
        {state.formNotSubmitted ? (
          <Form
            info={state}
            onPersonalInputChange={handlePersonalInputChange}
            onProfessionalChange={handleProfessionalChange}
            onAddProfessionalSection={handleAddProfessionalSection}
            onRemoveProfessionalSection={handleRemoveProfessionalSection}
            onEducationChange={handleEducationChange}
            onAddEducationSection={handleAddEducationSection}
            onRemoveEducationSection={handleRemoveEducationSection}
            onSubmitEvent={handleSubmit}
          />
        ) : (
          <CurriculumVitae
            formSubmitted={state.formNotSubmitted}
            personalInfo={state.personalInfo}
            professionalInfo={state.professionalInfo}
            educationInfo={state.educationInfo}
            onEditClick={handleSubmit}
          />
        )}
      </main>
    </div>
  );
  return content;
};

export default App;
