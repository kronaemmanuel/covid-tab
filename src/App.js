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
    <div className="wrapper">
      <div className="title">
        <h1>2019-nCoV</h1>
        <h3>Wuhan Coronavirus</h3>
      </div>
      <div className="contagions">
        <div className="box">
          <h3>Contagions</h3>
        </div>
        <div className="gallery">
          <div>
            <img src={air_transmission} alt="Air Transmission by Cough or Sneeze" />
            <p>Air Transmission by Cough or Sneeze</p>
          </div>
          <div>
            <img src={human_contact} alt="Human Contacts" />
            <p>Human Contacts</p>
          </div>
          <div>
            <img src={contaminated_objects} alt="Contaminated Object" />
            <p>Contaminated Object</p>
          </div>
        </div>
      </div>
      <div className="symptoms">
        <h3>Symptoms</h3>
      </div>
      <div className="symptoms-img">
        <img src={symptoms} alt="Symptoms" />
      </div>
      <div className="chart area">
        <Main />
      </div>
      <div className="prevent">
        <h3>What can I do?</h3>
        <div className="gallery">
          <div>
            <img src={wear_mask} alt="Wear Mask" />
            <p>Wear Masks</p>
          </div>
          <div>
            <img src={wash_hands} alt="Wash your Hand" />
            <p>Wash your Hands</p>
          </div>
          <div>
            <img src={nose_rag} alt="Use Nose Rag" />
            <p>Use Nose Rag</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
