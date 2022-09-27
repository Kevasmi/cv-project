import React from 'react';
import ProfessionalInformation from './ProfessionalInformation';

const ProfessionalList = (props) => {
  const handleAddProfessionalSection = () => {
    props.onAdd();
  };

  const itemArray = props.professionalInfo;
  const professionalItems = itemArray.map((professionalItem) => (
    <ProfessionalInformation
      key={professionalItem.id}
      id={professionalItem.id}
      professionalItem={professionalItem}
      onChange={props.onChange}
      onRemove={props.onRemove}
    />
  ));

  return (
    <div className='professional-list'>
      <h2 className='form-professional-header'>
        Professional Information{' '}
        <span>
          <button
            type='button'
            className='professional-header-button'
            onClick={handleAddProfessionalSection}
          >
            + Add
          </button>
        </span>
      </h2>
      {professionalItems.length ? (
        <div>{professionalItems}</div>
      ) : (
        <p>No sections added.</p>
      )}
    </div>
  );
};

export default ProfessionalList;
