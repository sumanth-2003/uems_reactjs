import React from 'react'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Approvals from './components/Approvals';
import Report from './components/Report';
import Schedule_event from './components/Schedule_event';
import Login from './components/Login';
import Error from'./components/Error'
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
      <Route path="*" element={<Error/>}/>
      </Routes>
  </Router>
</div>
  )
}
export default App













