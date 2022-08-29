import React from 'react';

class EducationInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  handleEducationChange(e) {
    this.props.onEducationChange(e);
  }

  render() {
    return (
      <section className='education-info'>
        <section className='education-section'>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            value={this.props.educationInfo.name}
            onChange={this.handleEducationChange}
          ></input>
          <label htmlFor='city'>City: </label>
          <input
            type='text'
            id='city'
            name='city'
            value={this.props.educationInfo.city}
            onChange={this.handleEducationChange}
          ></input>
          <label htmlFor='degree'>Degree: </label>
          <input
            type='text'
            id='degree'
            name='degree'
            value={this.props.educationInfo.degree}
            onChange={this.handleEducationChange}
          ></input>
          <label htmlFor='start-date'>Start date: </label>
          <input
            type='date'
            id='start-date'
            name='startDate'
            value={this.props.educationInfo.startDate}
            onChange={this.handleEducationChange}
          ></input>
          <label htmlFor='end-date'>End date: </label>
          <input
            type='date'
            id='end-date'
            name='endDate'
            value={this.props.educationInfo.endDate}
            onChange={this.handleEducationChange}
          ></input>
        </section>
      </section>
    );
  }
}

export default EducationInformation;
