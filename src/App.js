import React, {useState } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Footer from './components/Footer'
import InputForm from './components/InputForm'
import DisplayItems from './components/DisplayItems'
import PopularItems from './components/PopularItems'
import {example} from './components/example'

export default function App() {
  const [data, setData] = useState({meals: [example[0]]})  
  const [input, setInput] = useState('')  
  
  const getDish = async() => {
    let recipename = document.getElementById('recipename').value
    setInput(recipename)
    if(recipename != null && recipename.length > 0){
      let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+recipename
      let response = await fetch(url)
      let mealData = await response.json()
      if (mealData.meals != null){
        setData(mealData)
      }
      else if (mealData.meals==null) {
        let msg = 'No Recipe found with name: "' + recipename + '"'
        setData({meals: [], message: msg})
      }
    }
  }

  const getPopularDish = async(recipename) => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+recipename
    let response = await fetch(url)
    let mealData = await response.json()
    setData(mealData)
    setInput(recipename)
  }

  const goHome = () => {
    setData({meals: [example[0]]})
    setInput('')
  }

  return(
    <Container>
      <InputForm getDish={getDish} />
      {(data.meals==null || data.meals.length<4) &&
        <PopularItems getPopularDish={getPopularDish} />
      }
      <div style={{marginBottom: 70}}>
        <DisplayItems items={data} input={input} goHome={goHome} />
      </div>
      <Footer/>
    </Container>
  )
}
