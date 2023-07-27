import React, { useState } from 'react';

const FUStep = ({index, step, updateStep, deleteStep}) => {
    const [ name, setName ] = useState(step.name);
    const [ type, setType ] = useState(step.type);
    const [ maxCharsToggle, setMaxCharsToggle ] = useState(false);

    const maxCharsModal = (
        <div className='max-chars-modal'>
            <div className='max-chars-modal-content'>
                <h1>Max Characters Reached</h1>
                <p>Step names must be less than 20 characters</p>
            </div>
        </div>
    )

    const handleNameChange = (e) => {
        console.log(e.target.value.length);
        if (e.target.value.length > 20) {
            if (!maxCharsToggle) {
                setMaxCharsToggle(true);
                setTimeout(() => setMaxCharsToggle(false), 2000);
            }
            return;
        }

        setName(e.target.value);
        updateStep(index, {...step, name: e.target.value});
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
        updateStep(index, {...step, type: e.target.value});
    }

    return (
        <div className='feature-union-grid-step'>
            <button onClick={() => deleteStep(index)}>❌</button>
            <input value={step.name} onChange={handleNameChange} />
            <input value={step.type} onChange={handleTypeChange} />
        </div>
    )
}

export default FUStep;