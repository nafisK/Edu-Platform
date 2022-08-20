import React from 'react'
import helloLogin from '../Assets/images/helloLogin.svg'
import loginImage from '../Assets/images/loginImage.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigate = useNavigate()
  const notifyLogin = () =>
    toast('Unable to login, please enter correct credentials.', {
      type: 'error',
    })
  const notifyLoginError = () =>
    toast('Unable to login, unknown error.', { type: 'error' })

  const onSubmit = e => {
    e.preventDefault()
    axios
      .get('http://localhost:3001/login', {
        params: {
          email: email,
          password: password,
        },
      })
      .then(function (res) {
        console.log(res)
        if (res.data.isLoggedin === true) {
          navigate('/home')
        } else if (res.data.isLoggedin === false) {
          console.log('failure')
          notifyLogin()
        } else {
          notifyLoginError()
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }

  return (
    <div class='flex w-screen h-screen bg-[#4F61AA]'>
      <div class='w-4/12'>
        <div className='h-[85%] bg-[#D7D7D7] rounded-3xl	 p-8 flex justify-center items-center my-20 ml-12'>
          <form className='max-w-[80%] w-full mx-auto p-5 rounded-md '>
            <h2 className='py-6 text-[#142363] flex justify-center items-center'>
              <img
                src={helloLogin}
                alt='helloLogin'
                className='justify-center items-center w-48 h-48'
              />
            </h2>
            <div>
              <div className='flex flex-col py-2 '>
                <div className='text-2xl font-bold text-[#142363]'>
                  Sign in to Headstarter Here
                </div>
                <div className='text-[#142363] my-3'>Enter your details</div>
                <label className='text-[#667080]'>Email</label>
                <input
                  className='border border--[#142363] p-2 rounded-xl'
                  type='text'
                  id='email'
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='text-[#667080]'>Password</label>
                <input
                  className='border p-2 border--[#142363] rounded-lg'
                  id='password'
                  type='password'
                  value={password}
                  required
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className='flex justify-between'>
                <div className='flex items-center mr-4 '>
                  <input
                    id='type'
                    type='checkbox'
                    value='company'
                    name='colored-radio'
                    className='w-4 h-4 text-red-600 '
                    onChange={e => console.log(e)}
                  />
                  <label className='ml-2 text-sm font-medium text-gray-700 '>
                    Remember Me
                  </label>
                </div>
                <div className='flex items-center mr-4'>
                  <a className='text-[#142363]' href='google.com'>
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                className='border w-full my-5 py-2 rounded-md text-white bg-[#142363]'
                onClick={onSubmit}
              >
                Sign In
              </button>
              <div className='text-center'>
                <p className='font-bold text-[#667080]'>Sign Up</p>
              </div>
            </div>
            <Toaster />
          </form>
        </div>
      </div>
      <div class='w-8/12 flex flex-col'>
        <div className='text-white text-6xl pb-24 w-full h-[33%] flex justify-center items-end'>
          Headstarter
        </div>
        <div className='flex justify-center items-center'>
          <img src={loginImage} alt='helloLogin' className='w-[60%] h-full ' />
        </div>
      </div>
    </div>
  )
}