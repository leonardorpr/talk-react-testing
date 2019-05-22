import styled from 'styled-components'

import { colors } from 'assets'

export const Task = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  height: 60px;
  margin-left: 20px;
  cursor: pointer;
  transition: all 0.5s ease;
  margin: 15px;

  &:hover {
    -webkit-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.75);
    box-shadow: 0px 2px 17px -5px rgba(0,0,0,0.75);
    transition: all 0.5s ease;
  }
`

export const Body = styled.div`
  background-color: ${colors.secondary.normal};
  width: 97.5%;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 10px;
`

export const Indicator = styled.div`
  background-color: ${({ done }) => done ? colors.accent.green : colors.accent.red};
  width: 2.5%;
  margin-right: 2px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.accent.white};
  align-self: center;
`

export const Time = styled.span`
  text-align: end;
  font-size: 12px;
  color: ${colors.accent.white};
`
