import React from 'react'

import Main from './components/Main'

import './App.css'
import air_transmission from './static/images/air_transmission.png'
import human_contact from './static/images/human_contact.png'
import contaminated_objects from './static/images/contaminated_objects.png'
import symptoms from './static/images/symptoms.png'
import wear_mask from './static/images/wear_mask.png'
import wash_hands from './static/images/wash_hands.png'
import nose_rag from './static/images/nose_rag.png'

function App() {
  return (
    <div className="container">
      <div className="title area">
        <h1>2019-nCoV</h1>
        <h2>Wuhan Coronavirus</h2>
      </div>
      <div className="charts area">Charts</div>
      <div className="contagion area">
        <div className="heading">
          <h4>Contagion</h4>
        </div>
        <div className="gallery">
          <div className="galleryItem">
            <img src={air_transmission} />
            <p>Air Transmission</p>
          </div>
          <div className="galleryItem">
            <img src={human_contact} />
            <p>Human Contact</p>
          </div>
          <div className="galleryItem">
            <img src={contaminated_objects} />
            <p>Contaminated Objects</p>
          </div>
        </div>
      </div>
      <div className="symptoms area">
          <h4>Symptoms</h4>
          <img src={symptoms}/>
      </div>
      <div className="prevention area">Prevention</div>
    </div>
  )
}

export default App
