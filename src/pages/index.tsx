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
    <main className='px-1 flex flex-col min-h-screen pb-52 lg:px-4'>
      <div className='w-full grid gap-5 py-10 place-content-center'>
      <h1 className="font-semibold text-4xl text-center">Cats Random</h1>
        <button
          className="bg-[#0071cf] hover:bg-[#0280e7] text-center lg:w-52 lg:h-14 w-36 h-10 transition-all duration-100 fixed bottom-10 left-0 right-0 mx-auto text-lg lg:text-xl grid place-content-center px-4 py-2 rounded-md border border-white/50" type="button"
          onClick={addNewCat}>
            Add new cat
        </button>
      </div>
      <ResponsiveMasonryGallery
        images={images}
        viewLargeImage={viewLargeImage}
      />
      <LargeImageView viewImage={viewImage} closeModal={closeModal} />
    </main>
  )
}
