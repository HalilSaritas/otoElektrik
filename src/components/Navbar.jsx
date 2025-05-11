import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoSrc from '../assets/logo.jpg';


function AppNavbar() {
    return (

        <Navbar expand="lg" variant="dark" className="custom-bg py-3 sticky-top" collapseOnSelect>
            <Container fluid="lg">
                <Navbar.Brand href="#hero-section" className="fw-bold fs-4 d-flex align-items-center">
                    <img
                        src={logoSrc}
                        height="40"
                        className="d-inline-block align-top rounded me-2"
                        alt="Ermenek Oto Elektrik Logosu"
                    />
                    Sarıtaş Oto Elektrik
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#hero-section" eventKey="1" className="fw-bold fs-6 mx-lg-2">Ana Sayfa</Nav.Link>
                        <Nav.Link href="#hakkimizda" eventKey="2" className="fw-bold fs-6 mx-lg-2">Hakkımızda</Nav.Link>
                        <Nav.Link href="#neden-biz" eventKey="3" className="fw-bold fs-6 mx-lg-2">Neden Biz?</Nav.Link>
                        <Nav.Link href="#hizmetlerimiz" eventKey="4" className="fw-bold fs-6 mx-lg-2">Hizmetlerimiz</Nav.Link>
                        <Nav.Link href="#iletisim" eventKey="6" className="fw-bold fs-6 mx-lg-2">İletişim</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;