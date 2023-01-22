import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Events from './Events';
import Approvals from './Approvals';
import Report from './Report';
import Schedule_event from './Schedule_event';
import Login from './Login';
const App = () => {
  return (
<div>
  <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/events' element={<Events/>}/>
      <Route path='/approvals' element={<Approvals/>}/>
      <Route path='/report' element={<Report/>}/>
      <Route path='/schedule_event' element={<Schedule_event/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
  </Router>
</div>
  )
}

export default App













