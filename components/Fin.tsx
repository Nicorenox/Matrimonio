'use client';

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';  // Importamos motion para las animaciones

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

export default function Fin() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
  
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fin"
      initial={{ opacity: 0 }}  // Comienza con opacidad 0
      whileInView={{ opacity: 1 }}  // Se anima a ser visible cuando entra en la vista
      transition={{ duration: 2 }}  // Duración de la animación
    >
      {/* Imagen izquierda */}
      <motion.img 
        src={images[(currentIndex - 1 + images.length) % images.length]} 
        className="carousel-img left" 
        alt="Previous" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Imagen central */}
      <motion.img 
        src={images[currentIndex]} 
        className="carousel-img center" 
        alt="Current" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Imagen derecha */}
      <motion.img 
        src={images[(currentIndex + 1) % images.length]} 
        className="carousel-img right" 
        alt="Next" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Imagen de fondo */}
      <motion.img 
        src="/fondoweb.png" 
        alt="Fondo" 
        className="fin-bg" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Imagen de flores */}
      <motion.img
        src="/Finflores.png"
        alt="Flores decorativas"
        className="fin-img fin-flowers"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Imagen principal con texto */}
      <motion.img 
        src="/FinTexto.png" 
        alt="Texto principal" 
        className="fin-img fin-main"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Imagen del sello con animación */}
      <motion.img 
        src="/FinSello.png" 
        alt="Sello decorativo" 
        className="fin-img fin-sello"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
}
