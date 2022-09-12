import React from 'react';
import CVProfessionalSection from './CVProfessionalSection';

class CVProfessionalList extends React.Component {
  render() {
    console.log(this.props.professionalInfo);
    const itemArray = this.props.professionalInfo;
    const professionalItems = itemArray.map((professionalItem, i) => (
      <CVProfessionalSection
        key={professionalItem.id}
        professionalItem={professionalItem}
      />
    ));

    return (
      <ul className='cv-professional-list'>
        {professionalItems.length ? professionalItems : ''}
      </ul>
    );
  }
}

export default CVProfessionalList;
