import React, {useState } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Footer from './components/Footer'
import InputForm from './components/InputForm'
import DisplayItems from './components/DisplayItems'
import PopularItems from './components/PopularItems'

const example = {
  dateModified: null,
  idMeal: "52865",
  strArea: "Indian",
  strCategory: "Vegetarian",
  strDrinkAlternate: null,
  strIngredient1: "Sunflower Oil",
  strIngredient2: "Paneer",
  strIngredient3: "Ginger",
  strIngredient4: "Cumin",
  strIngredient5: "Turmeric",
  strIngredient6: "Coriander",
  strIngredient7: "Green Chilli",
  strIngredient8: "Tomato",
  strIngredient9: "Peas",
  strIngredient10: "Garam Masala",
  strIngredient11: "Coriander",
  strIngredient12: "Naan Bread",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strInstructions: "Heat the oil in a frying pan over high heat until it’s shimmering hot. Add the paneer, then turn the heat down a little. Fry until it starts to brown at the edges, then turn it over and brown on each side – the paneer will brown faster than you think, so don’t walk away. Remove the paneer from the pan and drain on kitchen paper. Put the ginger, cumin, turmeric, ground coriander and chilli in the pan, and fry everything for 1 min. Add the tomatoes, mashing them with the back of a spoon and simmer everything for 5 mins until the sauce smells fragrant. Add a splash of water if it’s too thick. Season well. Add the peas and simmer for a further 2 mins, then stir in the paneer and sprinkle over the garam masala. Divide between two bowls, top with coriander leaves and serve with naan bread, roti or rice.",
  strMeal: "Matar Paneer",
  strMealThumb: "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
  strMeasure1: "1 tbls",
  strMeasure2: "225g",
  strMeasure3: "2",
  strMeasure4: "1 tsp ",
  strMeasure5: "1 tsp ",
  strMeasure6: "1 tsp ",
  strMeasure7: "1",
  strMeasure8: "4 large",
  strMeasure9: "150g",
  strMeasure10: "1 tsp ",
  strMeasure11: "Small bunch",
  strMeasure12: "to serve",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "https://www.bbcgoodfood.com/recipes/matar-paneer",
  strTags: "Curry,Vegetarian",
  strYoutube: "https://www.youtube.com/watch?v=wlseYNqwLNs"
}
export default function App() {
  const [data, setData] = useState({meals: [example]})  
  
  const getDish = async() => {
    let receipename = document.getElementById('receipename').value
    if(receipename != null && receipename.length > 0){
      let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+receipename
      let response = await fetch(url)
      let mealData = await response.json()
      if (mealData.meals != null){
        setData(mealData)
      }
      else if (mealData.meals==null) {
        let msg = 'No Dishes found with name: "' + receipename + '"'
        setData({meals: [], message: msg})
      }
    }
  }

  const getPopularDish = async(receipename) => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+receipename
    let response = await fetch(url)
    let mealData = await response.json()
    setData(mealData)
  }

  return(
    <Container>
      <InputForm getDish={getDish} />
      {(data.meals==null || data.meals.length<4) &&
        <PopularItems getPopularDish={getPopularDish} />
      }
      <div style={{marginBottom: 70}}>
        <DisplayItems items={data} />
      </div>
      <Footer/>
    </Container>
  )
}
