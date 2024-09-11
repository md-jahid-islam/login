import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
 function ResetPass() {
 //=============variable part start
 const [Email , setEmail]                        = useState ('')
 const [EmailError , setEmailError]              = useState ('')
 //============ function part start 
 const handelEmail = (e)=>{
    setEmail(e.target.value)
    setEmailError('')
 }

 //============= submit part start

 const handelsubmit = (e)=>{
    e.preventDefault()
    if(!Email){
        setEmailError('please enter your error')
       }
       else{
        toast.success('🦄 Reset Success easy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
       }
       
 }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form onSubmit={handelsubmit}
        className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Reset Password</h2>
         <div className="mb-4">
          <label  htmlFor="input"  className="block text-gray-700 font-semibold mb-2" >Enter Your Email</label>
         <input onChange={handelEmail} type="text"id="input"className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-200 ease-in-out" placeholder="Enter your Email" />
          <p className=' text-red-500 font-bold'>{EmailError}</p>
        </div>
        <button type="submit" className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg shadow-md hover:from-purple-500 hover:to-pink-500 hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"  > Reset Forget </button>
        <Link to='#'> allredy forget accound use<span></span> </Link>
      </form>
    </div>
  );
 }
 export default ResetPass;