import { useState } from 'react'

import { BrowserRouter as Router } from "react-router-dom"

import './App.css'


console.log( "Some Default Environment Keys: " , import.meta.env )




function App() {

  const var10_1 = import.meta.env.VITE_10_1_VAR
  // console.log("One of Our Environment Variables: ", import.meta.env.VITE_10_1_VAR)
  console.log("One of Our Environment Variables: ", var10_1)


  return (
    <>
      <Router>

        <h1>ScreenViews</h1>

        <h2>-TEST-{ var10_1 }</h2>

      </Router>
    </>
  )
}

export default App
