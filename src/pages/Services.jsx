import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaCreditCard, 
  FaWifi, 
  FaWheelchair, 
  FaBriefcaseMedical, 
  FaRestroom, 
  FaTint, 
  FaParking, 
  FaInfoCircle, 
  FaChargingStation,
  FaMapMarkerAlt
} from 'react-icons/fa';
import '../css/Services.css'; 
import service1 from '../assets/Services1.png';
import service2 from '../assets/Services2.png';
import service4 from '../assets/service4.png';

const Services = () => {
  const servicesData = [
    { icon: <FaCreditCard />, title: 'ATM', location: '3&4 Floor', action: 'Call' },
    { icon: <FaWifi />, title: 'WIFI', location: 'All Floor', action: 'Call' },
    { icon: <FaWheelchair />, title: 'WHEEL CHAIR', location: '1&2 Floor', action: 'Call' },
    { icon: <FaBriefcaseMedical />, title: 'FIRST AID', location: 'All Floor', action: 'Call' },
    { icon: <FaRestroom />, title: 'REST ROOM', location: 'All Floor', action: 'Call' },
    { icon: <FaTint />, title: 'WATER', location: 'All Floor', action: 'Call' },
    { icon: <FaParking />, title: 'CAR PARKING', location: 'Ground', action: 'Call' },
    { icon: <FaInfoCircle />, title: 'INFO DESK', location: '1&2 Floor', action: 'Call' },
    { icon: <FaChargingStation />, title: 'CHARGE STATION', location: 'All Floor', action: 'Call' }
  ];

  return (
    <section className="services-section">
      <Container fluid className="px-0">
        {/* ========== FIRST SECTION ========== */}
        <Row className="mb-0 g-0 services-first-section align-items-stretch">
          <Col lg={6} md={12} className="py-4 d-flex flex-column">
            <div className="px-4 px-lg-5">
              <h2 className="services-main-heading mb-3">
                <span className="services-here-text">Here to </span>
                <span className="services-serve-text">Serve You</span>
              </h2>
              <h5 className="services-subheading mb-4">24/7 Available</h5>
              <p className="services-description mb-4">
                Your safety is our top priority. Our mall is equipped with advanced security systems and trained personnel to ensure a safe, secure, and worry-free shopping experience for all visitors.
              </p>
            </div>

            <div className="px-lg-5">
              <Row className="align-items-center g-3">
                <Col xs={12} md={5} className="services-bottom-image">
                  <img src={service2} alt="Mall Services" className="img-fluid rounded-4" />
                </Col>
                <Col xs={12} md={7}>
                  <p className="services-bottom-text mb-0">
                    We offer a wide range of services to ensure every visitor enjoys a comfortable, safe, and convenient shopping experience.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>

          <Col lg={6} md={12} className="py-4">
            <div className="services-right-content h-100 d-flex align-items-stretch px-4 px-lg-5">
              <img src={service1} alt="Security Services" className="img-fluid rounded-4 services-large-image w-100 service-height" />
            </div>
          </Col>
        </Row>

        {/* ========== SECOND SECTION - CARDS ========== */}
        <Row className="g-5 px-3 px-md-5 px-lg-5 services-cards-section justify-content-center">
          {servicesData.map((service, index) => (
            <Col xl={4} lg={4} md={6} sm={6} xs={12} key={index} className="d-flex justify-content-center">
              <Card className="services-card border-0 rounded-3 text-center">
                
                {/* Fixed Center Icon Wrapper - Removed Bootstrap positioning classes */}
                <div className="services-icon-wrapper">
                  <div className="services-icon-circle">
                    {service.icon}
                  </div>
                </div>
                
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="services-card-title">
                    {service.title}
                  </Card.Title>
                  
                  <div className="services-card-info mt-auto pt-2">
                    <div className="services-info-item">
                      <span className="services-mini-icon location-icon-black">
                        <FaMapMarkerAlt className="services-icon-pin" />
                      </span>
                      <span className="services-location">{service.location}</span>
                    </div>
                    <div className="services-info-item">
                      <span className="services-mini-icon phone-icon-green">
                        <img src={service4} alt="Phone" className="services-phone-icon" />
                      </span>
                      <span className="services-action">{service.action}</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;