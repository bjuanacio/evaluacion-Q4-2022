import { FC } from "react"
import { Gif } from "../../../utils/interfaces/gif.interface"
import { EmptyMessage } from "../../molecules/empty-message"
import { GifCard } from "../gif-card"
import { GifListProps } from "./gif-list.interface"
import './gif-list.scss'

export const GifList: FC<GifListProps> = ({ gifList, onDelete }) => {
  return (
    <div className='gif-list'>
      {
        (gifList && gifList.length > 0) ?
          gifList.map((gif: Gif) => (
            <GifCard key={gif.id} gif={gif} onDelete={onDelete} />
          ))
          : <EmptyMessage />
      }



    </div>
  )
}