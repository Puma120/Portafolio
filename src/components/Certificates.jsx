import React, { useState, useEffect } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Cleanup en caso de que el componente se desmonte con modal abierto
  // Y listener para abrir certificados desde otros componentes
  useEffect(() => {
    const handleOpenCert = (e) => {
      const certId = e.detail;
      const cert = certificates.find(c => c.id === certId);
      if (cert) {
        setSelectedCertificate(cert);
        document.body.classList.add('modal-open');
      }
    };
    
    window.addEventListener('openCertificate', handleOpenCert);
    
    return () => {
      window.removeEventListener('openCertificate', handleOpenCert);
      document.body.classList.remove('modal-open');
    };
  }, []);

  const certificates = [
    {
      id: 1,
      title: 'Certificado Hackathon Genius Arena',
      description: 'Reconocimiento por participación y logros destacados en el Hackathon Genius Arena',
      image: '/Certificado hackathon genius arena.jpeg',
      issuer: 'Genius Arena',
      date: '2025',
      category: 'Competencia'
    },
    {
      id: 2,
      title: 'Certificado Talent Land',
      description: 'Certificación obtenida en uno de los eventos de tecnología más importantes de México',
      image: '/Certificado talent land.jpeg',
      issuer: 'Talent Land',
      date: '2025',
      category: 'Evento Tech'
    },
    {
      id: 3,
      title: 'Networking Basics - Cisco',
      description: 'Certificación en fundamentos de redes y networking por Cisco Systems',
      image: '/networking-basics cisco certificado.png',
      issuer: 'Cisco Systems',
      date: '2025',
      category: 'Networking'
    },
    {
      id: 4,
      title: 'Certificado Escolar Hackathon Genius Arena',
      description: 'Certificado escolar por participación destacada en el Hackathon Genius Arena con reconocimiento académico',
      image: '/Certificado escolar hackathon genius arena.png',
      issuer: 'Genius Arena Escolar',
      date: '2025',
      category: 'Académico'
    },
    {
      id: 5,
      title: 'Hackathon Ibero - 3er Lugar',
      description: 'Reconocimiento por obtener el tercer lugar en el prestigioso Hackathon de la Universidad Iberoamericana',
      image: '/Certificado hackathon Ibero 3er Lugar.png',
      issuer: 'Universidad Iberoamericana',
      date: '2025',
      category: '3er Lugar'
    },
    {
      id: 6,
      title: 'Mejor Proyecto Nova - ExpoIbero 2026',
      description: 'Reconocimiento por obtener el galardón de mejor proyecto con "Nova Agent" en la ExpoIbero 2026',
      image: '/Certifiacdo_ExpoIbero_2026_NOVA.png',
      issuer: 'ExpoIbero',
      date: '2026',
      category: 'Mejor Proyecto'
    },
    {
      id: 7,
      title: 'Asistente Virtual - ExpoIbero 2025',
      description: 'Reconocimiento por el proyecto de Asistente Virtual presentado en la ExpoIbero 2025',
      image: '/ExpoIbero_2025_asistente virtual.jpg',
      issuer: 'ExpoIbero',
      date: '2025',
      category: 'Proyecto Destacado'
    }
  ];

  const openModal = (certificate) => {
    if (!certificate.pending) {
      setSelectedCertificate(certificate);
      document.body.classList.add('modal-open');
    }
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Certificaciones</h2>
          <p className="section-subtitle">Reconocimientos y certificaciones que validan mis conocimientos y habilidades</p>
        </div>

        <div className="certificates-grid stagger-container">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className={`certificate-card stagger-item hover-lift interactive ${certificate.pending ? 'pending' : ''}`}
              onClick={() => openModal(certificate)}
            >
              <div className="certificate-image">
                {certificate.image ? (
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className={`placeholder-cert ${certificate.image ? 'hidden' : ''}`}>
                  <div className="placeholder-icon">
                    {certificate.pending ? '🔄' : '📜'}
                  </div>
                  <p>{certificate.pending ? 'Próximamente' : 'Certificado'}</p>
                </div>
                
                <div className="certificate-overlay">
                  <div className="overlay-content">
                    <div className="category-badge">{certificate.category}</div>
                  </div>
                </div>
              </div>

              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p className="certificate-description">{certificate.description}</p>
                <div className="certificate-details">
                  <span className="issuer">🏢 {certificate.issuer}</span>
                  <span className="date">📅 {certificate.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content image-only" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal}>&times;</button>
              <div className="modal-image-fullscreen">
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
