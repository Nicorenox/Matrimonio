'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}  // Inicializa en opacidad 0
      whileInView={{ opacity: 1 }}  // Se anima a ser visible al entrar en vista
      transition={{ duration: 2 }}  // Duración de la animación
    >
      {/* Imagen de fondo */}
      <motion.img
        src="/fondoweb.png"
        alt="Fondo"
        className="hero-bg"
      />

      {/* Imagen de flores */}
      <motion.img
        src="/heroFlores.png"
        alt="Flores decorativas"
        className="hero-img hero-flowers"
      />

      {/* Imagen principal con texto */}
      <motion.img
        src="/heroPrincipal.png"
        alt="Texto principal"
        className="hero-img hero-main"
      />

      {/* Imagen del sello con animación */}
      <motion.img
        src="/heroSello.png"
        alt="Sello decorativo"
        className="hero-img hero-sello"
      />
    </motion.div>
  );
}
