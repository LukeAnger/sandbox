import React, { useState, useEffect } from 'react';

import { Sandbox, MachineLearningVisualization, AnimatedBackgrounds } from './projects'

const App = () => {

    const projects = ['sandbox', 'machineLearningVisualization', 'animatedBackgrounds']
    const [ project, setProject ] = useState(projects[1])

    return (
        <>
            <header>
                <h1> Personal Sandbox </h1>
                <select value={project} onChange={e => setProject(e.target.value)}>
                    {projects.map(project => <option key={project} value={project}>{project}</option>)}
                </select>
            </header>
            <main>
                {project === 'sandbox' && <Sandbox />}
                {project === 'machineLearningVisualization' && <MachineLearningVisualization/>}
                {project === 'animatedBackgrounds' && <AnimatedBackgrounds/>}
            </main>
        </>
    )
}

export default App;