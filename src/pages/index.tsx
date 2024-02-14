'use client'
import { LargeImageView } from '@/components/LargeImageView'
import { ResponsiveMasonryGallery } from '@/components/ResponsiveMasonryGallery'
import { useAddNewCat } from '@/hooks/UseAddNewCat'
import { useState } from 'react'
import type { IViewImage } from '../types/global'

export default function Home (): JSX.Element {
  const [viewImage, setViewImage] = useState<IViewImage>({
    url: ''
  })

  const { images, addNewCat } = useAddNewCat()

  const viewLargeImage = (url: string): void => {
    setViewImage({ url })
  }
  const closeModal = (): void => {
    setViewImage({ url: '' })
  }
  return (
    <main>
      <h1 className="font-semibold text-4xl">Hello Josttme</h1>
      <button onClick={addNewCat}>Add new cat</button>

      <ResponsiveMasonryGallery
        images={images}
        viewLargeImage={viewLargeImage}
      />
      <LargeImageView viewImage={viewImage} closeModal={closeModal} />
    </main>
  )
}
