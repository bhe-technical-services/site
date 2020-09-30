import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import SEO from "../components/seo";
import Customers from '../components/Home/customers'
import Agencies from '../components/Home/agencies'
import Why from '../components/Home/why'
import Contact from '../components/Home/contact'
// import Feature from '../components/buttons/PrimaryButton'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Engineering`, `BHE`, `BTS`, `Equipment`, `Spares`]}
        title="Home"
        description="Provision of equipment, spares and engineering services"
      />
      <Hero/>
      <Customers/>
      <Why/>
      <Agencies/>
      <Contact/>

    </Layout>
  );
}

export default IndexPage;
