import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import slide1Src from '../assets/slide1.jpg';
import slide2Src from '../assets/slide2.jpg';
import slide3Src from '../assets/slide3.jpeg';
import slide4Src from '../assets/slide4.jpg';
// import slide5Src from '../assets/slide5.jpeg';
// import slide6Src from '../assets/slide6.jpeg';
// import slide7Src from '../assets/slide7.jpeg';


function Hero() {

    const carouselItems = [
        { src: slide1Src, alt: 'Oto Elektrik Servisi - Slayt 1' },
        { src: slide2Src, alt: 'Profesyonel Arıza Tespiti - Slayt 2' },
        { src: slide3Src, alt: 'Modern Teşhis Ekipmanları - Slayt 3' },
        { src: slide4Src, alt: 'Kaliteli Yedek Parça - Slayt 4' },
        // { src: slide5Src, alt: 'Kaliteli Yedek Parça - Slayt 5' },
        // { src: slide6Src, alt: 'Garantili Servis Hizmeti - Slayt 6' },
        // { src: slide7Src, alt: 'Garantili Servis Hizmeti - Slayt 7' },
    ];

    return (
        <div className="hero-section text-center position-relative" id="hero-section" style={{ padding: 0 }}>
            <Carousel fade controls={true} indicators={false} interval={3000} className="hero-carousel">
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index} className="carousel-item-full-height">
                        <img
                            className="d-block w-100 carousel-image-cover"
                            src={item.src}
                            alt={item.alt}
                        />
                        <Carousel.Caption className="carousel-caption-overlay d-flex flex-column align-items-center">
                            <div className="text-content-overlay">
                                <h1 className="display-4 fw-bold text-white mb-1">Aracınız Sait Usta ile Güvende</h1>
                                <p className="fs-5 text-white-75 mb-1">Oto elektrik ve elektronik sistemlerinizde hızlı ve kalıcı çözümler sunuyoruz.</p>
                                <hr className="my-1 bg-white opacity-50 w-100" />
                                <p className="fs-6 text-white-75 mb-1">Profesyonel destek ve randevu için hemen bizimle iletişime geçin.</p>
                            </div>
                            <Button variant="light" size="lg" href="#iletisim" className="text-primary fw-bold mt-1">Bize Ulaşın</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Hero; 