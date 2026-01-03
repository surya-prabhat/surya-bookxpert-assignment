import LoginPage from './login/LoginPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './dashboard/DashboardPage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/dashboard'
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    } />
            </Routes>
        </BrowserRouter>
    )
}

export default App;