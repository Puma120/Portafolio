import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
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

    // Configuración de EmailJS
    const serviceID = 'service_199yb0i';
    const templateID = 'template_h48lvif';
    const publicKey = 'EHEECS4P87ZQpl0Uh';

    // Preparar los parámetros del template
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
      // Enviar email usando EmailJS
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log('Email enviado exitosamente!', response.status, response.text);
      
      // Mostrar mensaje de éxito
      setSubmitStatus('success');
      
      // Limpiar formulario
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      });
      
      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);

    } catch (error) {
      console.error('Error al enviar el email:', error);
      setSubmitStatus('error');
      
      // Ocultar mensaje de error después de 5 segundos
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header fade-in">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">¿Tienes un proyecto en mente? ¡Hablemos y creemos algo increíble juntos!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Información de Contacto</h3>
            <p>
              Estoy disponible para proyectos freelance, colaboraciones y oportunidades laborales. 
              No dudes en contactarme si tienes alguna pregunta o propuesta.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>Email</h4>
                  <p>pumaurbina120@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-info">
                  <h4>Teléfono</h4>
                  <p>+52 22 27 54 39 21</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>Ubicación</h4>
                  <p>México</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">⏰</div>
                <div className="method-info">
                  <h4>Disponibilidad</h4>
                  <p>Lunes - Viernes, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Sígueme en:</h4>
              <div className="social-icons">
                <a href="https://github.com/Puma120" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">💻</div>
                  <span>GitHub</span>
                </a>
                <a href="https://instagram.com/puma_w_" target="_blank" rel="noopener noreferrer" className="social-link">
                  <div className="social-icon">📷</div>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form slide-in-right">
            <h3>Envíame un Mensaje</h3>
            
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ ¡Mensaje enviado exitosamente! Te responderé pronto.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Error al enviar el mensaje. Por favor, intenta de nuevo.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
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
                  placeholder="tu.email@ejemplo.com"
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
                  <option value="">Selecciona un asunto</option>
                  <option value="Nuevo Proyecto">Nuevo Proyecto</option>
                  <option value="Colaboración">Colaboración</option>
                  <option value="Oportunidad Laboral">Oportunidad Laboral</option>
                  <option value="Consulta General">Consulta General</option>
                  <option value="Hackathon/Competencia">Hackathon/Competencia</option>
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
                  rows="6"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensaje'
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
