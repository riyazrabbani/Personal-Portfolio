import '../styles/Header.css';
import profile from '../assets/profile.jpeg'

export default function Header() {

  return (
    <>

      <div className="App">
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
                  <a href="https://www.linkedin.com/in/riyaz-rabbani-524997b0/" target="_blank" className="btn btn-primary me-2">
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

        <section id="about">
          <div className="text-wrapper">
            <p className="about-me-font">Hi, my name is</p>
            <p className="name">Riyaz Rabbani 🚀</p>
            <p className="regular-font">I am a Computer science student at George Mason University. <br></br>
              With a strong focus on Full-Stack development and Machine Learning/AI,
              Here is a glimpse into who I am: </p>
            <div className="container">
              <h1 className="neonText pulsate">
                🖥️🌃🔭☕
              </h1>
            </div>
          </div>
          <div className="image-wrapper">
            <img className="profile-img" src={profile} alt="Me" />
          </div>
        </section>

        <section id="skills">
          <div class="card">
            <div class="card2">
              <div class="container-skills">
                <div class="box-of-star1">
                  <div class="star star-position1"></div>
                  <div class="star star-position2"></div>
                  <div class="star star-position3"></div>
                  <div class="star star-position4"></div>
                  <div class="star star-position5"></div>
                  <div class="star star-position6"></div>
                  <div class="star star-position7"></div>
                </div>
                <div class="box-of-star2">
                  <div class="star star-position1"></div>
                  <div class="star star-position2"></div>
                  <div class="star star-position3"></div>
                  <div class="star star-position4"></div>
                  <div class="star star-position5"></div>
                  <div class="star star-position6"></div>
                  <div class="star star-position7"></div>
                </div>
                <div class="box-of-star3">
                  <div class="star star-position1"></div>
                  <div class="star star-position2"></div>
                  <div class="star star-position3"></div>
                  <div class="star star-position4"></div>
                  <div class="star star-position5"></div>
                  <div class="star star-position6"></div>
                  <div class="star star-position7"></div>
                </div>
                <div class="box-of-star4">
                  <div class="star star-position1"></div>
                  <div class="star star-position2"></div>
                  <div class="star star-position3"></div>
                  <div class="star star-position4"></div>
                  <div class="star star-position5"></div>
                  <div class="star star-position6"></div>
                  <div class="star star-position7"></div>
                </div>
                <div data-js="astro" class="astronaut">
                  <div class="head"></div>
                  <div class="arm arm-left"></div>
                  <div class="arm arm-right"></div>
                  <div class="body">
                    <div class="panel"></div>
                  </div>
                  <div class="leg leg-left"></div>
                  <div class="leg leg-right"></div>
                  <div class="schoolbag"></div>
                </div>
                <div class="skills-row">
                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                    <p className="skill-name">Java</p>
                  </div>
                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                    <p className="skill-name">Python</p>
                  </div>
                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" alt="C" />
                    <p className="skill-name">C</p>
                  </div>
                </div>
                <div class="skills-row">
                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                    <p className="skill-name">React</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                    <p className="skill-name">JavaScript</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
                    <p className="skill-name">HTML</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
                    <p className="skill-name">CSS</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
                    <p className="skill-name">Bootstrap</p>
                  </div>
                </div>

                <div class="skills-row">
                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                    <p className="skill-name">AWS</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
                    <p className="skill-name">SQL</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="MongoDB" />
                    <p className="skill-name">MongoDB</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="NodeJS" />
                    <p className="skill-name">NodeJS</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Git" />
                    <p className="skill-name">Git</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          test
        </section>

        <section id="projects">
          test
        </section>

      </div>
    </>
  );
}
