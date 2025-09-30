import React from 'react'

const Cities = () => {

  return (
    <>
      {/* Desktop View - Hidden on mobile */}
      <div className='hidden sm:flex w-[80%] h-[70%] flex-col items-center justify-center gap-20 mb-[10vh]'>
        <div className='w-full h-[10%] flex justify-between items-center'>
          <h1 className='text-5xl font-black text-[#6FA598]'>Current Cities</h1>
          <p className='text-xl font-medium text-[#4C4C4C]'>We’re rolling out city by city, partnering with local <br /> businesses to bring clean, accessible restrooms to the <br /> people who need them. Here’s where you can find us today.</p>
        </div>
        <div className='w-full h-[80%] flex flex-col justify-between items-center'>
          <div className='w-full bg-white rounded-[2.5rem] border-b-[1rem] border-[#b8dbef] p-0 h-[22%] flex justify-between items-center'>
            <div className='h-full w-[35%] p-0 rounded-3xl overflow-hidden'>
              <img src="/Washington.svg" alt="washington" className='w-full h-full object-cover' />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-start text-left'>
              <h1 className='font-medium text-3xl text-[#4C4C4C]'>Washington, D.C.</h1>
              <p className='text-xl font-normal text-[#676666]'>Our pilot city and policy capital — <br /> building restroom access where it <br /> matters most.</p>
            </div>
          </div>

          <div className='w-full bg-white rounded-[2.5rem] border-b-[1rem] border-[#b8dbef] p-0 h-[22%] flex justify-between items-center'>
            <div className='h-full w-[35%] p-0 rounded-3xl overflow-hidden'>
              <img src="/NewYork.svg" alt="new york" className='w-full h-full object-cover' />
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-start text-left'>
              <h1 className='font-medium text-3xl text-[#4C4C4C]'>New York</h1>
              <p className='text-xl font-normal text-[#676666]'>Our latest launch and one of the <br /> cities that needs us most. With over <br /> 50 locations, finally, restrooms you <br /> can count on.</p>
            </div>
          </div>

          <div className='w-full bg-white rounded-[2.5rem] border-b-[1rem] border-[#b8dbef] p-0 h-[22%] flex justify-between items-center'>
            <div className='h-full w-[35%] p-0 rounded-3xl overflow-hidden relative'>
              <img src="/LosAngeles.svg" alt="los angeles" className='w-full h-full object-cover filter grayscale' />
              <div className='absolute inset-0 bg-black/20 rounded-3xl flex items-center justify-center'>
                <span className='text-white font-bold text-2xl text-center bg-white/60 py-4 w-full'>Coming Soon</span>
              </div>
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-start text-left'>
              <h1 className='font-medium text-3xl text-[#4C4C4C]'>Los Angeles</h1>
              <p className='text-xl font-normal text-[#676666]'>Coming soon to your favorite sunny <br /> neighborhoods.</p>
            </div>

          </div>

          <div className='w-full bg-white rounded-[2.5rem] border-b-[1rem] border-[#b8dbef] p-0 h-[22%] flex justify-between items-center'>
            <div className='h-full w-[35%] p-0 rounded-3xl overflow-hidden relative'>
              <img src="/SanFrancisco.png" alt="san francisco" className='w-full h-full object-cover filter grayscale' />
              <div className='absolute inset-0 bg-black/20  rounded-3xl flex items-center justify-center'>
                <span className='text-white font-bold text-2xl text-center drop-shadow-lg bg-white/60 w-full py-4'>Coming Soon</span>
              </div>
            </div>
            <div className='h-full w-[50%] flex flex-col justify-center items-start text-left'>
              <h1 className='font-medium text-3xl text-[#4C4C4C]'>San Francisco, C.A.</h1>
              <p className='text-xl font-normal text-[#676666]'>Bringing trusted restroom access to <br /> the Bay Area.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Only visible on mobile */}
      <div className='flex sm:hidden w-full px-4 py-8 flex-col items-center justify-start gap-8'>
        <div className='w-full text-left mb-4 py-10'>
          <h1 className='text-3xl font-black text-[#6FA598] mb-8'>Current Cities</h1>
          <p className='text-sm font-medium text-[#4C4C4C] leading-relaxed'>We're rolling out city by city, partnering with local businesses to bring clean, accessible restrooms to the people who need them.</p>
        </div>

        <div className='w-full flex flex-col gap-4'>
          {/* Washington DC */}
          <div className='w-full bg-white rounded-2xl border-b-4 pb-10 border-[#b8dbef] h-[60vh] flex flex-col justify-between items-center'>
            <div className='w-full h-64 rounded-2xl overflow-hidden mb-3'>
              <img src="/Washington.svg" alt="washington" className='w-full h-full object-cover' />
            </div>
            <div className='w-full text-left pl-3'>
              <h1 className='font-medium text-2xl text-[#4C4C4C] mb-2'>Washington, D.C.</h1>
              <p className='text-base font-normal text-[#676666]'>Our pilot city and policy capital — building restroom access where it matters most.</p>
            </div>
          </div>

          {/* New York */}
          <div className='w-full bg-white rounded-2xl border-b-4 border-[#b8dbef] h-[60vh] pb-10 flex flex-col justify-between items-center'>
            <div className='w-full h-64 rounded-2xl overflow-hidden mb-3'>
              <img src="/NewYork.svg" alt="new york" className='w-full h-full object-cover' />
            </div>
            <div className='w-full text-left pl-3'>
              <h1 className='font-medium text-2xl text-[#4C4C4C] mb-2'>New York</h1>
              <p className='text-base font-normal text-[#676666]'>Our latest launch and one of the cities that needs us most. With over 50 locations, finally, restrooms you can count on.</p>
            </div>
          </div>

          {/* Los Angeles */}
          <div className='w-full bg-white rounded-2xl border-b-4 border-[#b8dbef] h-[60vh] pb-10 flex flex-col justify-between items-center'>
            <div className='w-full h-64 rounded-2xl overflow-hidden mb-3 relative'>
              <img src="/LosAngeles.svg" alt="los angeles" className='w-full h-full object-cover filter grayscale' />
              <div className='absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center'>
                <span className='text-white font-bold text-lg text-center bg-white/60 px-4 w-full py-2 rounded'>Coming Soon</span>
              </div>
            </div>
            <div className='w-full text-left pl-3'>
              <h1 className='font-medium text-2xl text-[#4C4C4C] mb-2'>Los Angeles</h1>
              <p className='text-base font-normal text-[#676666]'>Coming soon to your favorite sunny neighborhoods.</p>
            </div>
          </div>

          {/* San Francisco */}
          <div className='w-full bg-white rounded-2xl border-b-4 border-[#b8dbef] h-[60vh] pb-10 flex flex-col justify-between items-center'>
            <div className='w-full h-64 rounded-2xl overflow-hidden mb-3 relative'>
              <img src="/SanFrancisco.png" alt="san francisco" className='w-full h-full object-cover filter grayscale' />
              <div className='absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center'>
                <span className='text-white font-bold text-lg text-center bg-white/60 px-4 w-full py-2 rounded'>Coming Soon</span>
              </div>
            </div>
            <div className='w-full text-left pl-3'>
              <h1 className='font-medium text-2xl text-[#4C4C4C] mb-2'>San Francisco, C.A.</h1>
              <p className='text-base font-normal text-[#676666]'>Bringing trusted restroom access to the Bay Area.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cities