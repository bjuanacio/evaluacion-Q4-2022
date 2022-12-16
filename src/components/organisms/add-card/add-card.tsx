import React, { useState } from 'react'

import Button from '../../atoms/button/button'
import Input from '../../atoms/input/input'

import { GifService } from '../../../services/gif/gif'
import { useAppContext } from '../../../context/app-context'

import './add-card.scss'

export interface AddcardProps {
  onAdd: (url: string) => void
}


const AddCard = () => {
  const { gifReducer } = useAppContext()
  const { gifDispatch } = gifReducer
  const [urlInput, setUrlInput] = useState('')
  const [errorInput, setErrorInput] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target
    console.log('entro', value)
    setUrlInput(value)
  }

  const onAdd = async () => {
    const error = urlInput === '' ? 'Campo requerido' : '' 
    setErrorInput(error)
    if (!!!error) {
      const data = await GifService.createGif({ url: urlInput })
      gifDispatch({ type: 'addGif', payload: data })
    }  
  }

  return (
    <div className="add-card">
      <h2 className="add-card__title">Gif Card</h2>
      <section className="add-card__add">
        <Input value={urlInput} error={errorInput} placeholder="URL Link" onChange={onChange}/>
        <Button onClick={onAdd}>Agregar</Button>
      </section>
    </div>
  )
}

export default AddCard