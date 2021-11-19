import {render, screen, cleanup} from '@testing-library/react';
import Radios from '../Radios';
import Select from '../Select';
import '@testing-library/jest-dom/extend-expect';

test('should render Radio with Subcomp Select', () => {
    render(<Radios />);
    render(<Select />)
    const radioLabelElement = screen.getByTestId('radio');
    const selectLabelElement = screen.getByTestId('select');
    expect(radioLabelElement).toBeInTheDocument();
    expect(selectLabelElement).toBeInTheDocument();
})