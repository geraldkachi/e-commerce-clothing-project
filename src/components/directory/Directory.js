import React from "react";
import "./directory.css";
import MenuItem from "../meunItem/MenuItem";

class Directory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: 'jackets'
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: 'sneakers'
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: 'womens'
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
          size: "large",
          id: 5,
          linkUrl: 'mens'
        },
      ],
    };
  }

  render() {

    const { sections } = this.state;

    const DirectoryArray = sections.length ? (
      sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))
    ) : (
      <div>No Items...</div>
    );
    return <div className="directory-menu">{DirectoryArray}</div>;
  }
}

export default Directory;




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

