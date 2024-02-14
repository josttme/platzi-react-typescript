import { useState } from 'react'
import { randomImage } from '../pages/api/cat-random-image'
import type { ICatImageItem } from '../types/global'

interface AddNewCatResult {
  images: ICatImageItem[]
  addNewCat: () => void
}

export function useAddNewCat (): AddNewCatResult {
  const [images, setImages] = useState<ICatImageItem[]>([])

  const addNewCat = (): void => {
    const url = randomImage()
    const newImageItem: ICatImageItem = {
      id: crypto.randomUUID(),
      url
    }
    setImages([...images, newImageItem])
  }

  return { images, addNewCat }
}
