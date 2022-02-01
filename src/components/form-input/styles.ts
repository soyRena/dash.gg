import styled from 'styled-components'
import theme from '../../styles/theme'

export const ContainerForm = styled.div`
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 0.7rem 1rem 0.8rem;
  background: ${theme.colors.darkPetrol};
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      ${theme.colors.cian},
      ${theme.colors.lightGreen},
      ${theme.colors.yellow},
      ${theme.colors.cian},
      ${theme.colors.lightGreen},
      ${theme.colors.cian}
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }
`

export const StyledFormInput = styled.input`
  flex-grow: 1;
  border-style: none;
  background: transparent;
  outline: none;
  color: ${theme.colors.ligthCian};
  font-size: 1rem;
  line-height: 2.4rem;
  vertical-align: middle;
  &::-webkit-input-placeholder {
    color: ${theme.colors.ligthPetrol};
  }
`
