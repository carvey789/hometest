import {render, screen, cleanup} from '@testing-library/react';
import Radios from '../Radios';
import Input from '../Input';
import RadioInput from '../RadioInput';
import '@testing-library/jest-dom/extend-expect';

test('should render Radio with SubComp Input Text', () => {
    render(<Radios />);
    render(<Input />)
    const radioLabelElement = screen.getByTestId('radio');
    const inputLabelElement = screen.getByTestId('input');
    expect(radioLabelElement).toBeInTheDocument();
    expect(inputLabelElement).toBeInTheDocument();
})