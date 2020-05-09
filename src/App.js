import React, {useState } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Footer from './components/Footer'
import InputForm from './components/InputForm'
import DisplayItems from './components/DisplayItems'
import PopularItems from './components/PopularItems'

export default function App() {
  const [data, setData] = useState({meals: []})
  
  const getDish = async() => {
    let receipename = document.getElementById('receipename').value
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+receipename
    console.log("Inside getDish", receipename)
    console.log("Inside getDish", url)
    let response = await fetch(url)
    let mealData = await response.json()
    console.log('data', mealData)
    if (mealData.meals != null){
      setData(mealData)
    }
    else if (mealData.meals==null) {
      let msg = 'No Dishes found with name: "'+receipename+'"'
      setData({meals: [], message: msg})
    }
  }

  const getPopularDish = async(receipename) => {
    console.log("Inside getPopularDish", receipename)
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+receipename
    let response = await fetch(url)
    let mealData = await response.json()
    setData(mealData)
  }

  return(
    <Container>
      <InputForm getDish={getDish} />
      <DisplayItems items={data} />
      {(data.meals==null || !data.meals.length>0) &&
        <PopularItems getPopularDish={getPopularDish} />
      }
      <Footer />
    </Container>
  )
}
