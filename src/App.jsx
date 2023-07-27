import React, { useState, useEffect } from 'react';

import { Sandbox, MachineLearningVisualization, AnimatedBackgrounds } from './projects'
const lsIndex = localStorage.getItem('sandboxProjectIndex') || 0
console.log('LS INDEX: ', lsIndex)
const logo = 'https://images.unsplash.com/photo-1688872132071-64cd1fa34243?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80'
const App = () => {

    const projects = ['sandbox', 'machineLearningVisualization', 'animatedBackgrounds']
    const [ project, setProject ] = useState(projects[lsIndex])

    const changeProject = (e) => {
        const newIndex = projects.indexOf(e.target.value)
        console.log('NEW INDEX: ', newIndex)
        setProject(projects[newIndex])
        localStorage.setItem('sandboxProjectIndex', newIndex)
    }
    return (
        <>
            <header>
                <img id='logo' src={logo} alt='logo' />
                <h1> Sandbox </h1>
                <select value={project} onChange={changeProject}>
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