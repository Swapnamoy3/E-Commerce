import React from 'react'


function Step1(){
    return (
        <div className="form-step absolute w-full space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <div>
                <input type="text" placeholder="Full Name" 
                    className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none"/>
            </div>
            <div>
                <input type="email" placeholder="Email Address" 
                    className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none"/>
            </div>
            <div>
                <input type="tel" placeholder="Phone Number" 
                    className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none"/>
            </div>
        </div>
    )
}

function Step2(){
    return (
        <div className="form-step absolute w-full space-y-6 hidden">
            <h2 className="text-3xl font-bold text-gray-800">Account Setup</h2>
            <div>
                <input type="text" placeholder="Username" 
                    className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none"/>
            </div>
            <div>
                <input type="password" placeholder="Password" 
                    className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none"/>
            </div>
            <div>
                <input type="password" placeholder="Confirm Password" 
                    className="w-full p-4 border-b-2 border-gray-200 focus:border-purple-600 outline-none"/>
            </div>
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

function FormSteps(){
    return (
        <div className="flex justify-center mb-8 space-x-4">
            <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">1</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">2</div>
            <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center">3</div>
        </div>
    )
}
function Progressbar(){
    return (
        <div className="h-2 bg-gray-100">
            <div className="h-full bg-purple-600 transition-all duration-300" style={{width: '33%'}}></div>
        </div>
    )
}

export default function page() {
  return (
    <>
    
    <main className="bg-gradient-to-br from-purple-900 to-blue-900 min-h-screen flex items-center justify-center p-4">
    
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
          {/*<!-- Progress Bar -->*/}
          <Progressbar/>

          <div className="p-8">
              {/*<!-- Progress Steps -->*/}
                <FormSteps/>

              {/*<!-- Form Steps -->*/}
              <div className="relative h-96 overflow-hidden">
                  {/*<!-- Step 1: Personal Info -->*/}
                    <Step1/>

                  {/*<!-- Step 2: Account Details -->*/}
                    <Step2/>

                  {/*<!-- Step 3: Preferences -->*/}
                    <Step3/>
                  
              </div>

              {/*<!-- Navigation Buttons -->*/}
              <div className="mt-8 flex justify-between">
                  <button className="text-gray-500 hover:text-purple-600 font-medium px-6 py-2">
                      Previous
                  </button>
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors">
                      Next Step
                  </button>
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
