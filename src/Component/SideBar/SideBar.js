import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const SideBar = () => {
     const [category, setCategory] = useState();
     useEffect(() => {
          fetch('http://localhost:5000/course-categories')
               .then(res => res.json())
               .then(data => setCategory(data))
     },[])
     return (
          <div>
               
          </div>
     );
};

export default SideBar;