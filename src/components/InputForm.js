import React from 'react'
import { Input, Button, Row, Col } from 'reactstrap'

export default function InputForm(props){
  const onKeyPress = (e) => {
    if(e.which === 13) {
      props.getDish()
    }
  }
  return (
    <Row className="bg-dark text-light" style={{padding: 20, alignItems:'center'}}>
      <Col sm='12' md='3' lg='2' className='mr-1 mb-2'>
        <p style={{fontSize:20}}>Receipe App</p>
      </Col>
      <Col sm='12' md='6' lg='7' className='mr-1 mb-2'>
        <Input autoFocus={true} type="name" name="receipename" id="receipename"
         placeholder="Search your Receipe . . ." onKeyPress={onKeyPress} />
      </Col>
      <Col sm='12' md='2' lg='1' className='mr-1 mb-2'>
        <Button type="submit" color="primary" onClick={props.getDish}>Submit</Button>
      </Col>
    </Row>
  )
}