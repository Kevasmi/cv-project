import React from 'react';

const PersonalInformation = (props) => {
  const handlePersonalInputChange = (e) => {
    props.onPersonalInputChange(e);
  };

  return (
    <section className='personal-section'>
      <label htmlFor='name'>Name </label>
      <input
        type='text'
        id='name'
        placeholder='e.g. Richard Lasco'
        name='name'
        value={props.personalInfo.name}
        onChange={handlePersonalInputChange}
        required
      ></input>
      <section className='phone-and-email'>
        <label htmlFor='phone' className='phone-label'>
          Phone{' '}
        </label>
        <input
          type='tel'
          id='phone'
          placeholder='e.g. 012-345-6789'
          name='phone'
          value={props.personalInfo.phone}
          onChange={handlePersonalInputChange}
          required
        ></input>
        <label htmlFor='email' className='email-label'>
          E-Mail{' '}
        </label>
        <input
          type='email'
          id='email'
          placeholder='e.g. lasco@gmail.com'
          name='email'
          value={props.personalInfo.email}
          onChange={handlePersonalInputChange}
          required
        ></input>
      </section>
      <label htmlFor='home-address'>Address </label>
      <input
        type='text'
        id='home-address'
        placeholder='e.g. 114 West Copper Sage Circle, TX'
        name='address'
        value={props.personalInfo.address}
        onChange={handlePersonalInputChange}
        required
      ></input>
    </section>
  );
};

export default PersonalInformation;
