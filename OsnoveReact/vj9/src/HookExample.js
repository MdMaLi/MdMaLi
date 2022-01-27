import React,{useState} from 'react'

export default function HookExample() {
    const [todo, setTodo] = useState("Learn hooks")
    return (<><h3>{todo}</h3>
    <button onClick={() => setTodo("Done")}>Done</button>
    </>)
}
