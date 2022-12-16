import React, { FC } from 'react'
import { InfoText } from '../../../utils/enumns/info-text'
import { TopBar } from '../../organism/top-bar/top-bar'
import useDeck from './use-deck/use-deck'
import './deck.scss'
import CardsGrid from '../../organism/cards-grid/cards-grid'

export const Deck = () => {
    const {
        handleChangeModal,
        gifsList,
        showLoadingOverlay,
        deleteGif,
        handleSearchTerm,
        searchTerm
      } = useDeck()
    return (
        <div className="deck">
        <h1 className="deck__title">{InfoText.TITLE}</h1>
        <TopBar
        searchTerm={searchTerm}
        handleSearchTerm={handleSearchTerm}
        gifsList={gifsList}
        handleChangeModal={handleChangeModal!}
        />
        <CardsGrid
        searchTerm={searchTerm}
        gifsList={gifsList}
        deleteGif={deleteGif!}
        />
    {/*<LoadingOverlay showOverlay={showLoadingOverlay} />*/}
    </div>
    )
}
