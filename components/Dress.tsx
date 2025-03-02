'use client';

import { motion } from 'framer-motion';  // Importamos motion para las animaciones

export default function Dress() {
  return (
    <motion.div
      className="dress"
      initial={{ opacity: 0 }}  // Comienza con opacidad 0 (invisible)
      whileInView={{ opacity: 1 }}  // Se anima a ser visible cuando entra en la vista
      transition={{ duration: 2 }}  // Duración de la animación
    >
      {/* Imagen de fondo */}
      <motion.img
        src="/fondoweb.png"
        alt="Fondo"
        className="dress-bg"
      />

      {/* Imagen de flores */}
      <motion.img
        src="/Dressflores.png"
        alt="Flores decorativas"
        className="dress-img dress-flowers"
      />

      {/* Imagen principal con texto */}
      <motion.img
        src="/DressTexto.png"
        alt="Texto principal"
        className="dress-img dress-main"
      />

      {/* Imagen del sello con animación */}
      <motion.img
        src="/DressSello.png"
        alt="Sello decorativo"
        className="dress-img dress-sello"
      />
    </motion.div>
  );
}
