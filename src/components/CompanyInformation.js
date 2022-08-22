import React from 'react';

class CompanyInformation extends React.Component {
  render() {
    return (
      <section className='company-section-one'>
        <label htmlFor='role-one'>Role: </label>
        <input type='text' id='role-one'></input>
        <label htmlFor='start-date-one'>Start date: </label>
        <input type='date' id='start-date-one'></input>
        <label htmlFor='end-date-one'>End date: </label>
        <input type='date' id='end-date-one'></input>
        <label htmlFor='company-name-one'>Company Name: </label>
        <input type='text' id='company-name-one'></input>
        {/* <label htmlFor='city-one'>Company city: </label>
        <input type='text' id='city-one'></input>
        <label htmlFor='state-one'>Company state: </label>
        <input type='text' id='state-one'></input> */}
        <label htmlFor='description-one'>Description of duties: </label>
        <input type='textarea' id='description-one'></input>
      </section>
      // <section className='company-section-two'>
      //   <label htmlFor='role-two'>Role: </label>
      //   <input type='text' id='role-two'></input>
      //   <label htmlFor='start-date-two'>Start date: </label>
      //   <input type='date' id='start-date-two'></input>
      //   <label htmlFor='end-date-two'>End date: </label>
      //   <input type='date' id='end-date-two'></input>
      //   <label htmlFor='company-name-two'>Company Name: </label>
      //   <input type='text' id='company-name-two'></input>
      //   <label htmlFor='city-two'>Company city: </label>
      //   <input type='text' id='city-two'></input>
      //   {/* <label htmlFor='state-two'>Company state: </label>
      //   <input type='text' id='state-two'></input> */}
      //   <label htmlFor='description-two'>Description of duties: </label>
      //   <input type='textarea' id='description-two'></input>
      // </section>
    );
  }
}

export default CompanyInformation;
