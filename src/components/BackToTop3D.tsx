import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import Runner3D from './Runner3D';

export default function BackToTop3D() {
  const [showButton, setShowButton] = useState(false);
  const [isSprinting, setIsSprinting] = useState(false);
  const isJumpingRef = useRef(false);
  const runnerRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!isSprinting) {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSprinting]);

  const scrollToTop = () => {
    if (isSprinting) return;
    
    startYRef.current = window.scrollY;
    setIsSprinting(true);
    setShowButton(false);
    isJumpingRef.current = false;
    
    if (runnerRef.current) {
      runnerRef.current.style.bottom = '2rem';
    }
    
    const scrollDuration = 1500; // 1.5 seconds for a nice run
    const startY = window.scrollY;
    const startTime = performance.now();
    
    // Smooth ease-in-out function
    const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    
    const step = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const p = Math.min(timeElapsed / scrollDuration, 1);
      
      const currentScrollY = startY * (1 - easeInOutCubic(p));
      window.scrollTo(0, currentScrollY);
      
      // Perfectly sync the runner's position
      if (runnerRef.current) {
        const progress = 1 - (currentScrollY / startY);
        runnerRef.current.style.bottom = `calc(2rem + ${progress * 100}vh)`;
        
        if (progress > 0.9) {
          isJumpingRef.current = true;
        }
      }
      
      if (timeElapsed < scrollDuration) {
        requestAnimationFrame(step);
      } else {
        // Wait a tiny bit for the jump animation to finish
        setTimeout(() => {
          setIsSprinting(false);
          isJumpingRef.current = false;
          if (runnerRef.current) {
            runnerRef.current.style.bottom = '-20vh'; // Reset position
          }
        }, 300);
      }
    };
    
    requestAnimationFrame(step);
  };
  
  // Run speed is proportional to the scroll speed
  const runSpeed = 15;

  return (
    <>
      {/* STANDARD BUTTON */}
      <AnimatePresence>
        {showButton && !isSprinting && (
          <motion.button
            key="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.4)] border-2 border-orange-400"
            aria-label="Back to top"
          >
            <ArrowUp size={24} strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 3D RUNNER */}
      <div 
        ref={runnerRef}
        className={`fixed right-2 z-[60] pointer-events-none w-48 h-48 transition-opacity duration-300 ${isSprinting ? 'opacity-100' : 'opacity-0'}`}
        style={{ bottom: '-20vh' }}
      >
        <div className="w-full h-full">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Environment preset="city" />
            <group rotation={[0, 0, Math.PI / 2]}>
              <Runner3D runSpeed={runSpeed} isJumpingRef={isJumpingRef} isSprinting={isSprinting} />
            </group>
          </Canvas>
        </div>
      </div>
    </>
  );
}
