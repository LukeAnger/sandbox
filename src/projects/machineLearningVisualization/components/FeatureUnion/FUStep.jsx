import React, { useState } from 'react';

const FUStep = ({index, step, updateStep, deleteStep}) => {
    const [ name, setName ] = useState(step.name);
    const [ type, setType ] = useState(step.type);
    const [ maxCharsToggle, setMaxCharsToggle ] = useState(false);

    const maxCharsModal = (word) => (
        <div className='max-chars-modal'>
            <p>Step {word} must be less than 20 characters</p>
        </div>
    )

    const handleChange = (e, toChange) => {
        console.log(e.target.value.length);
        if (e.target.value.length > 20) {
            if (!maxCharsToggle) {
                setMaxCharsToggle(true);
                setTimeout(() => setMaxCharsToggle(false), 2000);
            }
            return;
        }

        if (toChange === 'name') {
            setName(e.target.value);
            updateStep(index, {...step, name: e.target.value});
        } else if (toChange === 'type') {
            setType(e.target.value);
            updateStep(index, {...step, type: e.target.value});
        }
    }

    return (
        <div className='feature-union-grid-step'>
            <button onClick={() => deleteStep(index)}>❌</button>
            
            
            <div style={{maxWidth: '150px'}}>
                <input style={{width: '100%'}} value={step.name} onChange={e => handleChange(e, 'name')} />
                {maxCharsToggle && maxCharsModal('names')} 
            </div>
            <div style={{maxWidth: '150px'}}>
                <input style={{width: '100%'}} value={step.type} onChange={e => handleChange(e, 'type')} />
                {maxCharsToggle && maxCharsModal('types')}
            </div>
        </div>
    )
}

export default FUStep;