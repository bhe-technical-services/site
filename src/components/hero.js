/* eslint react/prop-types: 0 */
import React from 'react'
// import hero from '../images/hero.jpg'
import Header from './header/header'
// import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {  graphql , useStaticQuery} from "gatsby"
import icon from '../images/bhe-logo-removebg.png'
import PropTypes from 'prop-types';
// import Feature from "./buttons/PrimaryButton"
import PrimaryButton from "./buttons/PrimaryButton"
// import SecondaryButton from "./buttons/SecondaryButton"




function Hero() {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "hero.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    console.log(data)
    
    return (
        <div className="relative min-h-screen overflow-hidden bg-off-white">
            <div className="max-w-screen-xl mx-auto">
                <div className="relative z-10 pb-8 bg-off-white lg:min-h-screen sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="absolute inset-y-0 right-0 hidden w-56 h-full transform translate-x-1/2 text-off-white lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <Header/>

                    <main className="max-w-screen-xl px-4 pt-10 mx-auto sm:pt-12 sm:px-6 md:pt-16 lg:pt-28 lg:px-8 xl:pt-36">
                        <div className="sm:text-center lg:text-left">
                        <div className='flex flex-row items-center justify-center text-center'>
                            <div className='flex items-center justify-center w-20 mr-2 md:w-28 md:mr-4'>
                                <img className='inline-block w-full h-full' src={icon} alt="BTS Technical Services logo"/>
                            </div>
                            <h2 className="font-serif main-heading text">
                                BHE Technical
                                <br />
                                <span className="">Services</span>
                            </h2>
                        </div>
                        <p className="mt-3 text-base text-writing-gray sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Provision of equipment, spares and engineering services to the mining, industrial and agricultural sectors in the Sub-Saharan Region.
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <PrimaryButton  path='/products' text="Products"/>
                            {/* <SecondaryButton path='/about' text="About"/> */}
                        </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 sm:bg-flat-gray">
                <Img className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" fixed={data.file.childImageSharp.fluid} alt="Hero image"/>
            </div>
        </div>

    )
}

Hero.propTypes = {
    data: PropTypes.object,
};


  
//   export const query = graphql`
//   query {
//       file(relativePath: { eq: "hero.jpg" }) {
//           childImageSharp {
//               fluid(maxWidth: 1000) {
//                   ...GatsbyImageSharpFluid
//                 }
//             }
//         }
//     }
//     `
    
export default Hero