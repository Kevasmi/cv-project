import React from 'react';
import CVEducationSection from './CVEducationSection';

class CVEducationList extends React.Component {
  render() {
    const itemArray = this.props.educationInfo;
    const educationItems = itemArray.map((educationItem) => (
      <CVEducationSection
        key={educationItem.id}
        educationItem={educationItem}
      />
    ));
    return <ul>{educationItems}</ul>;
  }
}

export default CVEducationList;
