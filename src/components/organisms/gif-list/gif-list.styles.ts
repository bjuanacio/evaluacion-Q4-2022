import styled from 'styled-components'
import { DEVICE_WIDTH } from '../../../utils/constants/devices'

export const Styles = styled.section`
  margin: 0 auto;

  .gif-list__list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);

    @media (${DEVICE_WIDTH.tabletS}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (${DEVICE_WIDTH.tabletM}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (${DEVICE_WIDTH.laptopM}) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .gif-list__empty {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (${DEVICE_WIDTH.tabletM}) {
      gap: 1rem;
      flex-direction: row;
    }
  }
`
