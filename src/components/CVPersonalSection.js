import React from 'react';
import '../styles/CVPersonalSection.css';

class CVPersonalSection extends React.Component {
  render() {
    return (
      <section className='cv-personal-info'>
        <h1 className='cv-name'>{this.props.personalInfo.name}</h1>
        <header className='cv-header'>
          <ul>
            <li className='cv-phone-number'>
              <span>{this.props.personalInfo.phone}</span>
            </li>
            <li className='cv-email'>
              <span>{this.props.personalInfo.email}</span>
            </li>
            <li className='cv-address'>
              <span>{this.props.personalInfo.address}</span>
            </li>
            <li></li>
          </ul>
        </header>
      </section>
    );
  }
}

export default CVPersonalSection;
