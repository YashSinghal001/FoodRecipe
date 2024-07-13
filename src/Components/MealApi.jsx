import React,{useState} from 'react'

export const MealApi = () => {
    const [meal, setMeal] = useState({
      strMeal:"",
      strCategory:"",
      strArea:"",
      strInstructions:"",
      strMealThumb:"",
      strYoutube:"",
      // strIngredient1:""
    })

    function MealAPI(){
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res)=>{ res.json()})
        .then((data)=>{
          setMeal(data)  
        }).catch(err => console.log(err));
    }
  return (
    <div>

{/* <input type="search" /> */}
<button onClick={MealAPI}>Click</button>

<h2>Meal:{meal.strMeal}</h2>
<p>Catergory:{meal.strCategory}</p>
<p>Area:{meal.strArea}</p>
<p>Instructions:{meal.strInstructions}</p>
<img src={meal.strMealThumb} alt="" width={"300px"} height={"300px"} />
<a href={meal.strYoutube}>See How Made</a>










    </div>
  )
}
