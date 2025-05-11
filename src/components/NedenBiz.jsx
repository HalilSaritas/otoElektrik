import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const nedenBizMaddeleri = [
    { text: "Teknolojik Arıza Çözümleri", icon: "bi-cpu-fill" },
    { text: "Güvenilir İşçilik", icon: "bi-shield-lock-fill" },
    { text: "Hızlı Çözüm Geliştirme", icon: "bi-lightning-charge-fill" },
    { text: "Tecrübeli Ekip", icon: "bi-people-fill" },
    { text: "Geniş Çözüm Olanakları", icon: "bi-boxes" },
    { text: "Garantili Hizmet Anlayışı", icon: "bi-patch-check-fill" },
    { text: "Geniş Arıza Tespit Yelpazesi", icon: "bi-search" },
    { text: "Profesyonel Müdahale", icon: "bi-tools" },
    { text: "Güncel Piyasa Araştırması", icon: "bi-graph-up-arrow" },
    { text: "Yeni Teknoloji Araçlara Müdahale", icon: "bi-car-front-fill" },
    { text: "Bilgisayarlı Arıza Tespiti", icon: "bi-laptop-fill" },
    { text: "Müşteri Memnuniyeti", icon: "bi-emoji-smile-fill" }
];


function NedenBiz() {
    return (

        <Container className="py-5 bg-light section-anchor" id="neden-biz">
            <h2 className="text-center mb-5">Neden Biz?</h2>
            <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
                {nedenBizMaddeleri.map((madde, index) => (
                    <Col key={index} className="d-flex align-items-stretch">
                        <Card className="text-center h-100 shadow-sm w-100" style={{ minHeight: '9rem' }}>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <i className={`bi ${madde.icon} text-primary mb-3 fs-1`}></i>
                                <Card.Text as="h5" className="fw-normal">
                                    {madde.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default NedenBiz; 