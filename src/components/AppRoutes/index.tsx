import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ROUTES from 'constants/routes'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            {ROUTES.map(({ route, page }) => (
                <Route path={route} element={page} />
            ))}
        </Routes>
    )
}

export default AppRoutes
