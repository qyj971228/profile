import { useEffect, useState } from "react"
import _ from 'lodash'

export default function useMousePosition() {
  const [x, setX] = useState<number>(0)
  const [y, setY] = useState<number>(0)
  useEffect(() => {
    document.addEventListener("mousemove", _.throttle((e) => {
      setX(e.clientX)
      setY(e.clientY)
    }, 100))
  }, [])
  return [x, y]
}
