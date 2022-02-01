import * as React from 'react'

interface Props {
  size: number
  fill?: string
}

export const Search = ({ size, fill = '#979797' }: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M17.5 11a6.5 6.5 0 016.5 6.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0117.5 24a6.5 6.5 0 110-13zm0 2C15 13 13 15 13 17.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z"
        fill={fill}
      />
    </svg>
  )
}
