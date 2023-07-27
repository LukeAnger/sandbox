import React, { useState } from 'react';

import { Pipeline, Step, ColumnTransformer, FeatureUnion, SearchModal } from './components'

const initComponent = localStorage.getItem('MLVIScomponent') || 'Pipeline'

const MachineLearningVisualization = () => {
    const components = [ 'Pipeline', 'Step', 'Column Transformer', 'Feature Union', 'Search Modal' ]
    const [ component, setComponent ] = useState(initComponent)

    const changeComponent = (e) => {
        const newComponent = e.target.value
        localStorage.setItem('MLVIScomponent', newComponent)
        setComponent(newComponent)
    }

    return (
        <>
            <div className='project-header'>
                <h2 >Machine Learning Visualization</h2>
                <select value={component} onChange={changeComponent}>
                    {components.map(component => <option key={component} value={component}>{component}</option>)}
                </select>
            </div>
            <div className='project-main'>
                {component === 'Pipeline' && <Pipeline />}
                {component === 'Step' && <Step />}
                {component === 'Column Transformer' && <ColumnTransformer />}
                {component === 'Feature Union' && <FeatureUnion />}
                {component === 'Search Modal' && <SearchModal />}
            </div>
        </>
    )
}

export default MachineLearningVisualization;