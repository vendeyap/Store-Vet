import { FC } from "react";

export const StoreVet: FC = () => {
    return (
        <div>
            <h1>Store</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};