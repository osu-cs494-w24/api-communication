import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import SearchPage from './pages/Search'
import PostPage from './pages/Post'

import './index.css'

const router = createBrowserRouter([
    { path: "/search", element: <SearchPage /> },
    { path: "/post", element: <PostPage /> },
    { path: "/", element: <Navigate to="/search" replace /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
