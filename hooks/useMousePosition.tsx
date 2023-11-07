import { useEffect, useState } from "react"

export default function useMousePosition() {
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setX(e.clientX)
      setY(e.clientY)
    })
  }, [])
  return [x, y]
}
