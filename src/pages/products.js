/* eslint-disable */
import React from "react";
import PropTypes from 'prop-types'
import { graphql, useStaticQuery, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Products({ data}) {
  const { featuredProducts, gcms: {productTypes}} = data
  console.log(productTypes);
  return (
    <Layout>
      <SEO
        keywords={[`Engineering`, `BHE`, `BTS`, `Equipment`, `Spares`]}
        title="Products"
        description="Showcase of our wide range of equipment, spares and engineering services available."
      />
      <section className="px-5 py-24 mx-auto ">
        <h2 className="mb-10 underline main-heading">Product Categories</h2>
        <div className="flex flex-wrap">
          {productTypes.map((category) => (
            <div
              className="w-full p-4 lg:w-1/4 md:w-1/2 card lg:min-w-118"
              key={category.slug}
            >
              <Link
                to={`/products/type/${category.slug}`}
                className="relative block h-48 overflow-hidden rounded"
              >
                <Img
                  className="block object-cover object-center w-full h-full"
                  fluid={category.featureImage.node.childImageSharp.fluid}
                />
              </Link>
              <div className="mt-4">
                <Link
                  to={`/products/type/${category.slug}`}
                >
                  <h2 className="text-xl font-bold text-writing-black title-font">
                    {category.name}
                  </h2>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

Products.PropTypes = {
  data: PropTypes.object,
};

export default Products;

export const pageQuery = graphql`
  {
    gcms {
      productTypes {
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
    featuredProducts: gcms {
      products(where: { isFeatured: true }) {
        name
        slug
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
      }
    }
  }
`;
