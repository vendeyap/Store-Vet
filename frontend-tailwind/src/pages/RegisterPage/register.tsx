import {FC} from "react";
import {useForm} from "react-hook-form";

type FormReg = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export const Register: FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormReg>();

    const onSubmit = (data: FormReg) => {
        console.log('registro exitoso:', data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Crear cuenta</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Nombre */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                        <input
                            {...register('name', { required: 'El nombre es obligatorio' })}
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'El correo es obligatorio',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Correo no válido',
                                },
                            })}
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'La contraseña es obligatoria',
                                minLength: {
                                    value: 6,
                                    message: 'Debe tener al menos 6 caracteres',
                                },
                            })}
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Confirmar Contraseña */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                        <input
                            type="password"
                            {...register('password_confirmation', {
                                required: 'Confirma tu contraseña',
                                validate: value => value === watch('password') || 'Las contraseñas no coinciden',
                            })}
                            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password_confirmation && (
                            <p className="text-red-500 text-sm mt-1">{errors.password_confirmation.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Registrarse
                    </button>
                    <p className="text-sm text-center mt-4">
                        ¿Ya tienes cuenta?{' '}
                        <a href="/frontend/public" className="text-blue-600 hover:underline">
                            Inicia sesión
                        </a>
                    </p>

                </form>
            </div>
        </div>
    );
};
