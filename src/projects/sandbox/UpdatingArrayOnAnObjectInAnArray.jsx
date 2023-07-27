const [ state, setState ] = useState([
    { id: 1, array: [1, 2, 3] },
    { id: 2, array: [4, 5, 6] },
    { id: 3, array: [7, 8, 9] },
])

const addNumber = (index, num) => {
    const newState = [...state]
    newState[index].array.push(num)
    setState(newState)
}

return (
    <>
        <div>{state[2].array[state[2].array.length-1]}</div>
        <button onClick={() => addNumber(2, 10)}>Add Number</button>
    </>
)