import React from 'react';

class EducationInformation extends React.Component {
  constructor(props) {
    super(props);
    this.handleEducationChange = this.handleEducationChange.bind(this);
  }

  handleEducationChange(e) {
    this.props.onChange(e, this.props.id);
  }

  render() {
    return (
      <section className='education-info'>
        <label htmlFor='education-name'>University Name </label>
        <input
          type='text'
          id='education-name'
          name='name'
          value={this.props.educationItem.name}
          onChange={this.handleEducationChange}
        ></input>
        <label htmlFor='city'>City </label>
        <input
          type='text'
          id='city'
          name='city'
          value={this.props.educationItem.city}
          onChange={this.handleEducationChange}
        ></input>
        <label htmlFor='degree'>Degree </label>
        <input
          type='text'
          id='degree'
          name='degree'
          value={this.props.educationItem.degree}
          onChange={this.handleEducationChange}
        ></input>
        <section className='dates'>
          <label htmlFor='start-date' className='start-label'>
            Start date{' '}
          </label>
          <input
            type='date'
            id='start-date'
            name='startDate'
            value={this.props.educationItem.startDate}
            onChange={this.handleEducationChange}
          ></input>
          <label htmlFor='end-date' className='end-label'>
            End date{' '}
          </label>
          <input
            type='date'
            id='end-date'
            name='endDate'
            value={this.props.educationItem.endDate}
            onChange={this.handleEducationChange}
          ></input>
        </section>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          value={this.props.educationItem.description}
          onChange={this.handleEducationChange}
        ></textarea>
      </section>
    );
  }
}

export default EducationInformation;
