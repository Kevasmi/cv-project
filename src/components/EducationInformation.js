import React from 'react';

const EducationInformation = (props) => {
  const handleEducationChange = (e) => {
    props.onChange(e, props.id);
  };

  const handleRemove = () => {
    props.onRemove(props.id);
  };

  return (
    <section className='education-info'>
      <button type='button' className='delete-button' onClick={handleRemove}>
        X
      </button>
      <label htmlFor='education-name'>University Name </label>
      <input
        type='text'
        id='education-name'
        name='name'
        value={props.educationItem.name}
        onChange={handleEducationChange}
        required
      ></input>
      <label htmlFor='city'>City </label>
      <input
        type='text'
        id='city'
        name='city'
        value={props.educationItem.city}
        onChange={handleEducationChange}
        required
      ></input>
      <label htmlFor='degree'>Degree </label>
      <input
        type='text'
        id='degree'
        name='degree'
        value={props.educationItem.degree}
        onChange={handleEducationChange}
        required
      ></input>
      <section className='dates'>
        <label htmlFor='start-date' className='start-label'>
          Start date{' '}
        </label>
        <input
          type='date'
          id='start-date'
          name='startDate'
          value={props.educationItem.startDate}
          onChange={handleEducationChange}
          required
        ></input>
        <label htmlFor='end-date' className='end-label'>
          End date{' '}
        </label>
        <input
          type='date'
          id='end-date'
          name='endDate'
          value={props.educationItem.endDate}
          onChange={handleEducationChange}
          required
        ></input>
      </section>
      <label htmlFor='description'>Description</label>
      <textarea
        id='description'
        name='description'
        value={props.educationItem.description}
        onChange={handleEducationChange}
        required
      ></textarea>
    </section>
  );
};

export default EducationInformation;
