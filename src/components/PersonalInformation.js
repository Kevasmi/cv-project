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
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          name='name'
          value={this.props.personalInfo.name}
          onChange={this.handlePersonalInputChange}
        ></input>
        <label htmlFor='phone'>Phone: </label>
        <input
          type='tel'
          id='phone'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{3}'
          placeholder='012-345-6789'
          name='phone'
          value={this.props.personalInfo.phone}
          onChange={this.handlePersonalInputChange}
        ></input>
        <label htmlFor='email'>E-Mail: </label>
        <input
          type='email'
          id='email'
          placeholder='example@example.com'
          name='email'
          value={this.props.personalInfo.email}
          onChange={this.handlePersonalInputChange}
        ></input>
        <label htmlFor='home-address'>Address: </label>
        <input
          type='text'
          id='home-address'
          name='address'
          value={this.props.personalInfo.address}
          onChange={this.handlePersonalInputChange}
        ></input>
      </section>
    );
  }
}

export default PersonalInformation;
