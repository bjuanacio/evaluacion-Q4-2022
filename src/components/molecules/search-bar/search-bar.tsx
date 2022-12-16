import Input from '../../atoms/input/input'
import Button from '../../atoms/button/button'
import { FC, useState, useEffect} from 'react'
import './search-bar.scss'
import { UserService } from '../../../services/user.service'

interface SearchBarProps {
  setSearchValue: (value: string) => void
  setStateModal: (value: boolean) => void
  setEdit: (value: boolean) => void
}
const SearchBar: FC<SearchBarProps> = (props: SearchBarProps) => {
  const [ url, setUrl ] = useState('')
  useEffect(() => {setUrl('')},[])
  const newGift = async () =>{
    try {
      const newData= await UserService.createGift({
        id: Math.floor(Math.random() * (1000 - 1) + 1),
        url: '',
        author_id: 0
      }
       
      )
    } catch (error) {
    }
  }
  return (
    <section className="search">
      <div className="search__input">
        <Input
          placeholder="Gift URL"
          name={url}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setUrl(event.currentTarget.value)
          }
          type="text"
        ></Input>
      </div>
      <div className="search__button-container">
        <Button onClick={newGift} disabled={false}>
          Agregar
        </Button>
      </div>
    </section>
  )
}
export default SearchBar

