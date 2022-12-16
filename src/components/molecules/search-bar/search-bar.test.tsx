import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SearchBar from './search-bar'
import { act } from 'react-dom/test-utils'

describe('SearchBar component', () => {
  const setSearchValue = jest.fn()
  const setStateModal = jest.fn()
  const setEdit = jest.fn()
  it('should render with props', () => {
    render(
      <SearchBar setSearchValue={setSearchValue} setStateModal={setStateModal} setEdit={setEdit} />
    )
    const searchBarFound = screen.getByText('Agregar')
    expect(searchBarFound).toBeDefined()
  })

  xit('should call the funtion edit player when clicking', () => {
    render(
      <SearchBar setSearchValue={setSearchValue} setStateModal={setStateModal} setEdit={setEdit} />
    )
    const buttonFound = screen.getByRole('button')
    act(() => {
      userEvent.click(buttonFound)
    })
    expect(setEdit).toBeCalled()
  })
})
