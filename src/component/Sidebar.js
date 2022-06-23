import React  from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/products",
            name:"Products"
        },
        {
            path:"/demo",
            name:"DemoScript"
        },
        {
            path:"/customer",
            name:"Customer"
        },
        {
            path:"/sales",
            name:"Sales"
        },
        {
            path:"/demos",
            name:"Demos"
        },
        {
            path:"/setting",
            name:"Settings"
        }
    ]
    return (
        <div className="container">
           <div  className="sidebar">
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
