import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MEalInfo = (props) => {
    // useParam Hook use to get url parameter
    const { mealid } = useParams()
    console.log(mealid);

    const [info, setInfo] = useState(null)
    
    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const parseget = await get.json();
        console.log(parseget.meals)
        setInfo(parseget.meals[0])
    }

    useEffect(() => {
        if (mealid) {
            getInfo();
        }
    }, [mealid])
    
    return (
        <div >
            {
                !info ? "Data Not Found" :
                <div className='container ' style={{backgroundColor: props.mode=== 'dark'? '#404040':'#ade8f4',color:  props.mode=== 'dark'? 'white':'black'}}>
                    <div className="row cntr ">
                   <div className="col col-sm-12 col-md-6 col-xl-4">
                   <img src={info.strMealThumb} alt={info.strMeal} width={"400px"} height={"400px"} className='rounded-1 mealdimg' />
                   </div>
                    <div className='col col-sm-12 col-md-6 col-xl-8'>
                        <h1 className='details '>Recipe Detail</h1>
                        <button className='mealbtn '>{info.strMeal}</button>
                        <h2>Instructions</h2>
                        <br />
                        <h5>{info.strInstructions}</h5>
                    </div>
                    </div>
                </div>
            }
        </div>
    )
}