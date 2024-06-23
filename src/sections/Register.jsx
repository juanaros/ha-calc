import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
const { register, handleSubmit, formState: { errors } } = useForm();

const onSubmit = data => {
    console.log(data);
};

return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700">Registrate en Civil App</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-1">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
            </label>
            <input
            type="text"
            id="name"
            {...register('name', {
                required: 'Name is required'
            })}
            className={`w-full px-3 py-2 border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
        </div>

        <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
            </label>
            <input
            type="email"
            id="email"
            {...register('email', {
                required: 'Email is required',
                pattern: {
                value: /^\S+@\S+$/i,
                message: 'Entered value does not match email format'
                }
            })}
            className={`w-full px-3 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
        </div>

        <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Contraseña
            </label>
            <input
            type="password"
            id="password"
            {...register('password', {
                required: 'Password is required',
                minLength: {
                value: 6,
                message: 'Password must have at least 6 characters'
                }
            })}
            className={`w-full px-3 py-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
        </div>

        <button
            type="submit"
            className='w-full px-4 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-sm py-2.5 text-center mb-2'
            >
            Registrarse
        </button>
        </form>
        <p className="text-center text-sm text-gray-600">
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login" className="text-blue-500 hover:text-blue-600">
            Inicia sesión
        </Link>
        </p>
    </div>
    </div>
);
};

export default Register;
