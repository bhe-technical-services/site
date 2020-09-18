import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
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
        {/* <Feature bigHead="Featured Playlists" smallHead="Curated tunes"/> */}
      {/* <PrimaryButton  whereTo="/products" displayText="Products"/> */}

      
    </Layout>
  );
}

export default IndexPage;
