import { Outlet } from "react-router-dom";

export const RouterLayout = () => {
    return (
        <>
            <nav>/* Aquí tu navbar o menú */</nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};



//nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta

//Ruta layout para utilizar