"use client"
import React from 'react'
import { useForm } from "react-hook-form"
import { getRequest, postRequest } from '@/components/helpers/apiRequests'
import { FormInputField } from '../../components/ui/FormInputField'


export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const response = await postRequest("http://localhost:3000/api/login", data);
    console.log("Login data:", data);
    console.log("Login response:", response);
  };

  return (
    <main className="bg-gradient-to-r from-indigo-500 to-blue-500 min-h-screen flex items-center justify-center p-4 relative">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-8 z-10 relative">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Welcome Back!</h2>
        <div className="space-y-4">
          <FormInputField
            type="email"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
            error={errors.email}
          />
          <FormInputField
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            error={errors.password}
          />
          <button
            onClick={handleSubmit(onSubmit)}
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </div>
        <div className="mt-4 text-center">
          <a href="#" className="text-indigo-600 hover:underline">
            Forgot your password?
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-[-50px] right-[-50px] w-40 h-40 bg-indigo-300 opacity-30 rounded-full"></div>
      <div className="absolute bottom-[-60px] left-[-60px] w-48 h-48 bg-blue-300 opacity-30 rounded-full"></div>
    </main>
  );
}
