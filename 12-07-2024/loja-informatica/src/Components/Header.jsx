const Header = () => {

    return(
<nav className="navbar navbar-expand-lg bg-info ">
  <div className="container-fluid container">
    <a className="navbar-brand text-white" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sobre</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contato</a>
        </li>
        <li className="nav-item">
        </li>
      </ul>
  </div>
  </div>
</nav>
    )
}

export default Header;