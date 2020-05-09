import React from 'react'

export default function DisplayItems(props){
  var itemList = props.items.meals.map(item => {
    return (<li key={item.idMeal}>{item.strMeal}</li>)
  })
  
  return (
    <div>
      <ul>{itemList}</ul>
      <p style={{fontSize:20}}>{props.items.message}</p>
    </div>
  )
}