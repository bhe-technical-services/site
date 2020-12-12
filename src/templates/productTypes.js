/* eslint-disable */
import { graphql, useStaticQuery, Link  } from 'gatsby';
import React from 'react'
import Layout from "../components/layout";
import Img from 'gatsby-image';
import SEO from '../components/seo';

export const pageQuery = graphql`
query TypeQuery($slug: String) {
    gcms {
      products: products(where: {productType_some: {slug_contains: $slug}}) {
        name
        slug
        image {
          url
          node {
            childImageSharp {
              fluid(maxWidth: 560) {
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      heading: productType(where: {slug: $slug}) {
        name
      }
    }
  }


`;


const category = ( { data: {gcms: { products, heading }, }}) => {
    // const { data: {gcms: { category }, }} = useStaticQuery(pageQuery);
    console.table(heading)
    // const products = productType.productCategories
    return (
        <Layout>
           <SEO
            title={heading.name}
            description={`All ${heading.name} products in stock`}
          />
          
            <div className='container px-5 py-24 mx-auto'>
            <h2 className="mb-10 underline main-heading">
                {heading.name}
            </h2>
            <div className='flex flex-wrap '>
                    {products.map((product) => (
                        <div className="w-full p-4 lg:w-1/4 md:w-1/2" key={product.slug}>
                            <Link to={`/products/${product.slug}`} className="relative block h-48 overflow-hidden rounded">
                                <Img className="block object-cover object-center w-full h-full" fluid={product.image[0].node.childImageSharp.fluid} />
                            </Link>
                                <div className="mt-4">
                                  <Link to={`/products/${product.slug}`}>
                                    <h2 className="text-lg font-bold text-writing-black title-font">{product.name}</h2>
                                  </Link>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default category

