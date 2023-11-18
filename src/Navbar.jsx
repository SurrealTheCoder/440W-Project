import { Nav, NavLink, NavMenu }
    from "./NavbarElements";


    const Navbar = () => {
      return (
          <>
              <Nav>
                  <NavMenu>
                      <NavLink to="/Home" activeStyle>
                          Homepage
                      </NavLink>
                      <NavLink to="/CSV" activeStyle>
                          CSV Compiler
                      </NavLink>
                      <NavLink to="/Forms" activeStyle>
                          Form Creator
                      </NavLink>
                  </NavMenu>
              </Nav>
          </>
      );
  };

export default Navbar