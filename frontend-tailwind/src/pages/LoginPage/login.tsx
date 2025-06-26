import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
    email: string;
    password: string;
};

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log("Login info:", data);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-200 via-emerald-300 to-teal-500 px-4 py-12">
            <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
                {/* Imagen decorativa */}
                <div className="md:w-1/2 bg-emerald-100 flex items-center justify-center p-8">
                    <img
                        src="/huellas.png"
                        alt="Veterinaria"
                        className="max-w-[280px] w-full"
                    />
                </div>

                {/* Formulario */}
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-3xl font-extrabold text-emerald-700 text-center mb-6">
                        🐾 Bienvenido a Vet Store
                    </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="block text-teal-800 font-medium mb-1">
                                📧 Correo electrónico
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: "Campo obligatorio" })}
                                placeholder="correo@ejemplo.com"
                                className="w-full px-4 py-2 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 bg-emerald-50"
                            />
                            {errors.email && (
                                <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-teal-800 font-medium mb-1">
                                🔒 Contraseña
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: "Campo obligatorio" })}
                                placeholder="********"
                                className="w-full px-4 py-2 border border-emerald-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 bg-emerald-50"
                            />
                            {errors.password && (
                                <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-md hover:from-emerald-600 hover:to-teal-700 transition duration-300"
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    <p className="mt-6 text-center text-gray-600 text-sm">
                        ¿No tienes cuenta?{" "}
                        <a
                            href="/register"
                            className="text-emerald-700 font-semibold hover:underline"
                        >
                            Regístrate aquí
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
