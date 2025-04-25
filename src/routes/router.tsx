import {FC} from "react";
import {Routes, Route} from "react-router-dom";

import {RouterLayout} from "../pages/common/RouterLayout.tsx";
import {Login} from "../pages/LoginPage/login.tsx";
import {Register} from "../pages/RegisterPage/register.tsx";
import {StoreVet} from "../pages/StorePage/storeVet.tsx";




export const AppRouter: FC = () => {
        return (
            //esto lleva el layout de home en router layout  los componentes que lleven el menu y por fuera como el LoginPage que no muestra el navbar
            <Routes>
                <Route path="/" element={<RouterLayout/>}>

                </Route>
                 <Route path="/" element={<StoreVet />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>

            </Routes>
        )
    }
;