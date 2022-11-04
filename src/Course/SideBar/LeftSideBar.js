import React, { useEffect, useState } from 'react';
import ShowLeftSideBar from "./ShowLeftSideBar"



const LeftSidebar = () => {
    const [courses,setCategories] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/allCourse')
            .then(res => res.json())
        
            .then(data =>
            {
                console.log(data)
                setCategories(data)  
            }    )
    },[])
    return (
       <div className="">

    
            

            {
                (courses.length>0) &&   courses.map(course => <ShowLeftSideBar
                    key={course._id}
                    course={course}
                    ></ShowLeftSideBar>)
    }
 
       </div>


            
    );
};

export default LeftSidebar;