import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "../pages/common/RouterLayout.tsx";
import { Login } from "../pages/LoginPage/login.tsx";
import { Register } from "../pages/RegisterPage/register.tsx";
import { StoreVet } from "../pages/StorePage/storeVet.tsx";

export const AppRouter: FC = () => {
    return (
        <Routes>
            {/* Rutas públicas sin layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas protegidas o con layout */}
            <Route path="/" element={<RouterLayout />}>
                <Route index element={<StoreVet />} />
                {/* Aquí podrías agregar más rutas hijas si quieres */}
            </Route>
        </Routes>
    );
};
