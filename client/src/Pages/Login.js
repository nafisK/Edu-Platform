import React from 'react'

export default function Login() {
  return (
    <div class='flex w-full h-screen bg-[#4F61AA] ml-[20%]'>
      <div class='w-4/12'>
        <div className='bg-[#D7D7D7] rounded-2xl p-8 flex justify-center items-center h-[92%] my-12 mx-12'>
          {/* <div>
            <div>LOGO</div>
            <div>Sign in to ___</div>
            <div>Enter your details below</div>
            <div>
              <div>Email</div>
              <input />
            </div>
            <div>
              <div>Password</div>
              <input />
            </div>
          </div>
           */}

          <form
            className='max-w-[80%] w-full mx-auto p-5 rounded-md '
            onSubmit={console.log('submitted')}
          >
            <h2 className='text-4xl font-bold text-center py-6 text-[#142363]'>
              IMAGE HERE.
            </h2>
            <div>
              <div className='flex flex-col py-2 '>
                <div className='text-2xl font-bold text-[#142363]'>
                  Sign in to __ Here
                </div>
                <div className='text-[#142363] my-3'>Enter your details</div>
                <label className='text-[#667080]'>Email</label>
                <input
                  className='border border--[#142363] p-2 rounded-xl'
                  type='text'
                  id='email'
                  onChange={e => console.log(e)}
                />
              </div>
              <div className='flex flex-col py-2'>
                <label className='text-[#667080]'>Password</label>
                <input
                  className='border p-2 border--[#142363] rounded-lg'
                  id='password'
                  type='password'
                  onChange={e => console.log(e)}
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
                  <a></a>
                  <a className='text-[#142363]' href='#'>
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button className='border w-full my-5 py-2 rounded-md text-white bg-[#142363]'>
                Sign In
              </button>
              <div className='text-center'>
                <p className='font-bold text-gray-700'>Sign Up</p>
              </div>
              <div className='flex flex-col items-center	'>
                <button className='border p-2 border-yellow-400 m-1 w-4/12 rounded'>
                  Company
                </button>
                <button className='border p-2 border-yellow-400 m-1 w-4/12 rounded'>
                  Freelancer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class='w-8/12'>02</div>
    </div>
  )
}
