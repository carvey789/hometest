import {render, screen, cleanup} from '@testing-library/react';
import Radios from '../Radios';
import '@testing-library/jest-dom/extend-expect';

test('should render Radio Button component', () => {
    render(<Radios />);
    const radioLabelElement = screen.getByTestId('radio');
    expect(radioLabelElement).toBeInTheDocument();
})