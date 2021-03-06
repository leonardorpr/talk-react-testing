import styled from 'styled-components'
import { colors } from 'assets'

export const FormTask = styled.form`
  display: flex;
  justify-content: center;
  padding: 40px 0px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Field = styled.input.attrs({
  type: 'text'
})`
  background-color: ${colors.secondary.light};
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  margin-right: 10px;
  color: ${colors.accent.grey};

  &::placeholder {
    color: ${colors.accent.grey};
  }

  &:focus {
    outline: ${colors.secondary.dark} auto 5px;
  }
`

export const Button = styled.button.attrs({
  type: 'submit'
})`
  height: 37px;
  width: 150px;
  background-color: ${colors.accent.white};
  color: ${colors.secondary.light};
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.accent.grey};
  }
`
