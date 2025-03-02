'use client';

import { useEffect, useState } from 'react';

export default function AudioPlayer({ playMusic }: { playMusic: boolean }) {
  const [audio] = useState(new Audio('/musica.mp3')); // Asegúrate de tener el archivo de música en la carpeta public

  useEffect(() => {
    if (playMusic) {
      audio.loop = true; // Reproduce en loop
      audio.volume = 0.1;
      audio.play().catch((err) => console.error('Error playing audio:', err)); // Inicia la reproducción
    } else {
      audio.pause(); // Detener la música si no debe estar sonando
    }

    return () => {
      audio.pause(); // Detener la música cuando el componente se desmonte
    };
  }, [audio, playMusic]);

  return null;
}
