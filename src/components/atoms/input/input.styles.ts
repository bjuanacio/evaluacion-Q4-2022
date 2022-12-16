import styled from 'styled-components'

interface InputProps {
  error: boolean
}

export const Styles = styled.div<InputProps>`
  input {
    height: 40px;
    padding: 0.6rem;
    border-radius: 0.3rem;
    border: 1px solid ${(props) => (props.error ? 'red' : 'gray')};
    outline: none;
    color: #555;
  }

  .input__helper {
    color: red;
    margin: 0;
    margin-top: 0.4rem;
    padding: 0;
    font-size: 14px;
  }
`
