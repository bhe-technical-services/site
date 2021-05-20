/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import SEO from '../components/seo';
// import Img from '../components/Img'


function ProductPage({data: { gcms: { product },},}) {
console.log(product)
  return(
  <Layout>
    <SEO
        keywords={product.manufacturer? product.manufacturer.map(manu => manu.name) : ''}
        title={product.name}
        description={product.description}
        image={product.image[0].node.childImageSharp.fluid.src}
      />
    <section className="overflow-hidden text-gray-500 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap mx-auto lg:w-4/5">
      <img alt={product.name} className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={product.image[0].node.childImageSharp.fluid.src}/>
        {/* this Gatsby-image component one isn't working yet*/}
        {/* <Img className='inline-block w-56' fluid={product.image.node.childImageSharp.fluid.src} />  */}
        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
          {/* <h2 className="text-sm tracking-widest text-gray-600 title-font">{product.manufacturer.name}</h2> */}
          <h1 title='product name' className="mb-5 main-heading">{product.name}</h1>
          {product.manufacturer ? 
            <>
              <h3 className=' sub-heading'>Manufacturers:</h3>
              <div className='container flex mb-5 space-x-3'>
                {product.manufacturer.map(manu =><span title='manufacturer name' className='border-b-4 border-primary-green-500' key={manu.name}>{manu.name}</span>)}
              </div>
            </>
          : '' 
          }
          <div className="flex mb-5">
              <span title='price range' className="text-2xl font-medium text-writing-gray title-font">{product.priceRange}</span>
          </div>
          <p title='product description' className="leading-relaxed">{product.description}</p>
        </div>
      </div>
    <div className="flex mx-auto lg:w-4/5">
    </div>

      <div className='container max-w-2xl px-5 mx-auto mt-36'>
          <form name="ProductItem" data-netlify="true" method='POST' data-netlify-honeypot="bot-field"  className="flex flex-col w-full mx-auto mt-8 md:ml-auto md:py-8 md:mt-0">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="ProductItem" />
              <input type="hidden" name="product-name" value={product.name} />
              <h2 className="main-heading">Order/Enquiry</h2>
              <p className="mb-5 leading-9 text-gray-600">Please enter your details and we&#39;ll get back to you as soon as possible.</p>
              <input className='my-2' placeholder="Name" type="text" name="name"/>
              <input className='my-2' placeholder="Email" type="email" name="email"/>
              <input className='my-2' min="1" placeholder="Quantity" type="number" name="quantity"/>
              <textarea row="4" className="h-40" name="message" placeholder="Your message here..."></textarea>
              <button className="flex items-center justify-center w-full px-6 py-2 mx-auto my-2 text-lg font-medium leading-6 text-white transition duration-150 ease-in-out border border-transparent md:w-2/6 bg-primary-green-500 hover:bg-primary-green-600 focus:outline-none focus:border-primary-green-700 focus:ring-indigo md:py-3 md:text-lg md:px-8" type='submit'>Submit</button>
              {/* <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
          </form>
      </div>
    </div>
  </section>
</Layout>
  )
}


export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        name
        description
        image {
          url
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        priceRange
        manufacturer {
          name
        }
      }
    }
  }
  `;

export default ProductPage;
  

