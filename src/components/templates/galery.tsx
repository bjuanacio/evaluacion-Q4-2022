
import { FC, useState } from 'react';
import { InputBP } from '../atoms/input/input';
import { UseGifs } from '../../hooks/use-gifs/use-gifs';
import './galery.scss'
import { ButtonBP } from '../atoms/button/button';
import Cards from '../organisms/cards/cards';
import { Gif } from '../../utils/interfaces/gif';

export const Galery: FC = () => {

    const { gifsList, addGif } = UseGifs()

    const [valueInput, setValueInput] = useState("")
    const [variantInput, setVariantInput] = useState("normal")
    const [errorMsg, setErrorMsg] = useState("")

    const handleChangeInput = (e: any) => {
        setValueInput(e)
    }

    const handleCreateGif = () => {
        if (!valueInput) {
            setVariantInput("error")
            setErrorMsg('error')
            return
        }
        const gitToAdd: Gif = {
            url: valueInput,
            author_id: 7
        } 
        addGif(gitToAdd)
    }

    return (
        <div className='galery'>
            <div className='galery__header'>
                <div className="galery__header__input">
                    <InputBP onChange={(e) => handleChangeInput(e)} placeholder="Gif URL" value={valueInput} variant={variantInput} errorMessage={errorMsg} />
                </div>
                <div className='galery__header__btn'>
                    <ButtonBP label='Agregar' onClick={() => handleCreateGif()} />
                </div>
            </div>
            <div>
                <Cards gifList={gifsList} />
            </div>
        </div>
    )
}
