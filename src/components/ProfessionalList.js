import React from 'react';
import CompanyInformation from './CompanyInformation';

class ProfessionalList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddProfessionalSection =
      this.handleAddProfessionalSection.bind(this);
    this.state = {};
  }

  handleAddProfessionalSection() {
    this.props.onAdd();
  }

  render() {
    const itemArray = this.props.professionalInfo;
    const professionalItems = itemArray.map((professionalItem) => (
      <CompanyInformation
        key={professionalItem.id}
        id={professionalItem.id}
        professionalItem={professionalItem}
        onChange={this.props.onChange}
      />
    ));

    return (
      <div>
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
        <ul>{professionalItems}</ul>
      </div>
    );
  }
}

export default ProfessionalList;
