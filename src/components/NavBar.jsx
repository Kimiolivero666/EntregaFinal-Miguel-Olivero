import Categorias from "./Categorias";
import DropdownItem from "./Dropdown-item";
import NavLink from "./Nav-link";
import Brand from "./brand";
import MenuButton from "./menuButton";


const NavBar = () => {
    return(
        <div>
  {/* navbar */}
  <nav className="navbar navbar-expand-lg fixed-top navbar-main container-fluid">
    <div className="container">
      <Brand/>
      <MenuButton/>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          {/* rebajas */}
          <li className="nav-item1 dropdown position-static">
            <NavLink name="Rebajas" />
            <ul className="dropdown-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <Categorias name="CATEGORÍAS" />
                    </li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Ver todo" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Vestidos" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Abrigos y chaquetas" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Tops y camisas" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Jerséis, cárdigans y sudaderas" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Camisetas" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Pantalones, jeans y monos" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Faldas y pantalones cortos" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Bolsos y pequeña marroquinería" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Zapatos" /></li>
                    <li><a className="dropdown-item" href="#"></a><DropdownItem name="Accesorios" /></li>
                    <div className="d-none col-md-6 d-md-block">
                      <div className="foto-menu">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* nueva coleccion */}
          <li className="nav-item dropdown position-static">
            <NavLink name="Nueva colección" />
            <ul className="dropdown-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <Categorias name="NOTICIAS" />
                    </li>
                    <div className="d-none col-md-6 d-md-block">
                      <div className="foto-menu">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* ropa */}
          <li className="nav-item dropdown position-static">
            <NavLink name="Ropa" />
            <ul className="dropdown-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <Categorias name="CATEGORÍAS" />
                    </li>
                    <div className="d-none col-md-6 d-md-block">
                      <div className="foto-menu">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* bolsos */}
          <li className="nav-item dropdown position-static">
            <NavLink name="Bolsos" />
            <ul className="dropdown-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <Categorias name="CATEGORÍAS" />
                    </li>
                    <div className="d-none col-md-6 d-md-block">
                      <div className="foto-menu">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* zapatos */}
          <li className="nav-item dropdown position-static">
            <NavLink name="Zapatos" />
            <ul className="dropdown-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                    <Categorias name="CATEGORÍAS"/>
                    </li>
                    <div className="d-none col-md-6 d-md-block">
                      <div className="foto-menu">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
          {/* accesorios */}
          <li className="nav-item dropdown position-static">
            <NavLink name="Accesorios" />
            <ul className="dropdown-menu">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                    <Categorias name="CATEGORÍAS"/>
                    </li>
                    <div className="foto-menu">
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <div id="cart-btn" className="fas fa-shopping-cart"></div>
          <div className="user"><i className="fa-solid fa-user"></i></div>
        </form>
      </div>
    </div>
  </nav>
</div>
    )
    }
    
    export default NavBar;