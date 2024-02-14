import { useEffect, useRef, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface Image {
  src: string
}
type ImageNative = ImgHTMLAttributes<HTMLImageElement>
type Props = ImageNative & Image

export function RandomCat ({
  src,
  width,
  height,
  ...imgProps
}: Props): JSX.Element {
  const [loaded, setLoaded] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
  )
  const node = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrentSrc(src)
      })
    })

    if (node.current !== null) observer.observe(node.current)

    return () => {
      observer.disconnect()
    }
  }, [src])
  return (
    <div>
      <picture>
        <img
          src={currentSrc}
          ref={node}
          alt="Imagen of fox"
          {...imgProps}
          onLoad={() => { setLoaded(true) }}
        />
      </picture>
    </div>
  )
}
