import React from 'react'
import { BackgroundVideoContainer } from './styles'

export const BackgroundVideo = () => {
  return (
    <BackgroundVideoContainer autoPlay loop muted>
      <source src="/videos/ausol.mp4" type="video.mp4" />
    </BackgroundVideoContainer>
  )
}
