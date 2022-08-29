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
        <section className='company-section-one'>
          <label htmlFor='role-one'>Role: </label>
          <input
            type='text'
            id='role-one'
            name='role'
            value={this.props.professionalInfo.role}
            onChange={this.handleProfessionalChange}
          ></input>
          <label htmlFor='start-date'>Start date: </label>
          <input
            type='date'
            id='start-date'
            name='startDate'
            value={this.props.professionalInfo.startDate}
            onChange={this.handleProfessionalChange}
          ></input>
          <label htmlFor='end-date'>End date: </label>
          <input
            type='date'
            id='end-date'
            name='endDate'
            value={this.props.professionalInfo.endDate}
            onChange={this.handleProfessionalChange}
          ></input>
          <label htmlFor='company-name'>Company Name: </label>
          <input
            type='text'
            id='company-name'
            name='name'
            value={this.props.professionalInfo.name}
            onChange={this.handleProfessionalChange}
          ></input>
          {/* <label htmlFor='city-one'>Company city: </label>
          <input type='text' id='city-one'></input>
          <label htmlFor='state-one'>Company state: </label>
          <input type='text' id='state-one'></input> */}
          <label htmlFor='description-one'>Description of duties: </label>
          <input
            type='textarea'
            id='description-one'
            name='description'
            value={this.props.professionalInfo.description}
            onChange={this.handleProfessionalChange}
          ></input>
        </section>
      </section>
    );
  }
}

export default CompanyInformation;
