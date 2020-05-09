import React, {useState } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Footer from './components/Footer'
import InputForm from './components/InputForm'
import DisplayItems from './components/DisplayItems'


export default function App() {
  const [data, setData] = useState({meals: []})

  const getDish = async() => {
    let receipename = document.getElementById('receipename').value
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+receipename
    let response = await fetch(url)
    let mealData = await response.json()
    console.log('data', mealData)
    setData(mealData)
  }

  return(
    <Container>
      <InputForm getDish={getDish} />
      <DisplayItems items={data} />
      <Footer />
    </Container>
  )
}
