import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Button } from './button';
describe('button', () => {
it('should render component', async () => {
const onClinck = jest.fn();
render(<Button className='test' onClick={onClinck} />);
fireEvent.click(screen.getByRole('button'));
 expect(onClinck).toBeCalledTimes(1);

});
});