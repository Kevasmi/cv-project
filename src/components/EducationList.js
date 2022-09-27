import React from 'react';
import EducationInformation from './EducationInformation';

const EducationList = (props) => {
  const handleAdd = () => {
    props.onAdd();
  };

  const itemArray = props.educationInfo;
  const educationItems = itemArray.map((educationItem) => (
    <EducationInformation
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={props.onChange}
      onRemove={props.onRemove}
    />
  ));
  return (
    <div className='education-list'>
      <h2 className='form-education-header'>
        Education Information{' '}
        <span>
          <button
            type='button'
            className='education-header-button'
            onClick={handleAdd}
          >
            + Add
          </button>
        </span>
      </h2>
      {educationItems.length ? (
        <div>{educationItems}</div>
      ) : (
        <p>No sections added.</p>
      )}
    </div>
  );
};

export default EducationList;
