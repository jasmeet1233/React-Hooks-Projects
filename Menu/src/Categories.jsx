import React from 'react'

const Categories = ({ filterItems, categoryArr }) => {
  return(
      <>
      {
          categoryArr.map((category) => {
            return <button onClick = {() => filterItems(category)}>{category}</button>
          })
      }
      </>
  )
};

export default Categories
