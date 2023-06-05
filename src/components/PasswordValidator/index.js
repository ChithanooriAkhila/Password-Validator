import {useState} from 'react'

import {
  MainContainer,
  PasswordContainer,
  Heading,
  Paragraph,
  ErrorMessage,
  PasswordInput,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const changePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <MainContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput
          type="password"
          onChange={changePassword}
          value={password}
        />
        {password.length < 8 && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </PasswordContainer>
    </MainContainer>
  )
}

export default PasswordValidator
