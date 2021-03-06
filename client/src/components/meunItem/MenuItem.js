import React from 'react'
import '../meunItem/menuitem.css'
import { withRouter } from "react-router-dom"

const MenuItem = ({title, size, imageUrl, history, match, linkUrl} ) => {
     
    return (
        <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
                <div className="content">
                    {/* <h1 className="title">{title.toUpperCase()}</h1> */}
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)



// return (
//     <MenuItemContainer className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
//         <BackgroundImageContainer className="background-image" style={{backgroundImage:`url(${imageUrl})`}}>
//             <ContentContainer className="content">
//                 <h1 className="title">{title.toUpperCase}</h1>
//                 <span className="subtitle">SHOP NOW</span>
//             </ContentContainer>
//         </BackgroundImageContainer>
//     </MenuItemContainer>
// )