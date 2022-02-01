import React from 'react'
import { FormButton } from '../form-button/form-button'
import { StyledFormInput } from './styles'

export const FormInput = () => {
  const [nickname, setNickname] = React.useState('')

  return (
    <StyledFormInput
      type="text"
      placeholder="Insira um nickname"
      name="nick"
      value={nickname}
      onChange={(event) => setNickname(event.target.value)}
    />
  )
}
