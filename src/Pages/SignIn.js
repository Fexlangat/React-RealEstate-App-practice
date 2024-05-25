import React,{useState} from 'react'
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [showPassword, setShowPassword] = useState(false)
  const {email, password} = formData;

  function onchange(e){
    setFormData((prevState)=> ({
      ...prevState, 
      [e.target.id]: e.target.value
    }))
    
     
  }
  return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
        <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'> 
          <img src='https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='key' className='w-full rounded-2xl'/>
        </div>
        <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20' >
          <form >
            <input type='email' id='email' value={email} onChange={onchange} placeholder='Enter email...'
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '/>

            
            <div className='relative'>
            <input type={showPassword ?  "text" : "password"} id='password' value={password} onChange={onchange} placeholder='Password...'
            className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '/>
            {showPassword ? 
            (<FaRegEyeSlash className='absolute right-3 top-3 text-xl cursor-pointer' onClick={()=> setShowPassword((prevState)=> !prevState)}/>) : 
            (<IoEyeOffOutline 
            />
            )}
            </div>

            
          </form>
        </div>
      </div>
    </section>
  )
}
