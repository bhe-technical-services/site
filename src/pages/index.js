import React from "react";

import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import Customers from '../components/Home/customers'
import Agencies from '../components/Home/agencies'
// import Feature from '../components/buttons/PrimaryButton'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
        description="Provision of equipment, spares and engineering services"
      />
      <Hero/>
      <Customers/>
      <Agencies/>
      

    </Layout>
  );
}

export default IndexPage;
