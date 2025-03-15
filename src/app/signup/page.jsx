"use client"
import React from 'react'
import { useForm } from "react-hook-form"
import { getRequest, postRequest } from '@/components/helpers/apiRequests'
import { FormInputField } from '../../components/ui/FormInputField'

function Step1({register, errors}){
    return (
        <div className="form-step absolute w-full space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <FormInputField 
                type = {"email"} 
                placeholder={"Name"}
                {...register("name", {required: "Name is required"})}
                error={errors.name}
            />
            <FormInputField 
                type = {"email"} 
                placeholder={"Email Address"}
                {...register("email", {required: "Email is required"})}
                error={errors.email}
            />
            <FormInputField 
                type = {"tel"} 
                placeholder={"Phone Number"}
                {...register("phone", {required: "Phone Number is required"})}
                error={errors.phone}
            />
        </div>
    )
}



function Step2({register, errors, watch}){
    const password = watch("password");
    return (
        <div className="form-step absolute w-full space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Account Setup</h2>
            <FormInputField 
                type = {"text"} 
                placeholder={"Username"}
                {...register("username", {required: "Username is required"})}
                error={errors.username}
            />
            <FormInputField 
                type = {"password"} 
                placeholder={"Password"}
                {...register("password", {required: "Password is required"})}
                error={errors.password}
            />
            <FormInputField 
                type = {"password"} 
                placeholder={"Confirm Password"}
                {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => value === password || "Passwords do not match"
                })}
                error={errors.confirmPassword}
            />
        </div>
    )
}

function Step3(){
    return (
        <div className="form-step absolute w-full space-y-6 hidden">
            <h2 className="text-3xl font-bold text-gray-800">Preferences</h2>
            <div className="space-y-4">
                <label className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded"/>
                    <span className="text-gray-700">Subscribe to Newsletter</span>
                </label>
                <label className="flex items-center space-x-3 p-4 hover:bg-gray-50 rounded-xl cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600 rounded"/>
                    <span className="text-gray-700">Receive Special Offers</span>
                </label>
            </div>
        </div>
    )
}



function FormSteps({formNumber}){
    return (
        <div className="flex justify-center mb-8 space-x-4">
            <div className={`w-8 h-8 rounded-full ${formNumber === 1 ? "bg-purple-600" : "bg-gray-200"} text-white font-bold flex items-center justify-center`}>1</div>
            <div className={`w-8 h-8 rounded-full ${formNumber === 2 ? "bg-purple-600" : "bg-gray-200"} text-white font-bold flex items-center justify-center`}>2</div>
            <div className={`w-8 h-8 rounded-full ${formNumber === 3 ? "bg-purple-600" : "bg-gray-200"} text-white font-bold flex items-center justify-center`}>3</div>
        </div>
    )
}
function Progressbar({progress}){
    return (
        <div className="h-2 bg-gray-100">
            <div className="h-full bg-purple-600 transition-all duration-300" style={{width: `${progress}%`}}></div>
        </div>
    )
}

export default function page() {
    const {
        register,
        handleSubmit,
        trigger,
        watch,
        formState: { errors },
      } = useForm();
    
    const [formNumber, setFormNumber] = React.useState(1);

    async function onNext(){
        const isValid = await trigger();
        if(!isValid) return;
        setFormNumber(() => Math.min(MAX_PAGE, formNumber + 1));
    }

    function onPrevious(){
        setFormNumber(() => Math.max(MIN_PAGE, formNumber - 1));
    }

    async function onSubmit(data){

        const response = await postRequest("http://localhost:3000/api/signup", data);
        console.log(response);
        console.log(data);
    }
    
    const inactive = `text-gray-500 hover:text-purple-600 font-medium px-6 py-2`;
    const active = "bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors";
    const MAX_PAGE = 2;
    const MIN_PAGE = 1;
  return (
    <>
    
    <main className="bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen flex items-center justify-center p-4">
    
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          {/*<!-- Progress Bar -->*/}
          <Progressbar progress = {(100/3) * formNumber}/>

          <div className="p-8">
              {/*<!-- Progress Steps -->*/}
                <FormSteps formNumber = {formNumber}/>

              {/*<!-- Form Steps -->*/}
              <div className="relative h-96 overflow-hidden">
                  {/*<!-- Step 1: Personal Info -->*/}
                    {formNumber === 1 && <Step1 register = {register} errors = {errors}/>}

                  {/*<!-- Step 2: Account Details -->*/}
                    {formNumber === 2 && <Step2 register={register} errors={errors} watch = {watch}/>}

                  {/*<!-- Step 3: Preferences -->*/}
                    {/* <Step3/> */}
                  
              </div>

              {/*<!-- Navigation Buttons -->*/}
              <div className="mt-8 flex justify-between">
                    <button 
                        onClick={onPrevious} 
                        className={formNumber === MIN_PAGE ? inactive : active}>
                        Previous
                    </button> 
                    {formNumber != MAX_PAGE &&<button 
                        onClick={onNext}
                        className= { active }>
                        Next
                    </button>}

                    {formNumber == MAX_PAGE &&<button 
                        onClick={handleSubmit(onSubmit)}
                        className= { active }>
                        Finish
                    </button>}

              </div>
          </div>

          {/*<!-- Decorations -->*/}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 opacity-20 rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-100 opacity-20 rounded-full transform -translate-x-24 translate-y-24"></div>
      </div>

  </main>
  </>
  )
}
