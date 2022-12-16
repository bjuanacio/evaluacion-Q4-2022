import React, { useEffect, useState } from 'react'
import Header from '../../atoms/header/header'
import SearchBar from '../../molecules/search-bar/search-bar'
import { Gift } from '../../../utils/interfaces/interfaces'
import './home.scss'
import { UserService } from '../../../services/user.service'
import GiftCard from '../../molecules/gift-card/gift-card'

const Home = () => {
  const [gifts, setGifts] = useState<Gift[]>([])
  const [stateModal, setStateModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [idEdit, setIdEdit] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [player, setPlayer] = useState<Gift>({
    id: 1,
    url: '',
    author_id: 18
  })

  useEffect(() => {
    UserService.getMyGifts()
      .then((response) => {
        setGifts(response)
        
      })
      .catch(() => {})
  })
  return (
    <section className="home">
      <Header principalText="Gift Galery"></Header>
      <SearchBar setSearchValue={setSearchValue} setStateModal={setStateModal} setEdit={setEdit} />
      <section className="home__board">
        <section className="home__card">
          {gifts.map((option: Gift, item) => {
            const deleteGift = () => {
              //UserService.deleteGift(option)
              setStateModal(true)
              console.log('Delete')

            }
            return (
              <section key={item} className="home__gift">
                <GiftCard gift={option} deleteGift={deleteGift} stateModal={stateModal} setStateModal={setStateModal}/>
              </section>
            )
          })}
        </section>
      </section>
    </section>
  )
}
export default Home
