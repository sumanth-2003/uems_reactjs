import React from 'react'
import Footer from './Footer'
import Headers from './Header'
const login = () => {
  return (
    <div>
      <div>
<Headers/>
        <div className="container mb-4 mt-4" style={{backgroundColor: 'rgb(217, 119, 119)', height: 'fit-content', width: 'fit-content'}}>
          <label htmlFor="username">username</label><br />
          <input type="text" defaultValue id="username" size={50} /><br />
          <label htmlFor="pass"> password</label><br />
          <input type="password" id="pass" size={50} /><br />
          <button type="button" className="btn btn-primary w-50 mt-2" style={{marginLeft: '5em'}}>Login</button><br />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me</label>
        </div>
<Footer/>
      </div>

    </div>
  )
}

export default login