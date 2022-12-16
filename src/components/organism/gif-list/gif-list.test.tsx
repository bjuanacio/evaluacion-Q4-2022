import { render, screen, fireEvent, act } from "@testing-library/react"
import { GifList } from "."



describe('Gif form tests', () => {

  it('Should render a empty message', () => {
    const onDelete = jest.fn()
    render(<GifList gifList={[]} onDelete={onDelete} />)
    screen.getByText('No posee Gifs')
  })

  it('Should render two gif cards', async () => {
    const onDelete = jest.fn()
    render(<GifList gifList={[
      { url: 'asddf', id: '1' },
      { url: 'dskojoi', id: '2' },
    ]} onDelete={onDelete} />)
    const list = screen.findAllByTestId('deleteIcon')
    expect((await list).length).toBe(2)
  })


})