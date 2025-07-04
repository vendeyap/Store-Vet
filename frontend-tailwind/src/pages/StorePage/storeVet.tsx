import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string;
};

export const StoreVet = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("http://localhost:4000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.error("❌ Error al cargar productos:", err));
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-200 via-emerald-300 to-teal-500 p-6">
            <h1 className="text-4xl font-bold text-white text-center mb-10">🛒 Productos para Mascotas</h1>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map(product => (
                    <div key={product._id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-emerald-700">{product.name}</h2>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <p className="mt-2 text-teal-600 font-semibold">${product.price.toFixed(2)}</p>
                            <button className="mt-3 w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">Agregar al carrito</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
