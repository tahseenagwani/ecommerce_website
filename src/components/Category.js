import React from 'react'

const Category = (props) => {
  return (

  <div key={props.id} onClick={()=>props.onCategoryClick(props.id)} > hello{props.title}</div>
  )
}

export default Category
