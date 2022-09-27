import React from 'react';
import CVEducationSection from './CVEducationSection';

const CVEducationList = (props) => {
  const itemArray = props.educationInfo;
  const educationItems = itemArray.map((educationItem) => (
    <CVEducationSection key={educationItem.id} educationItem={educationItem} />
  ));
  return (
    <ul className='cv-education-list'>
      {educationItems.length ? educationItems : ''}
    </ul>
  );
};

export default CVEducationList;
