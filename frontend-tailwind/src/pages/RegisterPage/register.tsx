import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = { email: string; password: string; confirmPassword: string; };

export const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        console.log("Registro:", data);
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime-200 via-emerald-300 to-teal-500 px-4 py-12">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-extrabold text-emerald-700 text-center mb-6">🐶 Regístrate</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div>
                        <label className="block text-teal-800 font-medium mb-1">Correo</label>
                        <input {...register("email", { required: "Campo obligatorio" })} className="w-full px-4 py-2 border border-emerald-300 rounded-xl bg-emerald-50" />
                        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-teal-800 font-medium mb-1">Contraseña</label>
                        <input type="password" {...register("password", { required: "Campo obligatorio" })} className="w-full px-4 py-2 border border-emerald-300 rounded-xl bg-emerald-50" />
                    </div>
                    <div>
                        <label className="block text-teal-800 font-medium mb-1">Confirmar Contraseña</label>
                        <input type="password" {...register("confirmPassword", {
                            validate: value => value === watch("password") || "Las contraseñas no coinciden"
                        })} className="w-full px-4 py-2 border border-emerald-300 rounded-xl bg-emerald-50" />
                        {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword.message}</p>}
                    </div>
                    <button type="submit" className="w-full py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600">Registrarse</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">¿Ya tienes cuenta? <a href="/login" className="text-emerald-700 font-semibold hover:underline">Inicia sesión</a></p>
            </div>
        </div>
    );
};
