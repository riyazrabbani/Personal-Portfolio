import '../styles/Header.css';

export default function Header() {
    
  return (
    <>
    <div class = "App">
    <body>
        <section>
        <nav className="scrolled navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">Riyaz Rabbani</a>
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

        <section>
          
        </section>
    </body>
    </div>
    </>
  );
}
