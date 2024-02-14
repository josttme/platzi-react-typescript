import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { RandomCat } from '@/components/RandomCat'

interface Image {
  id: string
  url: string
}

interface Props {
  images: Image[]
  viewLargeImage: (url: string) => void
}

export function ResponsiveMasonryGallery ({
  images,
  viewLargeImage
}: Props): JSX.Element {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 4, 1000: 5 }}>
      <Masonry gutter="5px">
        {images.map(({ id, url }) => (
          <RandomCat
            key={id}
            src={url}
            onClick={() => { viewLargeImage(url) }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  )
}
