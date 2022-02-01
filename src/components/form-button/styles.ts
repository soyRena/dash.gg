import styled from 'styled-components'
import theme from '../../styles/theme'

export const StyledFormButton = styled.button`
  display: flex;
  padding: 0.1rem;
  background: none;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  color: ${theme.colors.ligthPetrol};
  font-size: 1rem;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  transition: border 0.5s;
  &:hover {
    background: ${theme.colors.darkPetrol};
    border-radius: 10px;
    transition: border 0.5s;
  }
`
