import { useQuery } from '@tanstack/react-query'
import { getAllGifs } from '../../../services/gifs-service/gifs-service'
import Gif from '../../molecules/gif/gif'
import { Styles } from './gif-list.styles'
import warningImage from '../../../assets/warning-icon.svg'
const GifList = () => {
  const { data: gifs } = useQuery({ queryKey: ['gif'], queryFn: () => getAllGifs() })

  return (
    <Styles data-testid="gif-list-testid">
      <div className="gif-list__list">
        {gifs?.map((gif) => (
          <Gif {...gif} />
        ))}
      </div>
      {gifs?.length === 0 && (
        <div className="gif-list__empty">
          <div>
            <img src={warningImage} alt="warning" width={60} />
          </div>
          <p>No posee gifs</p>
        </div>
      )}
    </Styles>
  )
}

export default GifList
