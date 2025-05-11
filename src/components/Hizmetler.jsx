import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const hizmetlerListesi = [
    {
        baslik: "Bilgisayarlı Arıza Tespiti",
        aciklama: "Her marka aracın elektrik ve elektronik arızalarını bilgisayar sistemi ile tespit ediyoruz.",
        ikon: "bi bi-pc-display-horizontal"
    },
    {
        baslik: "Oto Elektrik & Elektronik Tamiri",
        aciklama: "Aracınızdaki elektrik ve elektronik parçaların bakım ve tamirini titizlikle yapıyoruz.",
        ikon: "bi bi-tools"
    },
    {
        baslik: "Klima Bakım & Onarım",
        aciklama: "Klima gazı dolumu, bakımı ve arıza onarımlarını profesyonelce gerçekleştiriyoruz.",
        ikon: "bi bi-snow"
    },
    {
        baslik: "Kalorifer Temizliği",
        aciklama: "Özel makinelerimiz ile aracınızın kalorifer sistemini temizliyoruz.",
        ikon: "bi bi-wind"
    }
];


function Hizmetler() {
    return (
        <Container className="bg-light py-5 section-anchor" id="hizmetlerimiz">
            <h2 className="text-center mb-5">Hizmetlerimiz</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {hizmetlerListesi.map((hizmet, index) => (
                    <Col key={index} className="d-flex">
                        <Card className="h-100 text-center d-flex flex-column">
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <i className={`${hizmet.ikon} fs-1 text-primary mb-3`}></i>
                                    <Card.Title className="mb-3">{hizmet.baslik}</Card.Title>
                                    <Card.Text>{hizmet.aciklama}</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Hizmetler; 