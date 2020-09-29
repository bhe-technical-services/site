import React from 'react'
import voith from '../../images/voith.jpg'
import festo from '../../images/festo.jpg'

function agencies() {
    return (
        <section id='agencies' className='text-writing-black'>
            <h2 className='mb-5 text-center md:mb-10 main-heading'>Agencies</h2>

            <div id="Festo-wrapper" className='flex flex-col mb-10 md:flex-row-reverse py-15'>
                <div id="image-wrapper" className='relative md:w-1/2'>
                    <img className='object-cover w-full h-56 transform -skew-y-12 border-b-4 shadow-md border-primary-green-400 sm:h-72 md:h-80 lg:w-full lg:h-full' src={festo} alt="Festo Equipment"/>
                </div>
                <div id="festo-text-wrapper" className='mt-20 text-left bullseye md:w-1/2 md:mt-5'>
                    <span className='px-10 md:px-13 lg:px-32'>
                    <h1 className='sub-heading'>Festo</h1>
                    <p className='text-flat-gray'>Provision of equipment, spares and engineering services to the mining, industrial and agricultural sectors in the Sub-Saharan Region.</p>
                    </span>
                </div>
            </div>

            <div id="voith-wrapper" className='flex flex-col-reverse mb-10 md:flex-row-reverse py-15'>
                <div id="voith-text-wrapper" className='mt-20 text-left bullseye md:w-1/2 md:mt-5'>
                    <span className='px-10 md:px-13 lg:px-32'>
                    <h1 className='sub-heading'>Voith</h1>
                    <p className='text-flat-gray'>Having a highly efficient and reliable drive system increases production and provides peace of mind. Whether you require fluid couplings or a customized drive package, Voith is your partner of choice. We assist you in gently accelerating your driven machine, owing to the hydrodynamic principle, thereby extending the life time of your system. At the same time, torque is limited, load sharing is facilitated and torsional vibrations are dampened. The coupling protects the drive system from damage even under extreme operating conditions, reducing downtime and ensuring a continuous production process.</p>
                    </span>
                </div>
                <div id="image-wrapper" className='relative md:w-1/2'>
                    <img className='object-cover w-full h-56 transform -skew-y-12 border-b-4 shadow-md border-primary-green-400 sm:h-72 md:h-80 lg:w-full lg:h-full' src={voith} alt=""/>
                </div>
            </div>

        </section>
    )
}

export default agencies


            // <div id="festo-wrapper" className='flex flex-col md:flex-row py-15'>
            // <div id="text-wrapper" className='text-left bullseye'>
            //     <span>
            //     <h4 className=''>Festo</h4>
            //     <p>Provision of equipement, spares and engineering services to the mining, industrial and agricultural sectors in the Sub-Saharan Region.</p>
            //     </span>
            // </div>
            // <div id="image-wrapper" className='relative'>
            //     <svg className="absolute inset-y-0 top-0 w-full h-full text-off-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            //     <polygon points="0,0 100,0 0,25 " />
            //     </svg>
            //     <img src="https://images.unsplash.com/photo-1581093803931-46e730e7622e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            //     <svg className="absolute inset-y-0 bottom-0 w-full h-full text-off-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            //     <polygon points="0,100 100,100 100,75 " />
            //     </svg>
            // </div>
            // </div>