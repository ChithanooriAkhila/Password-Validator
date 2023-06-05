// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PasswordContainer = styled.div`
  background-color: #475569;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: white;
  font-family: 'Roboto';
`

export const Paragraph = styled.p`
  color: #f8fafc;
`

export const PasswordInput = styled.input`
  padding: 10px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
`
