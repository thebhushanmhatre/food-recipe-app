import React, {useState} from 'react'
import { Input, Button, Row, Col } from 'reactstrap'

export default function InputForm(props){
  const [input, setInput] = useState('')
  const onKeyPress = (e) => {
    if(e.which === 13) {
      sendDish()
    }
  }

  const sendDish = () => {
    props.getDish(input)
    setInput('')
  }

  return (
    <Row className="bg-dark text-light text-center"
      style={{paddingTop: 20,  paddingLeft: 5, paddingBottom: 10, alignItems:'center'}}>
      <Col sm='12' md='3' lg='3' className='mb-2'>
         <i className="fa fa-cutlery fa-lg" aria-hidden="true"> Recipes App</i>
      </Col>
      <Col sm='12' md='6' lg='7' className='mb-2'>
        <Input autoFocus={true} type="name" name="recipename" id="recipename"
           onChange={e => setInput(e.value)} onKeyPress={onKeyPress}
          placeholder="Search Recipe . . ." value={input} />
      </Col>
      <Col sm='12' md='3' lg='2' className='mb-2 text-center'>
        <Button type="submit" color="primary" onClick={sendDish}>
          <i className="fa fa-search fa-sm" aria-hidden="true"> Submit</i>
        </Button>
      </Col>
    </Row>
  )
}