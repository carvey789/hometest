import {render, screen, cleanup} from '@testing-library/react';
import RadioLabel from '../RadioLabel';
import '@testing-library/jest-dom/extend-expect';

test('should render RadioLabel component & label A', () => {
    render(<RadioLabel label="Radio A"/>);
    const radioLabelElement = screen.getByTestId('radio-label');
    expect(radioLabelElement).toBeInTheDocument();
    expect(radioLabelElement).toHaveTextContent("Radio A")
})

test('should render RadioLabel component & label B', () => {
    render(<RadioLabel label="Radio B"/>);
    const radioLabelElement = screen.getByTestId('radio-label');
    expect(radioLabelElement).toBeInTheDocument();
    expect(radioLabelElement).toHaveTextContent("Radio B")
})