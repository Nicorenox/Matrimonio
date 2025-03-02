import { useState, useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react'; // Importar el tipo correcto
import animationData from '@/public/animacion.json';
import Image from 'next/image'; // Importar Image

export default function OverlayIntro({ onFinish, setPlayMusic }: { onFinish: () => void; setPlayMusic: (play: boolean) => void }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [hideButton, setHideButton] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null); // Tipo corregido ✅

  const startAnimation = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
    setHideButton(true);
    setPlayMusic(true);
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1);
    }
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setShowOverlay(false);
        onFinish();
      }, 3000);
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
                setFadeOut(true);
              }, 7000);
            }}
          />
          <Image
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
