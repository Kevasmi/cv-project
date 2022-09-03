import React from 'react';

class CompanyInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
  }

  handleProfessionalChange(e) {
    this.props.onProfessionalChange(e);
  }

  render() {
    return (
      <section className='company-info'>
        <h2>Professional Information</h2>
        <label htmlFor='company-name'>Company Name </label>
        <input
          type='text'
          id='company-name'
          name='name'
          value={this.props.professionalInfo.name}
          onChange={this.handleProfessionalChange}
        ></input>
        <label htmlFor='role-one'>Role </label>
        <input
          type='text'
          id='role-one'
          name='role'
          value={this.props.professionalInfo.role}
          onChange={this.handleProfessionalChange}
        ></input>
        <section className='dates'>
          <label htmlFor='start-date' className='start-label'>
            Start date{' '}
          </label>
          <input
            type='date'
            id='start-date'
            name='startDate'
            value={this.props.professionalInfo.startDate}
            onChange={this.handleProfessionalChange}
          ></input>
          <label htmlFor='end-date' className='end-label'>
            End date{' '}
          </label>
          <input
            type='date'
            id='end-date'
            name='endDate'
            value={this.props.professionalInfo.endDate}
            onChange={this.handleProfessionalChange}
          ></input>
        </section>
        <label htmlFor='description-one'>Description of duties </label>
        <textarea
          id='description-one'
          name='description'
          value={this.props.professionalInfo.description}
          onChange={this.handleProfessionalChange}
        ></textarea>
      </section>
    );
  }
}

export default CompanyInformation;
