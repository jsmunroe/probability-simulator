import { NavLink } from "react-router-dom";

export default function Layout({children}) {
    return <div className="layout">
        <aside>
            <ul>
                <li><NavLink to="probability-simulator/monty">Monty Hall</NavLink></li>
                <li><NavLink to="probability-simulator/classroom">Classroom</NavLink></li>
            </ul>
        </aside>
        {children}
    </div>
}   