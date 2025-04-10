// Contact.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      setError('Please enter a valid email address');
    }else {
      setError('');

      alert('Form submitted successfully!');
    }
  };


  return (
    <div className="container mt-5 pt-5 d-flex flex-column flex-md-row justify-content-between align-items-start">
      {/* Lado izquierdo - Información de contacto */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="p-4 text-white mb-4 mb-md-0"
        style={{
          backgroundColor: 'rgb(82, 135, 216)',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '400px'
        }}
      >
        <h3>Contact Me</h3>
        <p><strong>Email:</strong> gonzalez.erick3108@gmail.com</p>
        <p><strong>Phone #:</strong> +52 33 2444 9174</p>
        <p><strong>Country:</strong> Guadalajara, Mexico</p>
      </motion.div>

      {/* Lado derecho - Formulario */}
      <form className="ms-md-5 w-100">
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>
        <div className="mb-3">
          <input 
          type="email" 
          className={`form-control ${error ? 'is-invalid' : ''}`}
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
           {error && <div className="invalid-feedback">{error}</div>}
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Write your message here..." rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
