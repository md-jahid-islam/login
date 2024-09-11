 import { Link, useNavigate } from 'react-router-dom';
 import { Bounce, toast } from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css';
  import { CgEyeAlt } from "react-icons/cg";
  import { FiEyeOff } from "react-icons/fi";
  import { useState, CSSProperties } from "react";
  import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
  import { PulseLoader } from 'react-spinners';
import Login from './Login';
 const Register = () => {
 //================= react variable part start
  const [name , setname]                              = useState ('')
  const [nameError , setnameError]                    = useState('')
  const [Email , setEmail]                            = useState ('')
  const [EmailError , setEmailError]                  = useState ('')
  const [password , setPassword]                      = useState ('')
  const [passwordError , setPasswordError]            = useState ('')
  const [Confrim , setConfrim]                        = useState ('')
  const [ConfrimError , setConfrimError]              = useState ('') 
  const [show ,setshow]                               = useState (false)
  const Navigate                                      = useNavigate ()
 //================= react variable part end
 //================ firebase variable part start
 const auth = getAuth();
 const [spinners , setspinners]                       = useState (false)


 //================ firebase variable part end

 //================function part start
 const handelname = (e) =>{
  setname(e.target.value)
  setnameError('')
 }
  const handelEmail = (e)=>{
  setEmail(e.target.value)
  setEmailError('')

  }
 const handelPasword = (e)=>{
 setPassword(e.target.value)   
 setPasswordError('')

 }
 const handelConfrim = (e)=>{
    setConfrim(e.target.value)
    setConfrimError('')
 }

 //=========== show function part start
  const handelshow = ()=>{
    setshow(!show)
  }


  //=========== show function part end

 
 //================ submit part start
  const handelsubmit = (e)=>{
   e.preventDefault()
   if(!name){
    setnameError('please enter your error')
   }
   if(!Email){
    setEmailError('please enter your error')
   }
   if(!password){
    setPasswordError('please enter your error')
   }
   if(!Confrim){
    setConfrimError('please enter your error')
   }
   else{
    setspinners(true)
    createUserWithEmailAndPassword(auth, Email, password)
    .then((userCredential) => {
      //=================== add user and updatee profile picture 
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
      })
      //====================== lodaer part start 
      setspinners(false)
      //===================== tost messege when succsse 
      toast.success('🦄 Register Succsse Full', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        // Navigate('/Login')
        console.log(userCredential)     
   // ====================== email varification part \
        sendEmailVerification(auth.currentUser)

    })
    .catch((error) => {
      const errorCode = error.code;
    console.log(errorCode)
    setspinners(false)

    if(errorCode == 'auth/weak-password'){
      console.log(' plase selcto an strong password ')
      toast.error('🦄 weak-password!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    }
    if(errorCode == 'auth/email-already-in-use')
      toast.error('🦄 Email allredy in used', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    });

 

   }

  }
  
  return (
   <>
    <div className="container">
        <div className=' from_row flex justify-center items-center mt-[220px]'>
         <div className=' from_coll '>
            <h2 className=' text-3xl font-bold text-[#000]'> wellcom to back Register</h2>
            <form onSubmit={handelsubmit}>
          
            <label className=' text-[24px] font-bold mt-5 ' > username</label>
            <br />
            
             <input onChange={handelname} className=' w-[350px] h-[55px] border-none border border-black mt-5 p-5 rounded-lg' type="text" placeholder=' enter your name' />
         <p className='font-bold mt-5 text-red-600'>{nameError}</p>
         <br />
          <label className=' text-[24px] font-bold mt-5 ' > email </label>
         <br />
         <input onChange={handelEmail} className=' w-[350px] h-[55px] border-none border border-black mt-5 p-5 rounded-lg' type="text" placeholder=' enter your email' />
         <p className='font-bold mt-5 text-red-600'>{EmailError}</p>


         <label className='text-[24px] font-bold mt-5'>Password</label>
          <br />
             
         <div className=' relative'>
         <CgEyeAlt onClick={handelshow} className=' absolute top-10 left-[320px]' />
         <FiEyeOff onClick={handelshow} className=' absolute top-10 left-[320px]' />
         <input onChange={handelPasword } className=' w-[350px] h-[55px] border-none border border-black mt-5 p-5 rounded-lg' type={show? 'text' : 'password'} placeholder=' enter your password' />
         <p className=' font-bold mt-5 text-red-600'> {passwordError}</p>
          </div>
           <label className='text-[24px] font-bold mt-5'>Confrim</label>
           <br />

           
           <div className=' relative'>
           <CgEyeAlt onClick={handelshow} className=' absolute top-10 left-[320px]' />
           <FiEyeOff onClick={handelshow} className=' absolute top-10 left-[320px]' />
           <input onChange={ handelConfrim} className=' w-[350px] h-[55px] border-none border border-black mt-5 p-5 rounded-lg' type= {show? 'text' : 'Confrim'} placeholder=' enter your confrim' />
           <p className=' font-bold mt-5 text-red-600'> {ConfrimError}</p>
           </div>

          {
            spinners?

           <div className=' flex justify-center text-[16px] w-[350px] h-[55px] bg-green-600 hover:scale-105 transition px-4 py-4 rounded-lg '>
           <PulseLoader className=' color="#fff" size={30px]'/>

           </div>

           :
             <button type='submit' className=' text-[16px] w-[350px] h-[55px] bg-green-600 hover:scale-105 transition mt-5 rounded-lg'>REGISTER</button>
          }
        
             <br />
             
             <Link className=' text-[#fff] text-[20px] font-bold' to='/Register'> allredy use have a account <span className=' text-[px20] ml-5 text-[#000] font-bold '>register</span></Link>

            </form>
          
                
         </div>
        </div>
    </div>
   
   
   </>
  )
 }

 export default Register
