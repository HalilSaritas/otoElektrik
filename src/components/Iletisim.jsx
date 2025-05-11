import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Iletisim() {
    const firmaAdresi = "Garaj 94 Oto Tamir ve Yedek Parça Servisi, Sanayi Sitesi E Blok, Seyran, Muzaffer Tutar Sk., 70400 Ermenek/Karaman";
    const telefon1 = "03387168211";
    const telefon2 = "05386150842";
    const whatsappNumarasi = "905386150842";
    const googleHaritaEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(firmaAdresi)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

    return (
        <Container className="bg-light py-5 section-anchor" id="iletisim">
            <h2 className="text-center mb-5">İletişim</h2>
            <Row>
                <Col md={6} className="mb-4 mb-md-0">
                    <h4><i className="bi bi-geo-alt-fill me-2 text-primary"></i>Adres</h4>
                    <p>{firmaAdresi}</p>

                    <h4><i className="bi bi-telephone-fill me-2 text-primary"></i>Telefon</h4>
                    <p><a href={`tel:${telefon1}`}>{telefon1}</a></p>
                    <p><a href={`tel:${telefon2}`}>{telefon2}</a> (Mobil)</p>

                    <h4><i className="bi bi-whatsapp me-2 text-success"></i>WhatsApp</h4>
                    <p>
                        <Button variant="success" href={`https://wa.me/${whatsappNumarasi}`} target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-whatsapp me-2"></i> WhatsApp'tan Yazın
                        </Button>
                    </p>

                    <h4><i className="bi bi-clock-fill me-2 text-primary"></i>Çalışma Saatleri</h4>
                    <p>Pazartesi - Cumartesi: 08:30 - 20:00</p>
                    <p>Pazar: Kapalı</p>

                    <Button variant="primary" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(firmaAdresi)}`} target="_blank" rel="noopener noreferrer" className="mt-3">
                        <i className="bi bi-pin-map-fill me-2"></i> Yol Tarifi Al
                    </Button>
                </Col>

                {/* Harita Sütunu */}
                <Col md={6}>
                    <h4><i className="bi bi-map-fill me-2 text-primary"></i>Konumumuz</h4>
                    <div className="map-responsive">
                        <iframe
                            src={googleHaritaEmbedUrl}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Firma Konumu"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Iletisim; 