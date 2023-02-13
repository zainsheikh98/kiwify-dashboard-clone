import React from 'react'
import 'styles/global.css'
import 'styles/app.sass'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from 'components'

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    )
}

export default App
