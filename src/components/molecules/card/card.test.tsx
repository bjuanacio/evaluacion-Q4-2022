import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gif } from '../../../utils/interfaces/gif'
import Card from './card'

describe('Card', () => {
  const imageUrl =
    'https://phantom-marca.unidadeditorial.es/500be06c4056e00a9f691d6c5800f216/resize/1320/f/jpg/assets/multimedia/imagenes/2022/09/30/16644896975046.jpg'
  const gif: Gif = {
    url: imageUrl,
    author_id: 10,
  }

  const deleteMock = jest.fn()

  it('should display the image player', () => {
    render(<Card gif={gif} deleteGif={deleteMock} />)
    const image = screen.getByAltText(/gif/i)
    expect(image).not.toBeInTheDocument()
  })

 
})
