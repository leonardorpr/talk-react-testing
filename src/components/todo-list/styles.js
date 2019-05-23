import styled from 'styled-components'
import { colors } from 'assets'

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  color: ${colors.accent.white};
  font-size: 20px;
  text-transform: uppercase;
`
