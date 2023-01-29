import React from 'react'
import Footer from './Footer'
import Headers from './Header'
import EventCards from './EventCards'
const events = () => {
  return (
<div>
<div>
<Headers/>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="OnGoing-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">OnGoing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="UpComing-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">UpComing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Past-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Past</button>
            </li>
          </ul>
          <div className="collapse show" id="ex1">
          <EventCards num="1"/>
          <EventCards num="2"/>
          <EventCards num="3"/>        
          </div>
          <div className="collapse" id="ex2">
          <EventCards num="4"/>
          <EventCards num="5"/>
          <EventCards num="6"/>  
          </div>
          <div className="collapse" id="ex3">
          <EventCards num="7"/>
          <EventCards num="8"/>
          <EventCards num="9"/> 
          </div>
        </div>
<Footer/>
</div>
</div>
  )
}

export default events