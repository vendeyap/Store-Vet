import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/LoginPage/login.tsx';
import { Register } from './pages/RegisterPage/register.tsx';

export default function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
}
