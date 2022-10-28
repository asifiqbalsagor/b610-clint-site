import React from 'react';
import { Link } from 'react-router-dom';

const ShowSideBar = ({category}) => {
     const { id, name, } = category;
     return (
          <div>
               <li><Link>{name}</Link></li>
          </div>
     );
};

export default ShowSideBar;