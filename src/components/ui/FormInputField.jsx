"use client";
import React from 'react';

export function FormInputField({ label, id, type, placeholder, onChange, onBlur, name, ref, error }) {
    return <div>
        <input
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none" />
        {error && <p className='text-red-400 text-sm'>{error.message}</p>}

    </div>;
}
