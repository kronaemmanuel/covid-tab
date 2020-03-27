import React from 'react'

// import Main from './components/Main'

import './App.css'
import air_transmission from './static/images/air_transmission'
import human_contact from './static/images/human_contact'
import contaminated_objects from './static/images/contaminated_objects'

function App() {
  return (
    <div className="wrapper">
      <div className="title area">
        <h1>2019-nCoV</h1>
        <h3>Wuhan Coronavirus</h3>
      </div>
      <div className="contagions area">
        <img src={air_transmission}></img>
        <img src={human_contact}></img>
        <img src={contaminated_objects}></img>
      </div>
      <div className="symptoms area">Symptoms</div>
      <div className="symptoms-img area">symptoms img</div>
      <div className="chart area">Chart</div>
      <div className="prevent area">Prevention</div>
    </div>
  )
}

export default App
