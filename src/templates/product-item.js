/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from "../components/layout";
// import Img from '../components/Img'



function ProductPage({data: { gcms: { product },},}) {

  return(
  <Layout>
  <section className="overflow-hidden text-gray-500 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap mx-auto lg:w-4/5">
      <img alt={product.name} className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src={product.image[0].node.childImageSharp.fluid.src}/>
      {/* this Gatsby-image component one isn't working yet*/}
      {/* <Img className='inline-block w-56' fluid={product.image.node.childImageSharp.fluid.src} />  */}
      <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
        {/* <h2 className="text-sm tracking-widest text-gray-600 title-font">{product.manufacturer.name}</h2> */}
        <h1 className="mb-1 text-3xl font-medium text-writing-black title-font">{product.name}</h1>
        <div className="flex">
            <span className="text-2xl font-medium text-writing-gray title-font">{product.priceRange}</span>
        </div>
        <p className="leading-relaxed">{product.description}</p>
        <p className='italic font-bold underline'>There will also be a list of available Manufacturers for each product item, just did not get time to code it before demo.</p>
      </div>
    </div>
  <div className="flex mx-auto lg:w-4/5">
  </div>

    <div className='max-w-2xl mx-auto'>
        <form name="ProductItem" data-netlify="true" method='POST' data-netlify-honeypot="bot-field"  className="flex flex-col w-full mx-auto mt-8 md:ml-auto md:py-8 md:mt-0">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="ProductItem" />
            <input type="hidden" name="product-name" value={product.name} />
            <h2 className="mb-1 text-lg font-medium text-writing-black title-font">Place an order</h2>
            <p className="mb-5 leading-relaxed text-gray-600">Please enter your details and we&#39;ll get back to you as soon as possible.</p>
            <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Name" type="text" name="name"/>
            <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Email" type="email" name="email"/>
            <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" min="1" placeholder="Quantity" type="number" name="quantity"/>
            <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Address 1" type="text" name="addressOne"/>
            <input className="px-4 py-2 mb-4 text-base text-white bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-indigo-500" placeholder="Address 2" type="text" name="addressTwo"/>
            <button className="mx-auto btn" type='submit'>Submit</button>
            <p className="mt-3 text-xs text-gray-500">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
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
  

