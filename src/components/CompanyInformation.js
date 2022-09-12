import React from 'react';

class CompanyInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfessionalChange = this.handleProfessionalChange.bind(this);
  }

  handleProfessionalChange(e) {
    this.props.onChange(e, this.props.id);
  }

  render() {
    return (
      <section className='company-info'>
        <label htmlFor='company-name'>Company Name </label>
        <input
          type='text'
          id='company-name'
          name='name'
          value={this.props.professionalItem.name}
          onChange={this.handleProfessionalChange}
        ></input>
        <label htmlFor='role'>Role </label>
        <input
          type='text'
          id='role'
          name='role'
          value={this.props.professionalItem.role}
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
            value={this.props.professionalItem.startDate}
            onChange={this.handleProfessionalChange}
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
          ></input>
        </section>
        <label htmlFor='description'>Description of duties </label>
        <textarea
          id='description'
          name='description'
          value={this.props.professionalItem.description}
          onChange={this.handleProfessionalChange}
        ></textarea>
      </section>
    );
  }
}

export default CompanyInformation;
