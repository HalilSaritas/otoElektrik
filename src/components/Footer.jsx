import Container from 'react-bootstrap/Container';


function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="custom-bg text-white text-center py-5">
            <Container>
                <p className="mb-2">Tasarım & Geliştirme: Halil Sarıtaş</p>
                <p className="mb-0">&copy; {currentYear} Mustafa Sait Oto Elektrik. Tüm Hakları Saklıdır.</p>
            </Container>
        </footer>
    );
}

export default Footer; 