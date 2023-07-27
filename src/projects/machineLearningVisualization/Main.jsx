import React, { useState } from 'react';

import { Pipeline, Step, ColumnTransformer, FeatureUnion} from './components'

const MachineLearningVisualization = () => {
    const components = [ 'pipeline', 'step', 'columnTransformer', 'featureUnion', 'drawIO' ]
    const [ component, setComponent ] = useState(components[3])
    return (
        <>
            <div className='project-header'>
                <h2 >Machine Learning Visualization</h2>
                <select value={component} onChange={e => setComponent(e.target.value)}>
                    {components.map(component => <option key={component} value={component}>{component}</option>)}
                </select>
            </div>
            <div className='project-main'>
                {component === 'pipeline' && <Pipeline />}
                {component === 'step' && <Step />}
                {component === 'columnTransformer' && <ColumnTransformer />}
                {component === 'featureUnion' && <FeatureUnion />}
            </div>
        </>
    )
}

export default MachineLearningVisualization;