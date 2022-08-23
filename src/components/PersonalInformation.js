import React from 'react';

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(data) {
    this.props.onPersonalNameChange(data);
  }
  render() {
    return (
      <section className='personal-section'>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          id='name'
          value={this.props.personalData.name}
          onChange={this.handleNameChange}
        ></input>
        <label htmlFor='phone'>Phone: </label>
        <input type='text' id='phone'></input>
        <label htmlFor='email'>E-Mail: </label>
        <input type='email' id='email'></input>
        <label htmlFor='home-address'>Address: </label>
        <input type='text' id='home-address'></input>
      </section>
    );
  }
}

export default PersonalInformation;
