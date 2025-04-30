
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "./routes/router.tsx";
import {FC} from "react";


const App: FC = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>

    );
}

export default App;

