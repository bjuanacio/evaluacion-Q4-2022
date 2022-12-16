import styled from 'styled-components'

interface ButtonProps {
  type: 'primary' | 'secondary'
}

export const Styles = styled.div<ButtonProps>`
  button {
    border-radius: 0.3rem;
    padding: 0.6rem 1rem;
    height: 40px;
    border: 2px solid var(--main);
    color: ${(props) => (props.type === 'primary' ? 'white' : 'var(--main)')};
    background-color: ${(props) => (props.type === 'primary' ? 'var(--main)' : 'white')};
    cursor: pointer;
    font-size: 16px;
  }
`
