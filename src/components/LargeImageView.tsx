interface Props {
  viewImage: { url: string }
  closeModal: () => void
}
export function LargeImageView ({ viewImage, closeModal }: Props): JSX.Element {
  return (
    <>
      {viewImage.url !== '' && (
        <div
          className="w-screen top-0 left-0 h-screen fixed bg-black/40 grid place-content-center  overflow-hidden"
          onClick={closeModal}
        >
          <picture className=" relative  place-self-center">
            <img
              src={viewImage.url}
              alt="Large image"
              onClick={(e) => { e.stopPropagation() }}
            />
            <button
              type="button"
              onClick={closeModal}
              className="cursor-pointer absolute right-10 top-10 rounded-full bg-slate-400/50 w-10 h-10 grid place-content-center text-3xl "
            >
              x
            </button>
          </picture>
        </div>
      )}
    </>
  )
}
