import React, {useState} from 'react'
import './Login.scss'

function Login() {
    const [show, setShow] = useState(false)

    const showPassword = () => {
        setShow(!show)
    }
  return (
    <div className='login'>
        <div className='login__Left'>
            <div className='login__Left__WebsiteInfo'>
                <img src='/images/Union.png' className='login__Left__WebsiteLogo'/>
                <img src='/images/lendsqr.png' className='login__Left__WebsiteName' />
            </div>
            
            <img src='/images/pablo-sign-in-1.svg' className='login__Left__Image'/>

        </div>

        <div className='login__Right'>
                <div className='login__Right__Head'>
                    <h2>Welcome!</h2>
                    <p>Enter details to Login</p>
                </div>

                <div className='login__Right__Inputs'>
                    <input placeholder='Email' className='login__Right__Input1' type='email'/>
                    
                    
                    {
                        show ? 
                        <>
                        <input placeholder='Password' className='login__Right__Input2' type='password'/>
                        <p className='login__Right__Input2__Text' onClick={showPassword}>Show</p>
                        </>
                        : 
                        <>
                        <input placeholder='Password' className='login__Right__Input2' type='text'/>
                        <p className='login__Right__Input2__Text' onClick={showPassword}>Hide</p>
                        </>
                    }

                </div>
                

                <div className='login__Right__Question'>
                    <p>Forgot Password?</p>
                </div>
                
                <div className='login__Right__Button'>
                    <p>Log in</p>
                </div>
        </div>
    </div>
  )
}

export default Login