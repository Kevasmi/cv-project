import React from 'react';

class ProfessionalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleProfessionalChange(e) {
    this.props.onChange(e, this.props.id);
  }

  handleRemove() {
    this.props.onRemove(this.props.id);
  }

  render() {
    return (
      <section className='company-info'>
        <button
          type='button'
          className='delete-button'
          onClick={this.handleRemove}
        >
          X
        </button>
        <label htmlFor='company-name'>Company Name </label>
        <input
          type='text'
          id='company-name'
          name='name'
          value={this.props.professionalItem.name}
          onChange={this.handleProfessionalChange}
          required
        ></input>
        <label htmlFor='role'>Role </label>
        <input
          type='text'
          id='role'
          name='role'
          value={this.props.professionalItem.role}
          onChange={this.handleProfessionalChange}
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
            value={this.props.professionalItem.startDate}
            onChange={this.handleProfessionalChange}
            required
          ></input>
          <label htmlFor='end-date' className='end-label'>
            End date{' '}
          </label>
          <input
            type='date'
            id='end-date'
            name='endDate'
            value={this.props.professionalItem.endDate}
            onChange={this.handleProfessionalChange}
            required
          ></input>
        </section>
        <label htmlFor='description'>Description of duties </label>
        <textarea
          id='description'
          name='description'
          value={this.props.professionalItem.description}
          onChange={this.handleProfessionalChange}
          required
        ></textarea>
      </section>
    );
  }
}

export default ProfessionalInformation;
