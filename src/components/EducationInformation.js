import React from 'react';

class EducationInformation extends React.Component {
  render() {
    return (
      <section className='education-section-one'>
        <label htmlFor='education-name-one'>Name: </label>
        <input type='text' id='education-name-one'></input>
        <label htmlFor='education-city-one'>City: </label>
        <input type='text' id='education-city-one'></input>
        <label htmlFor='education-degree-one'>Degree: </label>
        <input type='text' id='education-degree-one'></input>
        <label htmlFor='start-date-one'>Start date: </label>
        <input type='date' id='start-date-one'></input>
        <label htmlFor='end-date-one'>End date: </label>
        <input type='date' id='end-date-one'></input>
      </section>
      // <section className='education-section-two'>
      // <label htmlFor='education-name-one'>Name: </label>
      // <input type='text' id='education-name-one'></input>
      // <label htmlFor='education-city-one'>City: </label>
      // <input type='text' id='education-city-one'></input>
      // <label htmlFor='education-degree-one'>Degree: </label>
      // <input type='text' id='education-degree-one'></input>
      // <label htmlFor='start-date-one'>Start date: </label>
      // <input type='date' id='start-date-one'></input>
      // <label htmlFor='end-date-one'>End date: </label>
      // <input type='date' id='end-date-one'></input>
      // </section>
    );
  }
}

export default EducationInformation;
