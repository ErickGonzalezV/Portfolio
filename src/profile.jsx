import { motion } from 'framer-motion';

function Profile() {
    return (
      <div className="container mt-5">
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Columna izquierda: imágenes */}
            <div className="col-md-6 d-flex flex-column align-items-center">
                <img src="/kb.jpeg" alt="Pic 1" className="img-fluid mb-3 rounded" style={{ width: '700px', height: '350px' }}/>
  
                <img src="/coding.jpg" alt="Pic 2" className="img-fluid mb-3 rounded" style={{ width: '700px', height: '350px' }}/>
            </div>
  
          {/* Columna derecha: texto */}
          <div className="col-md-6">
            <h2>About me</h2>
            <p>
                I'm a Full Stack developer with experience in Java, JavaScript, React HTML and CSS
            </p>
            <p>
              Me apasiona construir soluciones prácticas y visuales limpias...
            </p>
          </div>
        </motion.div>
      </div>
    );
  }
  
  export default Profile;
  




