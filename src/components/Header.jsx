import '../styles/Header.css';
import profile from '../assets/profile.jpeg'
import gmu from '../assets/gmu.png'
import jchs from '../assets/jchs.png'
import zeta from '../assets/zeta.jpeg'
import simplynotes from '../assets/notes.png'
import frugalforesight from '../assets/frugalforesight.png'


export default function Header() {

  return (
    <>

      <div className="App">
        <section>
          <nav className="scrolled navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container-fluid">
              <a href="#" className="navbar-brand">💎</a>
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
            <a href="#skills" class="codepen-button"><span>My Skills</span></a>
            <div className="container">
              <h1 className="neonText pulsate">
                🖥️  🌃  🔭  ☕
              </h1>
            </div>
          </div>

          <div className="image-wrapper">
            <div className="card3">
              <div class="card4">
                <img className="profile-img" src={profile} alt="Me" />
              </div>
            </div>
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
                <div class="loader">
                  <span></span>
                </div>
                <p className="green-text">At least 13 skills detected.</p>
                <p className='white-text'>Tech Stack</p>
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
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                    <p className="skill-name">MongoDB</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
                    <p className="skill-name">NodeJS</p>
                  </div>

                  <div class="skill">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                    <p className="skill-name">Git</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience">
          <div class="card5">
            <div class="card4">
              <div class="left-column">
                <p className = "job-header-text">Education</p>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <img className = "job-text-img" src={gmu} alt="GMU" />
                    <p className="job-text">
                      George Mason University GPA: 3.88
                    </p>
                  </div>
                </div>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <p className="job-text">
                  <img className = "job-text-img" src={jchs} alt="John Champe HS" />

                      John Champe High School GPA: 4.41
                    </p>
                  </div>
                </div>
              </div>


              <div class="middle-column">
              <p className = "job-header-text">Work Experience</p>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <p className="job-text">
                  <img className = "job-text-img" src={zeta} alt="Zeta Associates" />
                      SWE Intern @ Zeta Associates
                    </p>
                  </div>
                </div>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <p className="job-text">
                  <img className = "job-text-img" src= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
                      Java Teaching Assistant
                    </p>
                  </div>
                </div>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <p className="job-text">
                  <img className = "job-text-img" src= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                      Python Teaching Assistant
                    </p>
                  </div>
                </div>
              </div>

              <div class="right-column">
              <p className = "job-header-text">Projects</p>

                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <img className = "job-text-img" src={simplynotes} alt="Simply Notes" />
                  <p className="job-text">
                      Simply Notes - Transcription Notes Generator 
                    </p>
                  </div>
                </div>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <img className = "job-text-img" src={frugalforesight} alt="Frugal Foresight" />

                  <p className="job-text">
                      Frugal Foresight - Financial Planning / Goal Tracking Application
                    </p>
                  </div>
                </div>
                <div class="mini-card-color">
                  <div class="mini-card-gray">
                  <img className = "job-text-img" src= "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
                  <p className="job-text">
                      AWS Serverless Website - S3, DynamoDB, Lambda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          test
        </section>

      </div>
    </>
  );
}
