import { useCallback, useEffect } from 'react'

import Card from '../../molecules/card/card'

import WarningIcon from "../../../assets/warning-icon.svg";

import { useAppContext } from '../../../context/app-context'
import { GifService } from '../../../services/gif/gif'

import './card-list.scss'

const CardList = () => {
  const { gifReducer } = useAppContext()
  const { gifState, gifDispatch } = gifReducer
  const { gifs } = gifState

  const getGifs = useCallback(async () => {
    try {
      const data = await GifService.getGifs()
      gifDispatch({ type: 'getGifs', payload: data })
    }catch(e) {
    }
  }, [gifDispatch])

  useEffect(() => {
    getGifs()
  }, [getGifs])

  return (
    <>
    <div className="card-list">
      {
        gifs.length === 0 && (
          <div className="card-list__not-found">
            <img src={WarningIcon} alt="Warning icon" />
            <p className="card-list__not-found__text">No posee gifs</p>
          </div>
        )
      }
      {gifs.map(((card, index) => (
        <div className="card-list__cards" key={index}>
          <Card
            card={card}
          />
        </div>
      )))}
    </div>
    </>
  )
}

export default CardList