import React from 'react';

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleNameChange(e) {
    this.props.onPersonalNameChange(e);
  }

  handlePhoneChange(e) {
    this.props.onPhoneChange(e);
  }

  handleEmailChange(e) {
    this.props.onEmailChange(e);
  }

  handleAddressChange(e) {
    this.props.onAddressChange(e);
  }

  render() {
    return (
      <section className='personal-section'>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          value={this.props.personalInfo.name}
          onChange={this.handleNameChange}
        ></input>
        <label htmlFor='phone'>Phone: </label>
        <input
          type='tel'
          id='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
          placeholder='012-345-6789'
          name='phone'
          value={this.props.personalInfo.phone}
          onChange={this.handlePhoneChange}
        ></input>
        <label htmlFor='email'>E-Mail: </label>
        <input
          type='email'
          id='email'
          placeholder='example@example.com'
          name='email'
          value={this.props.personalInfo.email}
          onChange={this.handleEmailChange}
        ></input>
        <label htmlFor='home-address'>Address: </label>
        <input
          type='text'
          id='home-address'
          name='address'
          value={this.props.personalInfo.address}
          onChange={this.handleAddressChange}
        ></input>
      </section>
    );
  }
}

export default PersonalInformation;
