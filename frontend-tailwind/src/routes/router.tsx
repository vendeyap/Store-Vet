import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "../pages/common/RouterLayout.tsx";
import { Login } from "../pages/LoginPage/login.tsx";
import { Register } from "../pages/RegisterPage/register.tsx";
import { StoreVet } from "../pages/StorePage/storeVet.tsx";

export const AppRouter: FC = () => {
   return (
    <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/" element={<RouterLayout />}>
             <Route path="/" element={<StoreVet />} />

         </Route>
       </Routes>
   );
};


