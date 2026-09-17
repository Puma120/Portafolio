import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import CyberIcon from './CyberIcons';
import './Contact.css';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const serviceID = 'service_199yb0i';
    const templateID = 'template_h48lvif';
    const publicKey = 'EHEECS4P87ZQpl0Uh';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      sent_date: new Date().toLocaleString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      console.error('Error al enviar el email:', error);
      setSubmitStatus('error');

      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title" data-scramble>Contacto Directo</h2>
          <p className="section-subtitle">Inicia una transmision de comunicacion para proyectos, colaboraciones o propuestas laborales</p>
        </div>

        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>// CANALES_DE_COMUNICACION</h3>
            <p>
              Disponible para proyectos de ingenieria frontend, consultoria de producto, desarrollo de agentes con IA y oportunidades profesionales.
            </p>

            <div className="contact-methods">
              <div className="contact-method hover-lift" data-tilt>
                <div className="method-icon-wrap">
                  <CyberIcon name="mail" size={18} color="var(--neon-cyan)" />
                </div>
                <div className="method-info">
                  <h4>Email Oficial</h4>
                  <p>pumaurbina120@gmail.com</p>
                </div>
              </div>

              <div className="contact-method hover-lift" data-tilt>
                <div className="method-icon-wrap">
                  <CyberIcon name="phone" size={18} color="var(--neon-red)" />
                </div>
                <div className="method-info">
                  <h4>Telefono Directo</h4>
                  <p>+52 22 27 54 39 21</p>
                </div>
              </div>

              <div className="contact-method hover-lift" data-tilt>
                <div className="method-icon-wrap">
                  <CyberIcon name="mapPin" size={18} color="var(--neon-green)" />
                </div>
                <div className="method-info">
                  <h4>Ubicacion Geografica</h4>
                  <p>Mexico // Remoto Global</p>
                </div>
              </div>

              <div className="contact-method hover-lift" data-tilt>
                <div className="method-icon-wrap">
                  <CyberIcon name="clock" size={18} color="var(--neon-yellow)" />
                </div>
                <div className="method-info">
                  <h4>Disponibilidad</h4>
                  <p>Lunes - Viernes // 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>// REDES_Y_PERFILES</h4>
              <div className="social-icons">
                <a href="https://github.com/Puma120" target="_blank" rel="noopener noreferrer" className="social-link interactive">
                  <CyberIcon name="github" size={16} />
                  <span>GitHub</span>
                </a>
                <a href="https://instagram.com/puma_w_" target="_blank" rel="noopener noreferrer" className="social-link interactive">
                  <CyberIcon name="instagram" size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container slide-in-right" data-tilt>
            <div className="form-hud-header">
              <span>TRANSMISSION_TERMINAL // SECURE_ENCRYPTION</span>
              <span className="hud-signal">SIGNAL: OPTIMAL</span>
            </div>

            {submitStatus === 'success' && (
              <div className="status-banner success" role="alert">
                <CyberIcon name="checkCircle" size={18} color="var(--neon-green)" />
                <span>Mensaje transmitido exitosamente. Te respondere a la brevedad.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-banner error" role="alert">
                <CyberIcon name="close" size={18} color="var(--neon-red)" />
                <span>Error en la transmision. Por favor intenta de nuevo o envia un email directo.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo…"
                  autoComplete="name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu.email@ejemplo.com…"
                  autoComplete="email"
                  spellCheck={false}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una categoria…</option>
                  <option value="Nuevo Proyecto">Nuevo Proyecto</option>
                  <option value="Colaboración">Colaboracion</option>
                  <option value="Oportunidad Laboral">Oportunidad Laboral</option>
                  <option value="Consulta General">Consulta General</option>
                  <option value="Hackathon/Competencia">Hackathon / Competencia</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe los requerimientos tecnicos o la consulta…"
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary submit-btn interactive ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="cyber-spinner" aria-hidden="true" />
                    <span>Transmitiendo Datos…</span>
                  </>
                ) : (
                  <>
                    <CyberIcon name="send" size={16} />
                    <span>Enviar Transmision</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
