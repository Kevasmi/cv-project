import React from 'react';

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handlePersonalInputChange = this.handlePersonalInputChange.bind(this);
  }

  handlePersonalInputChange(e) {
    this.props.onPersonalInputChange(e);
  }

  render() {
    return (
      <section className='personal-section'>
        <label htmlFor='name'>Name </label>
        <input
          type='text'
          id='name'
          placeholder='e.g. Richard Lasco'
          name='name'
          value={this.props.personalInfo.name}
          onChange={this.handlePersonalInputChange}
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
            value={this.props.personalInfo.phone}
            onChange={this.handlePersonalInputChange}
          ></input>
          <label htmlFor='email' className='email-label'>
            E-Mail{' '}
          </label>
          <input
            type='email'
            id='email'
            placeholder='e.g. lasco@egmail.com'
            name='email'
            value={this.props.personalInfo.email}
            onChange={this.handlePersonalInputChange}
          ></input>
        </section>
        <label htmlFor='home-address'>Address </label>
        <input
          type='text'
          id='home-address'
          placeholder='e.g. 114 West Copper Sage Circle, TX'
          name='address'
          value={this.props.personalInfo.address}
          onChange={this.handlePersonalInputChange}
        ></input>
      </section>
    );
  }
}

export default PersonalInformation;
