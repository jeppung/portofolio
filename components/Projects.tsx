import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5];
  return (
    <div className='h-screen relative flex flex-col justify-center items-center space-y-20'>
        <div>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
        </div>
        <div className='relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory z-20 justify-center items-center mx-auto'>
            {projects.map((project,i) => (
                <div className='w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center px-5'>
                    <img className='mx-auto' src='https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png'/>
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl mx-auto'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#f7ab0a]/50'>Case Study {i+1}</span> of {projects.length}: UPS Clone
                        </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos facere voluptatem dicta, nostrum consequuntur aperiam voluptate! Esse rerum quam dolore?</p>
                    </div>
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </div>
  )
}

export default Projects