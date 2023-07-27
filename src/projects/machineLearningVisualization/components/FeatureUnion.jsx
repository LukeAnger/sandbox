import React, { useState } from 'react';

import EmptyFUStep from './FeatureUnion/EmptyFUStep.jsx';
import FUStep from './FeatureUnion/FUStep.jsx';
/**
 * 
 * const transforms = {
 *   id: Number,
 *   name: String,
 *   steps: [
 *     {
 *      name: String,
 *      type: String,
 *      },
 * }
 */

// initial feature unions will have two "empty steps" that will then be updated after a user adds a step

const initialFeatureUnion = {
    id: 0,
    name: 'Data FeatUnion',
    steps: [
        {
            name: '',
            type: '',
        },
        {
            name: '',
            type: '',
        },
    ],
}

const FeatureUnion = () => {
    const [ transforms, setTransforms ] = useState(initialFeatureUnion)
    const [ modal, setModal ] = useState(false)

    const numSteps = transforms.steps.length
    const numRows = Math.ceil(Math.sqrt(numSteps))
    const numCols = Math.ceil(numSteps / numRows)

    const addStep = () => {
        const newStep = {
            name: 'edit step name',
            type: 'edit step type',
        }
        setTransforms({...transforms, steps: [...transforms.steps, newStep]})
    }

    const deleteStep = (index) => {
        if (transforms.steps.length === 2) {
            alert('Feature Union must have at least two steps')
            return
        }
        const newSteps = transforms.steps.filter((step, i) => i !== index)
        setTransforms({...transforms, steps: newSteps})
    }

    const updateStep = (index, updatedStep) => {
        const newSteps = transforms.steps.map((step, i) => {
            if (i === index) {
                return updatedStep
            }
            return step
        })
        setTransforms({...transforms, steps: newSteps})
    }

    return (
        <div className='feature-union'>
            <div className='feature-union-header'>
                <h4>{transforms.name}</h4>
                <button onClick={addStep}>➕</button>
            </div>
            <div className='feature-union-grid-container'>    
                <div 
                    className='feature-union-grid'
                    style={{
                        gridTemplateColumns: `repeat(${numCols}, ${1/numCols}fr)`,
                        gridTemplateRows: `repeat(${numRows}, ${1/numRows}fr)`,
                    }}
                >
                { transforms.steps.map((step, i) => { 
                    return <FUStep key={i} index={i} step={step} updateStep={updateStep} deleteStep={deleteStep} />
                })
                }
                </div>
            </div>
        </div>
    )
}

export default FeatureUnion;