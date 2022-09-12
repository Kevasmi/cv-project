import React from 'react';
import ProfessionalInformation from './ProfessionalInformation';

class ProfessionalList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddProfessionalSection =
      this.handleAddProfessionalSection.bind(this);
  }

  handleAddProfessionalSection() {
    this.props.onAdd();
  }

  render() {
    const itemArray = this.props.professionalInfo;
    const professionalItems = itemArray.map((professionalItem) => (
      <ProfessionalInformation
        key={professionalItem.id}
        id={professionalItem.id}
        professionalItem={professionalItem}
        onChange={this.props.onChange}
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
              onClick={this.handleAddProfessionalSection}
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
  }
}

export default ProfessionalList;
