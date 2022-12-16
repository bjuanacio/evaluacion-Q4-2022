import { render, screen, fireEvent } from '@testing-library/react';
import { Galery } from "./galery"

describe('Galery test suite', () => {

    it('should render galery', () => {
        render(<Galery />)
        const input = screen.getByPlaceholderText('Gif URL')
        const btn = screen.getByRole("button")
        expect(btn).toBeInTheDocument()
        expect(input).toBeInTheDocument()
    })

    it('should show error input', () => {
        render(<Galery />)
        const btn = screen.getByRole("button")
        fireEvent.click(btn)
        const errMsg = screen.getByText("error")
        expect(errMsg).toBeInTheDocument()
    })

    it('should change input', () => {
        render(<Galery />)
        const input = screen.getByPlaceholderText('Gif URL')
        fireEvent.change(input, {target: {value: 'test'}})
        expect(input).toHaveValue('test')
    })
})