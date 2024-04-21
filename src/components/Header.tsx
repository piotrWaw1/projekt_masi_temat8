import {Container, Navbar} from "react-bootstrap";

export default function Header() {
  return (
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Unitermy temat 8</Navbar.Brand>
        </Container>
      </Navbar>
  )
}