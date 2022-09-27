import React from 'react';
import CVProfessionalSection from './CVProfessionalSection';

const CVProfessionalList = (props) => {
  const itemArray = props.professionalInfo;
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
};

export default CVProfessionalList;
