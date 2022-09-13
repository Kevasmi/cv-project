import React from 'react';
import EducationInformation from './EducationInformation';

class EducationList extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    this.props.onAdd();
  }

  render() {
    const itemArray = this.props.educationInfo;
    const educationItems = itemArray.map((educationItem) => (
      <EducationInformation
        key={educationItem.id}
        id={educationItem.id}
        educationItem={educationItem}
        onChange={this.props.onChange}
        onRemove={this.props.onRemove}
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
              onClick={this.handleAdd}
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
  }
}

export default EducationList;
