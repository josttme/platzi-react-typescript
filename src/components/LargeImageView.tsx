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
          </picture>
            <button
              type="button"
              onClick={closeModal}
              className="cursor-pointer absolute right-5 top-7 rounded-full bg-slate-500/70 w-10 h-10 grid place-content-center text-3xl lg:right-20 lg:top-16 lg:w-14 lg:h-14  "
            >
            <svg fill="currentColor" className="w-7 h-7 lg:h-10 lg:w-10" viewBox="0 0 24 24"><path fillRule="evenodd" d="M5.5 5.5a.8.8 0 0 1 1 0l5.5 5.4 5.5-5.4a.8.8 0 1 1 1 1L13.1 12l5.4 5.5a.8.8 0 1 1-1 1L12 13.1l-5.5 5.4a.8.8 0 0 1-1-1l5.4-5.5-5.4-5.5a.8.8 0 0 1 0-1Z" clipRule="evenodd"/></svg>
            </button>
        </div>
      )}
    </>
  )
}
