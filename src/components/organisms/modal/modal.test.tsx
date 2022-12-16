import { render, screen } from '@testing-library/react'
import Modal from './modal'
import userEvent from '@testing-library/user-event'

describe('Modal', () => {
  const onCancel = jest.fn()
  const onDelete = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should render', () => {
    render(<Modal onCancel={onCancel} onDelete={onDelete} />)
    expect(screen.getByTestId('modal-testid')).toBeVisible()
  })

  test('should call delete on click', async () => {
    render(<Modal onCancel={onCancel} onDelete={onDelete} />)
    expect(onDelete).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByText('Eliminar'))
    expect(onDelete).toHaveBeenCalledTimes(1)
  })

  test('should call cancel on click', async () => {
    render(<Modal onCancel={onCancel} onDelete={onDelete} />)
    expect(onCancel).toHaveBeenCalledTimes(0)
    await userEvent.click(screen.getByText('Cancelar'))
    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
