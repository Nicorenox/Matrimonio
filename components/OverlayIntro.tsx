'use client';

import { useState, useRef, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '@/public/animacion.json';

export default function OverlayIntro({ onFinish, setPlayMusic }: { onFinish: () => void, setPlayMusic: (play: boolean) => void }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [hideButton, setHideButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // Estado para desvanecer el overlay
  const lottieRef = useRef<any>(null);

  const startAnimation = () => {
    // Reproduce la animación
    if (lottieRef.current) {
      lottieRef.current.play();
    }
    setHideButton(true);
    setPlayMusic(true); // Inicia la música cuando se hace clic en el sello
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1);
    }
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setShowOverlay(false); // Ocultamos el overlay completamente
        onFinish(); // Llamamos a la función de finalización cuando se oculta
      }, 3000); // Tiempo de desvanecimiento
    }
  }, [fadeOut, onFinish]);

  return (
    <>
      {showOverlay && (
        <div className={`overlay ${fadeOut ? 'fade-out' : ''}`}>
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            className="animacion"
            autoplay={false}
            loop={false}
            onComplete={() => {
              if (lottieRef.current) {
                const lastFrame = animationData.op - 1;
                lottieRef.current.goToAndStop(lastFrame, true);
              }
              setTimeout(() => {
                setFadeOut(true); // Inicia el desvanecimiento después de 7s
              }, 7000); // Espera 7s antes de desvanecer
            }}
          />
          <img
            src="/sello.png"
            alt="Sello de inicio"
            className={`sello ${hideButton ? 'desaparecer' : ''}`}
            onClick={startAnimation}
          />
        </div>
      )}
    </>
  );
}
