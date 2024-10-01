import {Link, NavLink} from 'react-router-dom'

const NavBarApp = ()=>{

    return
    <nav classname="navbar navbar-expand-lg bg-dark navbar-dark">
    <div classname="container-fluid">
      <link classname="navbar-brand" to="/">RollingGifs</link>
      <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span classname="navbar-toggler-icon"></span>
      </button>
      <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div classname="navbar-nav">
          <NavLink classname="nav-link" to="/">Trending Gifs</NavLink>
          <NavLink classname="nav-link" to="/Search">Search Gifs</NavLink>
        </div>
      </div>
    </div>
  </nav>

}

export default NavBarApp