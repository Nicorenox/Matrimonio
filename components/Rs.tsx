'use client';

import { motion } from 'framer-motion';  // Importamos motion para las animaciones

export default function Rs() {
  return (
    <motion.div
      className="rs"
      initial={{ opacity: 0 }}  // Comienza con opacidad 0 (invisible)
      whileInView={{ opacity: 1 }}  // Se anima a ser visible cuando entra en la vista
      transition={{ duration: 2 }}  // Duración de la animación
    >
      {/* Imagen de fondo */}
      <motion.img
        src="/fondoweb.png"
        alt="Fondo"
        className="rs-bg"
      />

      {/* Imagen de flores */}
      <motion.img
        src="/Rsflores.png"
        alt="Flores decorativas"
        className="rs-img rs-flowers"
      />

      {/* Imagen principal con texto */}
      <motion.img
        src="/RsTexto.png"
        alt="Texto principal"
        className="rs-img rs-main"
      />

      {/* Botón con link */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfmOVGXT3uTTrxwIwc8VTgwT42sqlNsAdf5u3aPmNnEtXn0Ww/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="rs-boton"
      >
        <motion.img
          src="/RsBoton.png"
          alt="Botón"
          className="rs-img rs-boton"
        />
      </a>

      {/* Imagen del sello con animación */}
      <motion.img
        src="/RsSello.png"
        alt="Sello decorativo"
        className="rs-img rs-sello"
      />
    </motion.div>
  );
}
