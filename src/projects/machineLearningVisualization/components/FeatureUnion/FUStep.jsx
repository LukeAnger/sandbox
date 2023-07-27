import React, { useState } from 'react';

const FUStep = ({index, step, updateStep, deleteStep}) => {
    const [ maxCharsToggle, setMaxCharsToggle ] = useState(false);

    const maxCharsModal = () => {
        const node = document.createElement('div');
        node.className = 'feature-union-max-chars-modal';
        node.innerHTML = '20 characters max';
        return node;
    }

    const handleChange = (e, toChange) => {
        console.log('INPUT NODE TARGET: ', e.target)
        const node = e.target.parentNode;
        console.log('INPUT NODE: ', node.parentNode, 'EVENT: ', e)
        if (e.target.value.length > 20) {
            if (!maxCharsToggle) {
                node.appendChild(maxCharsModal(toChange));
                setMaxCharsToggle(true);
                // setTimeout(() => {
                //     setMaxCharsToggle(false);
                //     node.removeChild(node.lastChild);
                // }, 3000);
            }
            return;
        }

        if (toChange === 'name') {
            updateStep(index, {...step, name: e.target.value});
        } else if (toChange === 'type') {
            updateStep(index, {...step, type: e.target.value});
        }
    }

    return (
        <div className='feature-union-grid-step'>
            <button onClick={() => deleteStep(index)}>❌</button>
            
            <div >
                <input placeholder='change this step name' value={step.name} onChange={e => handleChange(e, 'name')} />
                {/* {maxCharsToggle && maxCharsModal('names')}  */}
            </div>
            <div >
                <input placeholder='search transformers' value={step.type} onChange={e => handleChange(e, 'type')} />
                {/* {maxCharsToggle && maxCharsModal('types')} */}
            </div>
        </div>
    )
}

export default FUStep;