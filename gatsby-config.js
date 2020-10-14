/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `PercentCalculatorPro.com`,
    description: `Percent Calculator Pro is a free online tool to calculate percentages.`,
    author: `Joe Choi`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PercentCalculatorPro.com`,
        short_name: `PercentCalculatorPro.com`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-180603059-1",
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}