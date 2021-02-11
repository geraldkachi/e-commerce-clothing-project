import React from "react";
import "./directory.css";
import MenuItem from "../meunItem/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../redux/directory/DirectorySelector";

const Directory = ({ sections }) => {
  

  const DirectoryArray = sections.length ? (
    sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))
  ) : (
    <div>Loading Items...</div>
  );
  return <div className="directory-menu">{DirectoryArray}</div>
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

// render() {

//   const { sections } = this.state;

//   const DirectoryArray = sections.length ? (
//     sections.map(({ id, title, imageUrl, size }) => (
//       <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
//     ))
//   ) : (
//     <div>No Items...</div>
//   );
//   return <div className="directory-menu">{DirectoryArray}</div>;
// }
