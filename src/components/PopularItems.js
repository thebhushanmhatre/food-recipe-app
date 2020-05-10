import React from 'react'
import {Button, Alert} from 'reactstrap'

export default function PopularItems(props){
  let popular_items = ['Chocolate', 'Soup', 'Cake', 'Fish', 'Chicken'].map(item=>{
    return <Button type="submit" color="success" className="m-1"
      onClick={i => props.getPopularDish(item)}> {item} </Button>
  })

  return(
    <Alert color="success" style={{marginTop: 20}} >Some Popular Recipes : {popular_items}</Alert>
  )
}