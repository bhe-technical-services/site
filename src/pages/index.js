import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import Customers from '../components/Home/customers'
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
      <Customers/>

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
            <img className='transform -skew-y-12 border-b-4 border-blue-400 shadow-md' src="https://images.unsplash.com/photo-1600101278349-0724de57fe15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default IndexPage;
