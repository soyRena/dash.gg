import styled from 'styled-components'

export const BackgroundVideoContainer = styled.video`
position: absolute;
width: 100%;
left: 50%;
top: 50%;
height: 100%;
object-fit: contain;
transform: translate(-50%, -50%);
z-index: -1;
`