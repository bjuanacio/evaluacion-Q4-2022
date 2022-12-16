import { FC } from 'react'
import './gift-card.scss'
import Image from '../../atoms/image/image'
import { Gift } from '../../../utils/interfaces/interfaces'
import Button from '../../atoms/button/button'
import { UserService } from '../../../services/user.service'

interface GiftCardProps {
  gift: Gift
  deleteGift: () => void
  stateModal: boolean
  setStateModal: (arg:boolean) => void
}

const GiftCard: FC<GiftCardProps> = ({ gift, deleteGift, stateModal,setStateModal }) => {
  return (
    <section className="gift-card">
      <section className="gift-card__header">
        <Image gift={gift} isDeleted={stateModal} deleteGift={deleteGift}></Image>
      </section>
    </section>
  )
}
export default GiftCard
