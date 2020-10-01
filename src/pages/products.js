import React from 'react'
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from 'gatsby-image';
import Layout from '../components/layout';

function Products() {
    const {gcms: {productCategories}} = useStaticQuery(pageQuery)
    console.log(productCategories)
    return (
        <Layout>
            <div className='container px-5 py-24 mx-auto'>
            <h2 className="mb-10 underline main-heading">
                Categories
            </h2>
            <div className='flex flex-wrap '>
                    {productCategories.map((category) => (
                        <div className="w-full p-4 lg:w-1/4 md:w-1/2" key={category.slug}>
                            <Link to={category.slug} className="relative block h-48 overflow-hidden rounded">
                                <Img className="block object-cover object-center w-full h-full" fluid={category.featureImage.node.childImageSharp.fluid} />
                            </Link>
                                <div className="mt-4">
                                    <h2 className="text-lg font-medium text-writing-black title-font">{category.name}</h2>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

// Products.propTypes = {
//     data: PropTypes.object,
//   };

export default Products

const pageQuery = graphql`
  {
    gcms {
      productCategories {
        name
        slug
        featureImage {
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
    }
  }
`