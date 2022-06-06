import { Navbar, Container, Nav} from "react-bootstrap"


const Header = () => {

    return (

        <Navbar collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" >Pricing/Plans</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" >Payments</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" >My Account</Nav.Link>
                            </Nav.Item>
                    </Nav>
                    <Nav>
                        <Nav.Link className="nav-link" >Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header
