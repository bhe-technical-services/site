import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        description="issa home page"
      />

      <Hero/>
      
    </Layout>
  );
}

export default IndexPage;
