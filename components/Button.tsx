'use client'

interface Props {
  txt: string
  styles: string
  sectionId: string
  fn: (sectionId: string) => void
}

export const Button: React.FC<Props> = ({ fn, sectionId, txt, styles }) => {
  return (
    <>
      <button
        onClick={() => {
          fn(sectionId)
        }}
        className={styles}
      >
        {txt}
      </button>
    </>
  )
}
