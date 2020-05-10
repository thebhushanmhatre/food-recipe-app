import React, {useState} from 'react'
import { Card, Collapse, CardText, CardBody, CardTitle, CardSubtitle, Button,
          Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function DisplayItems(props){
  var itemList = props.items.meals.map(i => {
    return <RenderItem item={i} />
  })

  return(
    <div>
      {(props.input.length > 0) && 
        <Breadcrumb className='m-3'>
          <BreadcrumbItem><a href="/" onClick={props.goHome}>Home</a></BreadcrumbItem>
          <BreadcrumbItem active>{props.input}</BreadcrumbItem>
        </Breadcrumb>
      }
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
    nums.forEach(i => {
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
        <CardTitle><h3>{item.strMeal}</h3></CardTitle>
        {(item.strTags) &&
          <CardSubtitle>{item.strTags.split(',').join(', ')}</CardSubtitle>
        }
      <Button color="primary" onClick={toggle} style={{ marginTop: 10, marginBottom: 10}}>
      <i className="fa fa-align-justify fa-lg" aria-hidden="true"> See Recipe</i></Button>
      <a href={item.strYoutube} target="_blank" rel="noopener noreferrer">
        <Button color="danger" onClick={toggle} style={{ margin: 10}}>
          <i className="fa fa-youtube-play fa-lg" aria-hidden="true"> Watch</i>
        </Button>
      </a>
        <Collapse isOpen={isOpen}>
          <CardText><u>Ingredients required:</u><ul>{getElements(item)}</ul></CardText>
          <CardText><u>Instructions:</u> <ol>{getSteps(item)}</ol></CardText>
        </Collapse>
      </CardBody>
    </Card>
  )
}