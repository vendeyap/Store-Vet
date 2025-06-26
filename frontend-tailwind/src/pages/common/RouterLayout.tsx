import { Outlet } from "react-router-dom";

export const RouterLayout = () => {
    return (
        <div>
            {/* Aquí podrías tener navbar o menú */}
            <Outlet />
        </div>
    );
};



//nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta

//Ruta layout para utilizar