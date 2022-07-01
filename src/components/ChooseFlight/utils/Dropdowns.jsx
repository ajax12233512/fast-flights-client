import React from 'react'
import { useState } from 'react'

function Dropdowns(props) {
  
  const [toggle, setToggle] = useState(false);
  


  const handleToggleItems = (e) => {
    setToggle(!toggle); 
  }

  const handleOffClick = (e) => {
    setToggle(!toggle);
  }
  
  return (
    <div className={`cf-filters-${props.ctnClass} filter-item`} 
        onMouseOver={handleToggleItems} 
        onMouseOut={handleOffClick}>
        <h3>{props.title}</h3>
        <ul style={toggle ? {display: 'block'} : {display: 'none'}}>
            {/* {toggle ? props.children.map(item => item) : null} */}
            {props.children.map(item => item)}
        </ul>
    </div>
  )
}

export default Dropdowns