import React, {useState} from 'react'
import { Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default function DisplayItems(props){
  var itemList = props.items.meals.map(i => {
    return <RenderItem item={i} />
  })

  return(
    <div>
      <div>{itemList}</div>
      <p style={{fontSize:20}}>{props.items.message}</p>
    </div>
  )
}

// Single Element
function RenderItem({item}){
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const getElements = (item) => {
    let nums = Array.from(Array(20).keys())
    let elements = []
    nums.map(i => {
      let element = item['strIngredient'+ (i+1)]
      let quantity = item['strMeasure'+ (i+1)]
      if(element)
        elements.push(element + " -> "+ quantity)
    })
    return [...elements.filter(x=>x)].map(p=><li>{p}.</li>)
  }

  const getSteps = (item) => {
    let steps = item.strInstructions.split('.')
    return [...steps.filter(x=>x)].map(p=><li>{p}.</li>)
  }

  return (
    <Card style={{margin: 10}}>
      <CardBody>
        <CardTitle>{item.strMeal}</CardTitle>
        <CardSubtitle>{item.strTags}</CardSubtitle>
      <Button color="primary" onClick={toggle} style={{ marginTop: 10, marginBottom: 10}}>Receipe</Button>
        <Collapse isOpen={isOpen}>
          <CardText>Ingredients required: <ul>{getElements(item)}</ul></CardText>
          <CardText>Instructions: <ol>{getSteps(item)}</ol></CardText>
        </Collapse>
      </CardBody>
    </Card>
  )

}