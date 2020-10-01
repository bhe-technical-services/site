exports.createPages = async ({ graphql, actions: { createPage } }) => {
    const {
      data: {
        gcms: { products, productCategories },
      },
    } = await graphql(`
      {
        gcms {
          products(stage: PUBLISHED) {
            id
            slug
          }
          productCategories {
            slug
          }
        }
      }
    `);
  
    products.forEach(({ id, slug }) =>
      createPage({
        path: `/products/${slug}`,
        component: require.resolve(`./src/templates/product-item.js`),
        context: {
          id,
        },
      })
    );

    productCategories.forEach(({ slug }) =>
      createPage({
        path: `/products/categories/${slug}`,
        component: require.resolve(`./src/templates/categoryProducts.js`),
        context: { slug },
      })
    );

  };

// creating local node of graphcms image, so I can take advantage of gatsby-image
const { createRemoteFileNode } = require('gatsby-source-filesystem');

exports.createResolvers = ({
actions: { createNode },
cache,
createNodeId,
createResolvers,
store,
reporter,
}) => {
const resolvers = {
    GraphCMS_Asset: {
    node: {
        type: `File`,
        resolve: ({ url }, args, context, info) => {
        return createRemoteFileNode({
            url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
        });
        },
    },
    },
};

createResolvers(resolvers);
};
