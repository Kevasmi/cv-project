import React from 'react';

const ProfessionalInformation = (props) => {
  const handleProfessionalChange = (e) => {
    props.onChange(e, props.id);
  };

  const handleRemove = () => {
    props.onRemove(props.id);
  };

  return (
    <section className='company-info'>
      <button type='button' className='delete-button' onClick={handleRemove}>
        X
      </button>
      <label htmlFor='company-name'>Company Name </label>
      <input
        type='text'
        id='company-name'
        name='name'
        value={props.professionalItem.name}
        onChange={handleProfessionalChange}
        required
      ></input>
      <label htmlFor='role'>Role </label>
      <input
        type='text'
        id='role'
        name='role'
        value={props.professionalItem.role}
        onChange={handleProfessionalChange}
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
          value={props.professionalItem.startDate}
          onChange={handleProfessionalChange}
          required
        ></input>
        <label htmlFor='end-date' className='end-label'>
          End date{' '}
        </label>
        <input
          type='date'
          id='end-date'
          name='endDate'
          value={props.professionalItem.endDate}
          onChange={handleProfessionalChange}
          required
        ></input>
      </section>
      <label htmlFor='description'>Description of duties </label>
      <textarea
        id='description'
        name='description'
        value={props.professionalItem.description}
        onChange={handleProfessionalChange}
        required
      ></textarea>
    </section>
  );
};

export default ProfessionalInformation;
