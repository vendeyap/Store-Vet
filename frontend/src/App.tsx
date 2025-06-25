
//import {BrowserRouter} from "react-router-dom";
//import {AppRouter} from "./routes/router.tsx";
import {FC} from "react";


const App: FC = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <h1 className="text-4xl font-bold mb-4">🎉 Tailwind funciona</h1>
            <p className="text-lg">Tu frontend ya tiene estilos bonitos ✨</p>
            <button className="mt-6 px-4 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
                ¡Probado!
            </button>
        </div>
   //     <BrowserRouter>
  //          <AppRouter/>
  //      </BrowserRouter>

    );
}

export default App;

