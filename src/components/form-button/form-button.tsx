import React from 'react'
import { Search } from '../../assets/icons'
import theme from '../../styles/theme'
import { StyledFormButton } from './styles'

export const FormButton = () => {
  return (
    <StyledFormButton type="submit">
      Search <Search size={35} fill={theme.colors.ligthPetrol} />
    </StyledFormButton>
  )
}
