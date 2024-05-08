import '../styles/Header.css';
import profile from '../assets/profile.jpeg'

export default function Header() {
    
  return (
    <>
    <div class = "App">
    <body>
        <section>
        <nav className="scrolled navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">:)</a>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="basic-navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>            
            <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
              <div className="me-auto navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#experience">Experience</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projects">Projects</a>
                  </li>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <a href= "https://www.linkedin.com/in/riyaz-rabbani-524997b0/" target="_blank" className="btn btn-primary me-2">
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
                <a href="https://github.com/riyazrabbani" target="_blank" className="btn btn-dark">
                  <i className="bi bi-github"></i> GitHub
                </a>
              </div>
            </div>
        </div>
        </nav>
      </section>

      <section id = "about">
        <div class = "text-wrapper">
          <p className = "about-me-font">Hi, my name is</p>
          <p className = "name">Riyaz Rabbani 🚀</p>
          <p className = "regular-font">I am a Computer science student at George Mason University. <br></br>
          With a strong focus on Full-Stack development and Machine Learning/AI,
          Here is a glimpse into who I am: </p>
          <div class="container">
            <h1 class="neonText pulsate">
              Thanks for stopping by
            </h1>
        </div>
        </div>
        <div className = "image-wrapper">
          <img className = "profile-img" src={profile} alt="Me" />
        </div>
      </section>

      <section id = "skills">
      <p className = "about-me-font">plottin</p>
      </section>

      <section id = "experience">
      test
      </section>
      
      <section id = "projects">
      test
      </section>

    </body>
    </div>
    </>
  );
}
