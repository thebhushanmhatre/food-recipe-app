import React from 'react'

export default function DisplayItems(props){
  const itemList = props.items.meals.map(item => {
    return (<li>{item.strMeal}</li>)
  })
  return (
    <div>
      <ul>
        {itemList}
      </ul>
    </div>
  )
}