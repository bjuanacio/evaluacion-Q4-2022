import styled from 'styled-components'

export const Styles = styled.div`
  position: relative;
  background-color: black;
  width: 100%;
  height: 300px;

  .gif__image {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    &--size {
      width: 100%;
      height: 300px;
    }
  }

  .gif__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 30px;
    cursor: pointer;
  }
`
