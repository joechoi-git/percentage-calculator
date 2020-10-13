import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home() {
  return (
    <Layout>
      <SEO title="Percent Calculator Pro" description="Percent Calculator Pro is a free online tool to calculate percentages." />
      <h1>Percent Calculator Pro is a free online tool to calculate percentages.</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </Layout>
  )
}