import React from 'react'

const footer = () => {
  return (
    <div>
                <section id="footer">
          <section id="banner">
            <div className="container-fluid" id="banner-container">
              <div className="row" id="banner-row">
                <div className="col-md-4" id="footer-col1">
                  <h3>My Website</h3>
                  <p>
                    At XYZ we believe that customers should always get
                    easy-to-use, best in the kind and fast services.xyz has
                    achieved standards which helps customer to achieve satisfaction
                    and realize value for their hard earned money.
                  </p>
                </div>
                <div className="col-md-4" id="footer-col2">
                  <h3>Contact Us</h3>
                  <p>Call Us- 1800-121-6532</p>
                  <p>Email Us- support@xyz.com</p>
                </div>
                <ul className="nav col-md-4">
                  <li className="px-1" /><a target="_blank" rel="noreferrer" href="#"><i className="fab fa-2x  fa-linkedin" /></a>&nbsp;
                  <li> <a target="_blank" rel="noreferrer" href="#"><i className="fab fa-2x fa-github" /></a></li>&nbsp;
                  <li><a target="_blank" rel="noreferrer" href="#"><i className="fab fa-2x fa-instagram" /></a></li>            
                </ul>
              </div>
            </div>
          </section>
        </section>
        <style dangerouslySetInnerHTML={{__html: "\n        #banner-container{\n    background-color: #0a193d;\n    color: white !important;\n    padding-top: 80px;\n    padding-bottom: 80px;\n      \n}\n#banner-row img{\n    max-width: 70%;\n    height: auto;\n    display: block;\n    padding-left: 30px;\n}\n#banner-row h3, p{\n    padding-left: 20px;\n    padding-top: 20px;\n    text-align: center;\n}\n.mb-3{\n  padding-top: 10px;\n}\n " }} />
    </div>
  )
}

export default footer