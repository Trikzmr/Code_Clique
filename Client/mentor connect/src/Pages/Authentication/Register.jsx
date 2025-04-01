import React from 'react'
import RegistrationArea from './Components/RegistrationArea'

const Register = () => {
  return (
    <>
        <div className="Login_pannel flex md:flex-row flex-col min-h-screen">
            <div className="login_Controller flex md:basis-[67%] mt-12">
                <RegistrationArea/>
            </div>
            <div className="Login_Illustration flex justify-center items-center md:basis-[33%] bg-[#1A3235]">
                Testing in it
            </div>
        </div>
    </>
  )
}

export default Register
