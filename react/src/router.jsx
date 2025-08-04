import { createBrowserRouter, Navigate } from 'react-router-dom';
import Register from './views/auth/Register.jsx';
import Login from './views/auth/Login.jsx';
import AuthLayout from './components/AuthLayout.jsx';

const router = createBrowserRouter([

    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/login" replace/>
            },
            {
                path: '/register',
                element: <Register />
            },

            {
                path: '/login',
                element: <Login />
            },
        ]
    }

])

export default router;