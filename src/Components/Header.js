import React from 'react'
import { useLocation, useNavigate , Route} from 'react-router'

export default function Header() {
    const location = useLocation()
    const  navigate = useNavigate()
    function pathMathRoute(){
        if(Route === location.pathname)
            return true}
  return (
    <div className='bg-white border-b shadow-sm sticky-top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
        <div>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fuxwing.com%2Freal-estate-agent-realtor-icon%2F&psig=AOvVaw2mUNmWu51dpDgArUi3SGut&ust=1716556461110000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj19PLto4YDFQAAAAAdAAAAABAE' alt='logo'
            className='h-5 cursor-pointer'
            onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className='flex space-x-10'>
                <li className={`py-3 text-sm cursor-pointer font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`} onClick={()=>navigate("/")}>Home</li>
                <li className={`py-3 text-sm cursor-pointer font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/Offers") && "text-black border-b-red-500"}`}onClick={()=>navigate("/Offers")}>Offers</li>
                <li className={`py-3 text-sm cursor-pointer font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/SignIn") && "text-black border-b-red-800"}`}onClick={()=>navigate("/SignIn")}>Sign In</li>
                
            </ul>
        </div>
      </header>
    </div>
  )
}
