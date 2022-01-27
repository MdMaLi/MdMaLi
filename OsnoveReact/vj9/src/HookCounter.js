import React, {Fragment, useState } from 'react'

const HookCounter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <Fragment>
            {' '}
            <h1>Counter: </h1>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter + 1)}>+</button>
        </Fragment>
    )
}

export default HookCounter
