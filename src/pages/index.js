import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
// import Feature from '../components/buttons/PrimaryButton'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        description="issa home page"
      />
      <Hero/>
      <section id='major-customers'>
        <h2 className='mb-5 text-center md:mb-10 main-heading'>Major Customers</h2>
        <div className='flex-row w-4/5 max-w-4xl overflow-x-hidden bullseye h-28 bg-secondary-brown-500'>
            <svg className='inline-block w-20 mx-4' viewBox='0 0 20 20'  fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='' d="M156.91 2.577a5.998 5.998 0 00-3.881-2.486 5.974 5.974 0 00-4.491 1.008L1.072 104.926A5.98 5.98 0 005.99 107.5l.006.007h145.996c3.319 0 6.008-2.711 6.008-6.049V5.94a6.064 6.064 0 00-1.09-3.375v.012zM9.45 1.093a5.98 5.98 0 00-6.173-.43A6.046 6.046 0 000 5.94v95.697l70.205-57.836L9.456 1.081" fill="#7856FF"/>
            </svg>
            <svg className='inline-block w-20 mx-4' viewBox='0 0 20 20'  fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='' d="M156.91 2.577a5.998 5.998 0 00-3.881-2.486 5.974 5.974 0 00-4.491 1.008L1.072 104.926A5.98 5.98 0 005.99 107.5l.006.007h145.996c3.319 0 6.008-2.711 6.008-6.049V5.94a6.064 6.064 0 00-1.09-3.375v.012zM9.45 1.093a5.98 5.98 0 00-6.173-.43A6.046 6.046 0 000 5.94v95.697l70.205-57.836L9.456 1.081" fill="#7856FF"/>
            </svg>
            <svg className='inline-block w-20 mx-4' viewBox='0 0 20 20'  fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='' d="M156.91 2.577a5.998 5.998 0 00-3.881-2.486 5.974 5.974 0 00-4.491 1.008L1.072 104.926A5.98 5.98 0 005.99 107.5l.006.007h145.996c3.319 0 6.008-2.711 6.008-6.049V5.94a6.064 6.064 0 00-1.09-3.375v.012zM9.45 1.093a5.98 5.98 0 00-6.173-.43A6.046 6.046 0 000 5.94v95.697l70.205-57.836L9.456 1.081" fill="#7856FF"/>
            </svg>
            <svg className='inline-block w-20 mx-4' viewBox='0 0 20 20'  fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='' d="M156.91 2.577a5.998 5.998 0 00-3.881-2.486 5.974 5.974 0 00-4.491 1.008L1.072 104.926A5.98 5.98 0 005.99 107.5l.006.007h145.996c3.319 0 6.008-2.711 6.008-6.049V5.94a6.064 6.064 0 00-1.09-3.375v.012zM9.45 1.093a5.98 5.98 0 00-6.173-.43A6.046 6.046 0 000 5.94v95.697l70.205-57.836L9.456 1.081" fill="#7856FF"/>
            </svg>
            <svg className='inline-block w-20 mx-4' viewBox='0 0 20 20'  fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='' d="M156.91 2.577a5.998 5.998 0 00-3.881-2.486 5.974 5.974 0 00-4.491 1.008L1.072 104.926A5.98 5.98 0 005.99 107.5l.006.007h145.996c3.319 0 6.008-2.711 6.008-6.049V5.94a6.064 6.064 0 00-1.09-3.375v.012zM9.45 1.093a5.98 5.98 0 00-6.173-.43A6.046 6.046 0 000 5.94v95.697l70.205-57.836L9.456 1.081" fill="#7856FF"/>
            </svg>
        </div>
      </section>

      <section id='authorized-resellers'>
        <h2 className='mb-5 text-center md:mb-10 main-heading'>Authorized Resellers</h2>
        <div id="festo-wrapper" className='flex flex-col md:flex-row py-15'>
          <div id="text-wrapper" className='text-left bullseye'>
            <span>
              <h4 className=''>Festo</h4>
              <p>Provision of equipement, spares and engineering services to the mining, industrial and agricultural sectors in the Sub-Saharan Region.</p>
            </span>
          </div>
          <div id="image-wrapper" className='relative'>
            <svg className="absolute inset-y-0 top-0 w-full h-full text-off-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,0 100,0 0,25 " />
            </svg>
            <img src="https://images.unsplash.com/photo-1581093803931-46e730e7622e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            <svg className="absolute inset-y-0 bottom-0 w-full h-full text-off-white" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="0,100 100,100 100,75 " />
            </svg>
          </div>
        </div>
        <div id="voith-wrapper" className='flex flex-col md:flex-row-reverse py-15'>
          <div id="text-wrapper" className='text-left bullseye'>
            <span>
              <h4 className=''>Voith</h4>
              <p>Provision of equipement, spares and engineering services to the mining, industrial and agricultural sectors in the Sub-Saharan Region.</p>
            </span>
          </div>
          <div id="image-wrapper" className='relative'>
            <img className='transform -skew-y-12' src="https://images.unsplash.com/photo-1581093803931-46e730e7622e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default IndexPage;
