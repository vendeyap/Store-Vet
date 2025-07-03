import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = { email: string; password: string; };

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log("Login:", data);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-200 via-emerald-300 to-teal-500 px-4 py-12">
            <div className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
                <div className="md:w-1/2 bg-emerald-100 flex items-center justify-center p-8">
                    <img src="/pet-login.png" alt="Mascota" className="max-w-[280px] w-full" />
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <h2 className="text-3xl font-extrabold text-emerald-700 text-center mb-6">🐾 Bienvenido</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                            <label className="block text-teal-800 font-medium mb-1">📧 Correo</label>
                            <input {...register("email", { required: "Campo obligatorio" })} className="w-full px-4 py-2 border border-emerald-300 rounded-xl bg-emerald-50" />
                            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block text-teal-800 font-medium mb-1">🔒 Contraseña</label>
                            <input type="password" {...register("password", { required: "Campo obligatorio" })} className="w-full px-4 py-2 border border-emerald-300 rounded-xl bg-emerald-50" />
                            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="w-full py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600">Ingresar</button>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">¿No tienes cuenta? <a href="/register" className="text-emerald-700 font-semibold hover:underline">Regístrate</a></p>
                </div>
            </div>
        </div>
    );
};
