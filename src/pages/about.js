import React from "react";
import {CheckSquare} from 'react-feather'
import Team from "../components/About/team";
import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
        description="this is the about page"
      />

      <section className="relative px-0 pt-20 pb-0 xl:px-20 min-w-screen animation-fade animation-delay">
          <div className="container px-10 mx-auto sm:px-0">
              <div className="sm:flex">
                  <div className="flex-1 mr-12">
                      <div className="main-heading">Get to know us more</div>
                      <div className="mt-10">
                          <div className="flex">
                              <div className="flex-shrink">
                                  <CheckSquare className="w-10 mt-2 stroke-current text-primary-green-500"/>
                              </div>
                              <div className="flex-grow ml-5">
                                  <div className="sub-heading">Experience</div>
                                  <p className="mt-5 leading-7 text-gray-700 text-md">
                                      BHE is a Zimbabwean engineering service, based in Bulawayo. We have been in operation since 2002, 
                                      giving us 18 years of experience as a leading-edge player in our field. We have a dedicated staff of  
                                      proven professionals, providing trustworthy and memorable service. With values of commitment and 
                                      excellence, BHE is a known producer of results.
                                  </p>
                              </div>
                          </div>
                          <div className="flex mt-5">
                              <div className="flex-shrink">
                                <CheckSquare className="w-10 mt-2 stroke-current text-primary-green-500"/>
                              </div>
                              <div className="flex-grow ml-5">
                                  <div className="sub-heading">Scalable Team</div>
                                  <p className="mt-5 leading-7 text-gray-700 text-md">
                                    The Fitter and Boilermaker and their assistants are contract workers,
                                    participating only when the company has maintenance or project
                                    work with our customers e.g. shutdown maintenance outages,
                                    installations or any engineering related work within our scope
                                    that may arise at any given time.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="px-10 mt-20 sm:flex-1 sm:mt-0 sm:px-0 sm:mt-48 lg:mt-0">
                      <div className="grid grid-cols-2 gap-5">
                          <div className="col-span-1">
                              <img className="min-w-full shadow-md" width="245" height="330" src="https://picsum.photos/245/330?grayscale" />
                              <img className="min-w-full mt-5 shadow-md" width="245" height="245" src="https://picsum.photos/245/245?grayscale" />
                          </div>
                          <div className="col-span-1 pt-10">
                              <img className="min-w-full shadow-md" width="240" height="240" src="https://picsum.photos/240/240?grayscale" />
                              <img className="min-w-full mt-5 shadow-md" width="245" height="335" src="https://picsum.photos/245/335?grayscale" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Team/>
    </Layout>
  );
}

export default AboutPage;
