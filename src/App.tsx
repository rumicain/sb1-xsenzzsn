import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import { AppleStyleDock } from './components/AppleStyleDock';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Transform values for header opacity and translateY
  const headerOpacity = useTransform(scrollY, [0, 200], [1, 0]);
  const headerTranslateY = useTransform(scrollY, [0, 200], [0, -100]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          opacity: headerOpacity,
          y: headerTranslateY,
        }}
      >
        <div className="w-full bg-pure-black/90 backdrop-blur-sm border-b border-ash/10">
          <div className="py-14 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-playfair tracking-[0.25em] text-center leading-normal"
              style={{
                background: 'linear-gradient(145deg, #FFFFFF 0%, #D3D3D3 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textRendering: 'geometricPrecision',
                fontSmooth: 'always',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              JAVIER BOSCO
            </motion.h1>
          </div>
        </div>
        <nav className="w-full bg-pure-black/90 backdrop-blur-sm border-b border-ash/10">
          <div className="max-w-7xl mx-auto">
            <div className="h-16">
              <AppleStyleDock />
            </div>
          </div>
        </nav>
      </motion.header>
      <main className="min-h-screen bg-pure-black text-pure-white pt-44">
        <Hero />
      </main>
    </>
  );
}

export default App;