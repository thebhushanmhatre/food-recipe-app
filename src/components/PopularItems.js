import React from 'react'
import {Button, Alert} from 'reactstrap'

export default function PopularItems(props){
  let popular_items = ['Chicken', 'Soup', 'Cake', 'Lamb'].map(item=>{
    return <> <Button type="submit" color="success" 
      onClick={i => props.getPopularDish(item)}> {item} </Button>{' '}</>
  })

  return(
    <Alert color="success">Some Popular Dishes : {popular_items}</Alert>
  )
}