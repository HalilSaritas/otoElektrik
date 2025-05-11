import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import resimSrc from '../assets/tamirhane.jpeg';


function Hakkimizda() {
    return (
        <Container className=" bg-light pt-5 section-anchor" id="hakkimizda">
            <Row className="align-items-center">
                <Col md={6} className="mb-4 mb-md-0">
                    <Image
                        src={resimSrc}
                        rounded
                        alt="Sarıtaş Oto Elektrik Servis Alanı"
                        style={{
                            width: '100%',
                            height: '350px',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </Col>
                <Col md={6}>
                    <h2 className="mb-4">Hakkımızda</h2>
                    {/* Firma geçmişi ve deneyimi hakkında ilk paragraf */}
                    <p>
                        2007 yılında başlayan tecrübemize yıllar geçtikçe başarı ve üstün kalitede hizmet ekledik.
                        Kuruluşumuzun ilk gününden bu yana göstermiş olduğumuz özverili ve dürüst çalışma anlayışı
                        bizleri müşteri memnuniyetine götürdü.
                    </p>
                    {/* Firma misyonu, altyapı ve hizmet anlayışı hakkında ikinci paragraf */}
                    <p>
                        Kurulduğu günden bu yana kusursuz bir hizmet sunmak için odaklanan firmamız,
                        altyapısını bu doğrultuda geliştirmekte ve teknik personelini bu yönde eğitmektedir.
                        Her marka aracın elektrik ve elektronik arızalarını bilgisayar sistemi ile tespit edip,
                        bakım ve tamirini titizlikle yerine getirmekteyiz.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Hakkimizda; 