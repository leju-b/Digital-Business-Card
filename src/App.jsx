import './App.css'

function App() {

  return (
    <>
    <section>
      <div className="image-profile">
        <img src="./images/Rectangle 90.svg" alt="" className='image-profile'/>
      </div>
      <div className="details-profile">
        <div className="name-details-profile">
          <h3 className="name-profile">Laura Smith</h3>
          <p className="role-profile">Frontend Developer</p>
          <p className="site-link-profile">laurasmith.website</p>
        </div>
        <div className="social-btns">
          <div className="btn">
            <img src="./images/Mail.svg" alt="" className="btn-icon" />
            <p className="btn-name">Email</p>
          </div>
          <div className="btn btn-2">
            <img src="./images/Vector.svg" alt="" className="btn-icon"/>
            <p className="btn-name name-2">LinkedIn</p>
          </div>
        </div>
        <div className="summary-profile">
          <div className="summary-profile">
            <h4 className="summary-profile-headtext">About</h4>
            <p className="summay-profile-subtext">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          </div>
          <div className="summary-profile">
            <h4 className="summary-profile-headtext">Interests</h4>
            <p className="summay-profile-subtext">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <img src="./images/Facebook Icon.svg" alt="" className='social-icon'/>
        <img src="./images/Instagram Icon.svg" alt="" className='social-icon'/>
        <img src="./images/GitHub Icon.svg" alt="" className='social-icon'/>
        <img src="./images/Twitter Icon.svg" alt="" className='social-icon'/>
      </div>
    </section>
    </>
  )
}

export default App



