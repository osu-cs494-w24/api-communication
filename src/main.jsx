import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Root from './pages/Root'
import FetchSearch from './pages/FetchSearch'
import FetchPost from './pages/FetchPost'
import QuerySearch from './pages/QuerySearch'
import QueryPost from './pages/QueryPost'
import RouterOrgRepos from './pages/RouterOrgRepos'
import RouterPost from './pages/RouterPost'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "fetch-search", element: <FetchSearch /> },
            { path: "fetch-post", element: <FetchPost /> },
            { path: "query-search", element: <QuerySearch /> },
            { path: "query-post", element: <QueryPost /> },
            { path: "org-repos/:org", element: <RouterOrgRepos /> },
            { path: "router-post", element: <RouterPost /> },
            { index: true, element: <Navigate to="/fetch-search" replace /> }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
