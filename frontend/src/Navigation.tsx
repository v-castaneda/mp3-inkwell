import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUser } from "./contexts/CurrentUser";

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

function Navigation(): JSX.Element {
  const history = useHistory();

  const { currentUser } = useContext(CurrentUser);

  function logIn(): JSX.Element {
      let loginActions: JSX.Element;
      if (currentUser) {
          loginActions = (
              <>
                <li>Welcome back {currentUser.firstName} {currentUser.lastName}</li>
              </>
          ) 
      } else {
        loginActions = (
          <>
            <li>Stay curious, discover stories ... </li>
          </>
        )
      }
      return loginActions
  }

  let currentBanner: JSX.Element = logIn();

  function handleLogout(): void {
      localStorage.clear()
      currentBanner = logIn()
      window.location.href = "/places"
  }

  function handleStartWriting(): void {
    if (currentUser) {
      history.push("/places/new")
    } else {
      history.push("/login")
    }
  }
      
return (
    <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" onClick={() => history.push("/")}>
        The Inkwell{" "}
      </Navbar.Brand>

      <Nav className="text-right">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            {currentBanner}
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="#" onClick={() => history.push("/places")}>
            Posts
          </Nav.Link>
          <Nav.Link href="#" onClick={handleStartWriting}>
            Start Writing
          </Nav.Link>
          <NavDropdown title="Account">
            <NavDropdown.Item href="#" onClick={() => history.push("/login")}>
              Sign-in
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={handleLogout}>
              Sign-out
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" onClick={() => history.push("/sign-up")}>
              Create account
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;