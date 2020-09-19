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

    </Layout>
  );
}

export default IndexPage;
