import { NavLink, Outlet } from 'react-router-dom'

export default function Root() {
    return (
        <div className="page-container">
            <nav>
                <ul>
                    <li><NavLink to="/fetch-search">Search with fetch()</NavLink></li>
                    <li><NavLink to="/fetch-post">Post with fetch()</NavLink></li>
                    <li><NavLink to="/query-search">Search with Query</NavLink></li>
                    <li><NavLink to="/query-post">Post with Query</NavLink></li>
                    <li><NavLink to="/router-search">Search with React Router</NavLink></li>
                    <li><NavLink to="/router-post">Post with React Router</NavLink></li>
                </ul>
            </nav>
            <main><Outlet /></main>
        </div>
    )
}
