import React from 'react'
import logo from './images/cat_queen.jpg'
import Footer from './Footer'
import Headers from './Header'
import EventCards from './EventCards'
const approvals = () => {
  return (
    <div>
         <div>
<Headers/>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Pending</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Accepted</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Declined</button>
            </li>
          </ul>
          <div className="collapse show active" id="ex1">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-1</h5>
                <img src={logo} alt="cat" height={100} width={100} style={{float: 'left'}} />
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4">Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4">Decline</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-2</h5>
                <img src={logo} alt="cat" height={100} width={100} style={{float: 'left'}} />
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4">Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4">Decline</a>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Event-3</h5>
                <img src={logo} alt="cat" height={100} width={100} style={{float: 'left'}} />
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-outline-success ms-4">Accept</a>
                <a href="#" className="btn btn-outline-danger ms-4">Decline</a>
              </div>
            </div>        
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

export default approvals
