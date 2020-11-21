import React from 'react'
import voith from '../../images/voith.jpg'
import festo from '../../images/festo.jpg'

function agencies() {
    return (
        <section id='agencies' className='text-writing-black'>
            <h2 className='mb-5 text-center md:mb-10 main-heading'>Agencies</h2>

            <div id="Festo-wrapper" className='flex flex-col mb-10 md:flex-row-reverse py-15'>
                <div id="image-wrapper" className='relative md:w-1/2'>
                    <img className='object-cover w-full h-56 transform -skew-y-6 border-b-4 shadow-md border-primary-green-400 sm:h-72 md:h-80 lg:w-full lg:h-full' src={festo} alt="Festo Equipment"/>
                </div>
                <div id="festo-text-wrapper" className='mt-20 text-left bullseye md:w-1/2 md:mt-5'>
                    <span className='px-10 md:px-13 lg:px-32'>
                            <h1 className='text-4xl sub-heading'>Festo</h1>
                            <p className='mt-3 text-base text-writing-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>Provision of equipment, spares and engineering services to the mining, industrial and agricultural sectors in the Sub-Saharan Region.</p>
                    </span>
                </div>
            </div>

            <div id="voith-wrapper" className='flex flex-col-reverse mb-10 md:flex-row-reverse py-15'>
                <div id="voith-text-wrapper" className='mt-20 text-left bullseye md:w-1/2 md:mt-5'>
                    <span className='px-10 md:px-13 lg:px-32'>
                    <h1 className='text-4xl sub-heading'>Voith</h1>
                    <p className='mt-3 text-base text-writing-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>Having a highly efficient and reliable drive system increases production and provides peace of mind. Whether you require fluid couplings or a customized drive package, Voith is your partner of choice. We assist you in gently accelerating your driven machine, owing to the hydrodynamic principle, thereby extending the life time of your system. At the same time, torque is limited, load sharing is facilitated and torsional vibrations are dampened. The coupling protects the drive system from damage even under extreme operating conditions, reducing downtime and ensuring a continuous production process.</p>
                    </span>
                </div>
                <div id="image-wrapper" className='relative md:w-1/2'>
                    <img className='object-cover w-full h-56 transform -skew-y-6 border-b-4 shadow-md border-primary-green-400 sm:h-72 md:h-80 lg:w-full lg:h-full' src={voith} alt=""/>
                </div>
            </div>
            <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill" fill="#B1BD5D" fillOpacity="1"></path><path  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill" fill="#B1BD5D" fillOpacity="1"></path><path  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill" fill="#B1BD5D" fillOpacity="1"></path></svg>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b1bd5d" fillOpacity="1" d="M0,256L288,320L576,128L864,128L1152,288L1440,320L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b1bd5d" fillOpacity="1" d="M0,256L288,320L576,128L864,128L1152,288L1440,320L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg> */}
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