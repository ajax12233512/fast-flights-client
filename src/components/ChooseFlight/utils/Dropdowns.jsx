import React from 'react'

function dropdowns(props) {
  return (
    <div className={`cf-filters-${props.ctnClass} filter-item`}>
        <h3>{props.title}</h3>
        <ul>
            {props.children.map(item => item)}
        </ul>
    </div>
  )
}

export default dropdowns