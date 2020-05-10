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
    <Row className="bg-dark text-light"
      style={{paddingTop: 20,  paddingLeft: 5, paddingBottom: 10, alignItems:'center'}}>
      <Col sm='12' md='3' lg='3' className=''>
         <i className="fa fa-cutlery fa-lg" aria-hidden="true"> Receipes App</i>
      </Col>
      <Col sm='12' md='6' lg='7' className=''>
        <Input autoFocus={true} type="name" name="receipename" id="receipename"
           onChange={e => setInput(e.value)} onKeyPress={onKeyPress}
          placeholder="Search your Receipe . . ." value={input} />
      </Col>
      <Col sm='12' md='3' lg='2' className=''>
        <Button type="submit" color="primary" onClick={sendDish}>
          <i className="fa fa-search fa-sm" aria-hidden="true"> Submit</i>
        </Button>
      </Col>
    </Row>
  )
}