import React from 'react'
import Footer from './Footer'
import Headers from './Header'
const login = () => {
  return (
    <div>
      <div>
<Headers/>
        {/* <div className="container mb-4 mt-4" style={{backgroundColor: 'rgb(217, 119, 119)', height: 'fit-content', width: 'fit-content'}}>
          <label htmlFor="username">username</label><br />
          <input type="text" defaultValue id="username" size={50} /><br />
          <label htmlFor="pass"> password</label><br />
          <input type="password" id="pass" size={50} /><br />
          <button type="button" className="btn btn-primary w-50 mt-2" style={{marginLeft: '5em'}}>Login</button><br />
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">remember me</label>
        </div> */}


<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-5 text-center" style={{backgroundColor:"white",boxShadow:"8px 8px 0px 5px whitesmoke"}}>
            <h3 className="mb-5">Sign in</h3>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="typeEmailX-2"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typeEmailX-2">
                username
              </label>
            </div>
            <div className="form-outline mb-4">
              <input
                type="password"
                id="typePasswordX-2"
                className="form-control form-control-lg"
              />
              <label className="form-label" htmlFor="typePasswordX-2">
                Password
              </label>
            </div>
            {/* Checkbox */}
            <div className="form-check d-flex justify-content-start mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="form1Example3"
              />
              <label className="form-check-label" htmlFor="form1Example3">
                {" "}
                Remember password{" "}
              </label>
            </div>
            <button className="btn btn-primary btn-lg btn-block" type="submit">
              Login
            </button>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer/>
      </div>

    </div>
  )
}

export default login