import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
describe('header test', () => {

it('should render component', async () => {
render(<header />);
screen.queryByLabelText('Gif Galery');
screen.queryByRole('button');
screen.queryByRole('textbox');

screen.debug();
});
it('should receibe input data ', async () => {
});
it('should show error message', async () => {
});
it('should be able to search', async () => {
});
});