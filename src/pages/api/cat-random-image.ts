import catImages from './cat-images.json'

export function randomImage (): string {
  const randomIndex = Math.floor(Math.random() * catImages.images.length)
  // Gatos aleatorios
  return catImages.images[randomIndex]
}
