import ActiveLink from './activeLink'

export default function Navbar(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <ActiveLink prop="/">
            About
          </ActiveLink>
        </li>
        <li className="nav-item">
          <ActiveLink prop='/project'>
              Projects
          </ActiveLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>        
      </ul>
    </div>
  </div>
</nav>
    )
}