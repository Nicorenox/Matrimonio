'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Timer() {
  const targetDate = new Date('2025-08-19T02:00:00'); // 🔹 Ajusta la fecha objetivo

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // 🔹 Se actualiza cada minuto

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="timer-container"
      initial={{ opacity: 0 }}  // Comienza con opacidad 0 (invisible)
      whileInView={{ opacity: 1 }}  // Se anima a ser visible cuando entra en la vista
      transition={{ duration: 2 }}  // Duración de la animación
    >
      {/* Contenedor estructural del fondo */}
      <motion.img
        src="/fondoweb.png"
        alt="Fondo"
        className="timer-bg2"
      />

      {/* Imagen de fondo */}
      <motion.img
        src="/fondoweb.png"
        alt="Fondo"
        className="timer-img timer-bg"
      />

      {/* Imagen de flores con animación */}
      <motion.img
        src="/LocationFlores.png"
        alt="Flores"
        className="timer-img timer-flores"
      />

      {/* Imagen de texto principal */}
      <motion.img
        src="/LocationPrincipal.png"
        alt="Texto principal"
        className="timer-img timer-texto"
      />

      {/* Botón con link */}
      <motion.a
        href="https://maps.app.goo.gl/ffc18TDFbjwEn6NVA"
        target="_blank"
        rel="noopener noreferrer"
        className="timer-boton"
      >
        <motion.img
          src="/LocationBoton.png"
          alt="Botón"
          className="timer-img timer-boton"
        />
      </motion.a>

      {/* Contador */}
      <div className="contador">
        <span>{timeLeft.days} </span>
        <span>{timeLeft.hours} </span>
        <span>{timeLeft.minutes} </span>
      </div>

      {/* Imagen del sello con animación */}
      <motion.img
        src="/LocationSello.png"
        alt="Sello decorativo"
        className="timer-img sello-location"
      />
    </motion.div>
  );
}
