import { useCallback, useEffect, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

interface Vector {
  x: number
  y: number
  magnitude: number
}

interface MouseVector {
  position: Position
  vector: Vector
}

export function useMouseVector(
  containerRef?: React.RefObject<HTMLElement>
): MouseVector {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const previousPosition = useRef<Position>({ x: 0, y: 0 })
  const [vector, setVector] = useState<Vector>({ x: 0, y: 0, magnitude: 0 })

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      const container = containerRef?.current
      const x = container
        ? event.clientX - container.getBoundingClientRect().left
        : event.clientX
      const y = container
        ? event.clientY - container.getBoundingClientRect().top
        : event.clientY

      setPosition({ x, y })

      const deltaX = x - previousPosition.current.x
      const deltaY = y - previousPosition.current.y
      const magnitude = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

      setVector({
        x: deltaX,
        y: deltaY,
        magnitude,
      })

      previousPosition.current = { x, y }
    },
    [containerRef]
  )

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  return { position, vector }
}