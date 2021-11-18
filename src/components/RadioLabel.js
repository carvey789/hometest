import React from 'react';

const RadioLabel = ({label}) => {
    
    return (
        <>
            <label>
                <input type="radio" name="radio" />{label}
            </label>
        </>
    )
}

export default RadioLabel;
