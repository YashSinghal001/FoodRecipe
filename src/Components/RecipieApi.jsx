import React, { useState } from 'react';
import { MEalCard } from './MEalCard'; // Corrected import statement

export const RecipieApi = (props) => {
    const [meal, setMeal] = useState();
    const [search, setSearch] = useState();

    // To Enter Something in input field
    const chngeinput = (event) => {
        setSearch(event.target.value); 
    }

    const MealAPI = async (event) => {
        event.preventDefault(); // Prevent form submission
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const data = await res.json();
        //json data is come meal arrays
        console.log("Meals:",data.meal);
        setMeal(data.meals);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg"  style={{backgroundColor:props && props.mode=== 'dark'? '#111111cc':'#dee2e6',color:props &&  props.mode=== 'dark'? 'white':'black'}}>
                <div className="container-fluid">
                    <a className={`navbar-brand  fs-4 fw-semibold" href="#" text-${props.mode=== 'light'? 'dark':'light'}`}><img src="https://static.vecteezy.com/system/resources/previews/024/508/554/original/hand-drawn-chef-cooking-in-the-kitchen-flat-style-illustration-for-business-ideas-png.png"  width={"100px"} alt=""  /> Food Receipe Website</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars" style={{color: "#ffffff"}}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex mx-auto me-5" role="search" onSubmit={MealAPI}>
                            <input className="form-control me-2 " type="search" aria-label="Search" placeholder='Enter Dishes For Recipes' onChange={chngeinput} />
                            <button className={`btn btn-primary colr1 text-${props.mode=== 'light'? 'dark':'light'}`} type="submit"  >Search</button>
                        </form>

                        <div className={`form-check  form-switch text-${props.mode=== 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
                    </div>
                </div>
            </nav>

            {/* <div className="container mt-5 pt-5 ">
            <div className="row">
           <div className="col">
          <div className="bder">
            <h1 className='text-center fs-4 fw-bold'>Food Receipe Website</h1>
          <div className={`form-check  form-switch text-${props.mode=== 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label mx-4" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
             <form className="d-flex mx-auto " role="search" onSubmit={MealAPI} style={{margin:"auto !important"}}>
                            <input className="form-control me-2 " type="search" aria-label="Search" placeholder='Enter Dishes For Recipes' onChange={chngeinput} />
                            <button className={`btn btn-primary colr1 text-${props.mode=== 'light'? 'dark':'light'}`} type="submit"  >Search</button>
                            
                        </form>

                        </div>
           </div>

            </div>


            </div> */}

            {/* Meal Card */}
            <div>
                <MEalCard details={meal}  /> 
            </div>
        </div>
    );
}