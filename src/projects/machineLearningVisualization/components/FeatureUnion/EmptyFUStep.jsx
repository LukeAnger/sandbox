import React, { useState } from 'react';


const EmptyFUStep = ({step, updateStep}) => {
       
    return (
        <div className='feature-union-grid-step'>
            <input value={step.name} onChange={(e) => updateStep(e.target.value)} />
            <input value={step.type} onChange={(e) => updateStep(e.target.value)} />
        </div>
    )
}

export default EmptyFUStep;