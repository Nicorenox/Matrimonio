'use client';

import { useState, useEffect } from 'react';
import OverlayIntro from '@/components/OverlayIntro';
import Hero from '@/components/hero';
import Timer from '@/components/Timer';
import Dress from '@/components/Dress';
import Rs from '@/components/Rs';
import Fin from '@/components/Fin';
import { motion } from 'framer-motion';
import AudioPlayer from '@/components/AudioPlayer'; // Importa el componente

export default function Page() {
  const [showContent, setShowContent] = useState(false);
  const [playMusic, setPlayMusic] = useState(false); // Estado para controlar la música

  const handleOverlayFinish = () => {
    setShowContent(true);
  };

  useEffect(() => {
    const overlayStatus = localStorage.getItem('overlayShown');
    if (overlayStatus === 'true') {
      setShowContent(true);
    }
  }, []);

  return (
    <div className="container">
      <AudioPlayer playMusic={playMusic} /> {/* Pasa el estado de playMusic a AudioPlayer */}
      {!showContent && <OverlayIntro onFinish={handleOverlayFinish} setPlayMusic={setPlayMusic} />} {/* Pasa setPlayMusic */}
      {showContent && <Hero />}
      {showContent && (
        <motion.img
          src="/separador1.jpg"
          alt="Separador decorativo"
          className="separador1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
      {showContent && <Timer />}
      {showContent && (
        <motion.img
          src="/separador2.jpg"
          alt="Separador decorativo"
          className="separador2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
      {showContent && <Dress />}
      {showContent && (
        <motion.img
          src="/separador3.jpg"
          alt="Separador decorativo"
          className="separador3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
      {showContent && <Rs />}
      {showContent && <Fin />}
    </div>
  );
}
