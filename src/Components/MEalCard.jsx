import React from 'react'
import { NavLink } from 'react-router-dom'

export const MEalCard = ({details,props}) => {
    // console.log(details)
  return (
    <div>
<div className="mealcard" >
    {!details?"":
    details.map((element)=>{
        return(
            <div className='card'  style={{backgroundColor:props && props.mode=== 'dark'? '#023047':'white',color:props &&  props.mode=== 'dark'? 'white':'black'}}>
            <img  className="mealimg" src={element.strMealThumb} alt="" />
            <p className='mealname'>{element.strMeal}</p>
            {/* <button className='recipe'> <a href={element.strInstructions}>Recipe</a></button> */}
            {/* <button>Recipe{element.strInstructions}</button> */}
           <NavLink to={`/${element.idMeal}`}>
           <button className='recipe btn1'>Recipe</button>
           </NavLink>
          <div className="youtubesec">
          <p className='watch'>Watch On <a href={element.strYoutube} target='_blank'><i className="fa-brands fa-youtube"  style={{color:" #ff0000",fontSize:"25px"}}></i> </a> </p>
          </div>

                </div>
        )
    })


    }
</div>



    </div>
  )
}
