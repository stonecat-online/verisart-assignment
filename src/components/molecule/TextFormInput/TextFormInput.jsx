import React from 'react';
import { Wrapper, FormInput } from './TextFormInput.style'

const TextFormInput = ({ id, title, value, updateForm }) => {
    return (
        <Wrapper>
            <label for={id}>{title}</label>
            <FormInput id={id} type='text' value={value} onChange={(e) => updateForm(e)} />
        </Wrapper>

    );
}

export default TextFormInput;