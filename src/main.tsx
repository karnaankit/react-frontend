import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/root'
import Test from './routes/test'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/*",
        element: <App/>
    },
    {
        path: "/test",
        element: <Test/>
    }
])

// @ts-ignore
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)