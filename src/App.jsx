import './App.css'
import { MEalInfo } from './Components/MEalInfo'
// import { MEalCard } from './Components/MEalCard'
// import { MealApi } from './Components/MealApi'
import { RecipieApi } from './Components/RecipieApi'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not



  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#111111cc';
   
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
 
    }
  }

  return (
    <>
   {/* <MealApi/> */}
   
   {/* <MEalCard/> */}
   <Routes>
    <Route path='/' element={<RecipieApi mode={mode} toggleMode={toggleMode}/>}/>
    <Route path='/:mealid' element={<MEalInfo mode={mode} toggleMode={toggleMode} />}/>
   </Routes>
 

    </>
  )
}

export default App
