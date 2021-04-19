import React from "react";
// import { Clock, Maximize2 } from "react-feather";
import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`about`, `team`, `experience`]}
        title="About"
        description="Get to know us more"
      />

      <section className="relative px-0 pt-20 pb-0 xl:px-20 min-w-screen animation-fade animation-delay">
        <div className="container px-10 mx-auto sm:px-0">
          <div className="sm:flex">
            <div className="flex-1 mr-12">
              <section className='about-section'>
                <h1 className="main-heading">About Us</h1>
                <p className="mt-5 leading-7 text-gray-700 text-md">B H E TECHNICAL SERVICES was founded in 1997, and started operations in 2003. The company 
                  has become a key player in major economic industries by providing the following but not limited 
                  to:
                  <ul className='my-3 list-disc'>
                    <li>Industrial transmission couplings; including fluid coupling</li>
                    <li>Bearings </li>
                    <li>Pulleys and V-belts </li>
                    <li>Sprockets and chains </li>
                    <li>Industrial and mining valves</li>
                    <li>Pipes and fittings</li>
                    <li>Steel products</li>
                    <li>Engineering services (Gearbox reconditioning, hydraulics and Pneumatic design and installations)</li>
                    <li>Industrial tools and accessories</li>
                  </ul>
                  We always strive to add values to our customers through provision of quality and timeous services.
                </p>
              </section>
              <section className='about-section'>
                <h2 className="main-heading">Our Vision</h2>
                <p className="mt-5 leading-7 text-gray-700 text-md">A leader in the provision of equipment, spares and engineering services to the Mining, Industrial and Agricultural sectors. </p>
              </section>
              <section className='about-section'>
                <h2 className="main-heading">Our Mission</h2>
                <p className="mt-5 leading-7 text-gray-700 text-md">Efficient supply of quality spares, equipment and engineering services to the Mining, Industrial and Agricultural sectors to enhance productivity.</p>
              </section>
              <section className='about-section'>
                <h2 className="main-heading">Our Values</h2>
                <ul className="my-3 mt-5 leading-7 text-gray-700 list-disc text-md">
                  <li>Efficiency</li>
                  <li>Commitment</li>
                  <li>Quality </li>
                  <li>Consistency </li>
                  <li>Reliability </li>
                  <li>Integrity </li>
                </ul>
              </section>
              <section className='about-section'>
                <h2 className="main-heading">Key Industries Serviced</h2>
                <ul className="my-3 mt-5 leading-7 text-gray-700 list-disc text-md">
                  <li>Mining  </li>
                  <li>Power generation</li>
                  <li>Agriculture   </li>
                  <li>Cement  </li>
                  <li>Manufacturing   </li>
                  <li>Local Authorities  </li>
                </ul>
              </section>

            </div>
            <div className="px-10 mt-20 sm:flex-1 sm:mt-0 sm:px-0 sm:mt-48 lg:mt-0">
              <div className="grid grid-cols-2 gap-5">
                <div className="col-span-1">
                  <img
                    className="min-w-full shadow-md"
                    width="245"
                    height="330"
                    src="https://images.unsplash.com/photo-1581094374631-2154f20c2726?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                  />
                  <img
                    className="min-w-full mt-5 shadow-md"
                    width="245"
                    height="245"
                    src="https://images.unsplash.com/photo-1581092154055-8a5b14307eb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  />
                </div>
                <div className="col-span-1 pt-10">
                  <img
                    className="min-w-full shadow-md"
                    width="240"
                    height="240"
                    src="https://cdn.pixabay.com/photo/2017/10/26/14/28/welding-2891275_960_720.jpg"
                  />
                  <img
                    className="min-w-full mt-5 shadow-md"
                    width="245"
                    height="335"
                    src="https://cdn.pixabay.com/photo/2017/10/20/12/40/surveying-equipment-2871079_960_720.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
