import React, { useState, useEffect } from 'react';
import CyberIcon from './CyberIcons';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleOpenCert = (e) => {
      const certId = e.detail;
      const cert = certificates.find((c) => c.id === certId);
      if (cert) {
        setSelectedCertificate(cert);
        document.body.classList.add('modal-open');
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCertificate) {
        closeModal();
      }
    };

    window.addEventListener('openCertificate', handleOpenCert);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openCertificate', handleOpenCert);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [selectedCertificate]);

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
      title: 'Networking Basics // Cisco Systems',
      description: 'Certificación en fundamentos de redes, protocolos de comunicación y networking por Cisco Systems',
      image: '/networking-basics cisco certificado.png',
      issuer: 'Cisco Systems',
      date: '2025',
      category: 'Networking'
    },
    {
      id: 4,
      title: 'Certificado Escolar Hackathon Genius Arena',
      description: 'Certificado escolar por participación destacada en el Hackathon Genius Arena con distinción académica',
      image: '/Certificado escolar hackathon genius arena.png',
      issuer: 'Genius Arena Escolar',
      date: '2025',
      category: 'Académico'
    },
    {
      id: 5,
      title: 'Hackathon Ibero // 3er Lugar',
      description: 'Reconocimiento por obtener el tercer lugar en el prestigioso Hackathon de la Universidad Iberoamericana',
      image: '/Certificado hackathon Ibero 3er Lugar.png',
      issuer: 'Universidad Iberoamericana',
      date: '2025',
      category: '3er Lugar'
    },
    {
      id: 6,
      title: 'Mejor Proyecto Nova // ExpoIbero 2026',
      description: 'Reconocimiento de primer lugar y máximo galardón de la ExpoIbero 2026 con el proyecto "Nova Agent"',
      image: '/Certifiacdo_ExpoIbero_2026_NOVA.png',
      issuer: 'ExpoIbero',
      date: '2026',
      category: 'Mejor Proyecto'
    },
    {
      id: 7,
      title: 'Asistente Virtual // ExpoIbero 2025',
      description: 'Reconocimiento por el desarrollo y demostración del proyecto de Asistente Virtual presentado en la ExpoIbero 2025',
      image: '/ExpoIbero_2025_asistente virtual.jpg',
      issuer: 'ExpoIbero',
      date: '2025',
      category: 'Proyecto Destacado'
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title" data-scramble>Certificaciones & Premios</h2>
          <p className="section-subtitle">Acreditaciones oficiales, premios en competencias de ingeniería y distinciones académicas</p>
        </div>

        <div className="certificates-grid stagger-container">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="certificate-card stagger-item hover-lift interactive"
              onClick={() => openModal(certificate)}
              data-tilt
            >
              <div className="certificate-image">
                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    width="400"
                    height="300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div className={`placeholder-cert ${certificate.image ? 'hidden' : ''}`}>
                  <div className="placeholder-icon">
                    <CyberIcon name="award" size={32} color="var(--neon-cyan)" />
                  </div>
                  <p>Certificado</p>
                </div>

                <div className="certificate-overlay">
                  <div className="overlay-content">
                    <div className="category-badge">
                      <CyberIcon name="trophy" size={11} color="var(--neon-cyan)" />
                      <span>{certificate.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p className="certificate-description">{certificate.description}</p>
                <div className="certificate-details">
                  <span className="issuer">
                    <CyberIcon name="terminal" size={12} color="var(--neon-red)" />
                    {certificate.issuer}
                  </span>
                  <span className="date">
                    <CyberIcon name="clock" size={12} color="var(--text-muted)" />
                    {certificate.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cyberpunk Modal */}
        {selectedCertificate && (
          <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
            <div className="modal-content image-only" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeModal} aria-label="Cerrar modal">
                <CyberIcon name="close" size={20} color="var(--neon-cyan)" />
              </button>
              <div className="modal-hud-header">
                <span>DOC_VIEWER // {selectedCertificate.issuer}</span>
                <span className="modal-hud-year">EXP: {selectedCertificate.date}</span>
              </div>
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
