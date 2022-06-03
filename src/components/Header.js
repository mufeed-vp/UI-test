import { Navbar, Container, Nav } from "react-bootstrap"


const Header = () => {

    return (
        
            <Navbar className="navbar" collapseOnSelect expand="lg"  variant="dark">
                <Container className="container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav">
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

                        <Nav className="nav2" style={{marginLeft: '456px'}}>
                            <Nav.Item className="nav-item">
                                <Nav.Link className="nav-link" style={{textAlign: 'right'}} >Login</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        
    )
}

export default Header