'use client'

import { useRef, useEffect } from "react"
import { ImageTrail } from "@/components/ui/image-trail"
import { motion, useAnimate } from "framer-motion"

const ImageTrailDemo = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [scope, animate] = useAnimate()

  const images = [
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=300&auto=format&fit=crop", // Tokyo night skyline
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=300&auto=format&fit=crop", // Rio de Janeiro
    "https://images.unsplash.com/photo-1522083165195-3424ed129620?q=80&w=300&auto=format&fit=crop", // Santorini
    "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=300&auto=format&fit=crop", // Dubai skyline
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=300&auto=format&fit=crop", // Singapore skyline
    "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=300&auto=format&fit=crop", // Paris Eiffel Tower
  ]

  const words = ["WORLDWIDE", "MUNDIAL", "MONDIAL", "世界的", "WELTWEIT", "عالمي"]

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        for (let i = 0; i < words.length; i++) {
          await animate(
            scope.current,
            { 
              opacity: [1, 0, 0, 1],
              rotateX: [0, 90, -90, 0],
              y: [0, 20, -20, 0]
            },
            {
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 1],
              onUpdate: (latest) => {
                if (latest >= 0.4 && latest <= 0.6) {
                  scope.current.textContent = words[(i + 1) % words.length]
                }
              }
            }
          )
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
      }
    }

    animateText()
  }, [animate])

  return (
    <div className="flex w-full min-h-[50vh] lg:h-screen justify-center items-center relative overflow-hidden">
      <div className="absolute top-0 left-0 z-0" ref={ref}>
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-16 sm:w-20 md:w-24 rounded-lg"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src={url}
                alt={`Trail image ${index + 1}`}
                className="object-cover absolute inset-0 hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </ImageTrail>
      </div>
      <motion.h1
        ref={scope}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold z-10 select-none bg-clip-text text-transparent bg-gradient-to-r from-pure-white to-ash perspective-1000 px-4 text-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        WORLDWIDE
      </motion.h1>
    </div>
  )
}

export { ImageTrailDemo }