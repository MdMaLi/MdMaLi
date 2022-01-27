import './App.css'
import Countdown from './Countdown.js'
import Car from './Car'
import Person from './Person'
import HookExample from './HookExample'
import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/car">car</Link>
                        </li>
                        <li>
                            <a href="/person">person</a>
                        </li>
                        <li>
                            <a href="/classcounter">classcounter</a>
                        </li>
                        <li>
                            <a href="/hookcounter">hookcounter</a>
                        </li>
                    </ul>
                </nav>
                <Route path="/car" component={Car} />
                <Route path="/person">
                    <Person />
                </Route>
                <Route path="/classcounter">
                    <ClassCounter />
                </Route>
                <Route path="/hookcounter">
                    <HookCounter />
                </Route>
            </BrowserRouter>
        </>
    )
}

export default App
