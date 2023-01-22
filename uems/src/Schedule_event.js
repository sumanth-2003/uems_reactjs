import React from 'react'
import Footer from './Footer'
import Headers from './Header'
const schedule_event = () => {
  return (
    <div>
             <div>
<Headers/>
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="OnGoing-tab" data-bs-toggle="tab" data-bs-target="#ex1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Step-1</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="UpComing-tab" data-bs-toggle="tab" data-bs-target="#ex2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Step-2</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Past-tab" data-bs-toggle="tab" data-bs-target="#ex3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Step-3</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="Past-tab" data-bs-toggle="tab" data-bs-target="#ex4" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Step-4</button>
            </li>
          </ul>
          <div className="collapse show container" id="ex1">
            <h3>EVENT DETAILS</h3>
            <label htmlFor="name" className="form-label">Event name</label>
            <input type="text" id="name" className="form-control" />
            <label htmlFor="EventType" className="form-label">Event Type</label>
            <select id="EventType" className="form-select">
              <option selected>...</option>
              <option>Dance</option>
              <option>Coding</option>
              <option>Drawing</option>
              <option>Speech</option>
            </select>
            <label htmlFor="name" className="form-label">Event description</label>
            <input type="text" id="name" className="form-control" />
            <div className="form-floating mt-3">
              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button type="button" className="btn btn-primary mt-3">next</button>
          </div>
          <div className="collapse container" id="ex2">
            <h3>SLOT DETAILS</h3>
            <label htmlFor="birthday">Date:</label>
            <input type="date" id="birthday" name="birthday" /><br />
            <div className="mt-3">
              <label htmlFor="appt">time:</label>
              <input type="time" id="appt" name="appt" />
            </div>
            <label htmlFor="EventType" className="form-label mt-3">Venue</label>
            <select id="EventType" className="form-select">
              <option selected>...</option>
              <option>Auditorium</option>
              <option>ground</option>
              <option>mini-auditorium</option>
              <option>canteen</option>
            </select>
            <div className="mt-3">
              <label htmlFor="name" className="form-label">Estimated Atendes</label>
              <input type="number" id="name" defaultValue={0} /><br />
            </div>
            <button type="button" className="btn btn-primary mt-3">Previous</button>
            <button type="button" className="btn btn-primary mt-3 ms-5">Next</button>
          </div>
          <div className="collapse container" id="ex3">
            <h3>REFRESHMENT'S</h3>
            <label htmlFor="name" className="form-label">item-1</label>
            <input type="number" id="name" defaultValue={0} /><br />
            <label htmlFor="name" className="form-label">item-2</label>
            <input type="number" id="name" defaultValue={0} /><br />
            <label htmlFor="name" className="form-label">item-3</label>
            <input type="number" id="name" defaultValue={0} /><br />
            <button type="button" className="btn btn-primary mt-3">Previous</button>
            <button type="button" className="btn btn-primary mt-3 ms-5">Next</button>
          </div>
          <div className="collapse container" id="ex4">
            <h3>PREVIEW</h3>
            <div className="d-flex justify-content-between">
              <div className="container border" style={{height: '7cm', maxWidth: '33%'}}>
                <h3>EVENT DETAILS</h3>
              </div>
              <div className="container border" style={{height: '7cm', maxWidth: '33%'}}>
                <h3>SLOT DETAILS</h3>
              </div>
              <div className="container border" style={{height: '7cm', maxWidth: '33%'}}>
                <h3>REFRESHMENT'S</h3>
              </div>
            </div>
            <button type="button" className="btn btn-primary mt-3">Previous</button>
            <button type="button" className="btn btn-primary mt-3 ms-5">Request</button> 
          </div>
        </div>
<Footer/>
</div>
    </div>
  )
}

export default schedule_event