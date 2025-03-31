import { useEffect } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

interface BounceCardsProps {
  className?: string
  images?: string[]
  containerWidth?: number
  containerHeight?: number
  animationDelay?: number
  animationStagger?: number
  easeType?: string
  transformStyles?: string[]
}

export function BounceCards({
  className = "",
  images = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(10deg) translate(-170px)",
    "rotate(5deg) translate(-85px)",
    "rotate(-3deg)",
    "rotate(-10deg) translate(85px)",
    "rotate(2deg) translate(170px)"
  ]
}: BounceCardsProps) {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    )
  }, [animationStagger, easeType, animationDelay])

  return (
    <div
      className={cn("relative", className)}
      style={{
        width: containerWidth,
        height: containerHeight
      }}
    >
      {images.map((src, idx) => (
        <div
          key={idx}
          className={cn(
            "card absolute w-[200px] aspect-square rounded-[30px] overflow-hidden",
            "border-8 border-white dark:border-white/90",
            "shadow-lg dark:shadow-black/20"
          )}
          style={{
            transform: transformStyles[idx] !== undefined ? transformStyles[idx] : "none"
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={src}
            alt={`card-${idx}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}