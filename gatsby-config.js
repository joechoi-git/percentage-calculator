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
    siteUrl: `https://percentcalculatorpro.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `PercentCalculatorPro.com`,
        short_name: `PercentCalculatorPro.com`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#f2f2f2`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-180603059-1`,
      },
    },
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: `ca-pub-8044960938685094`
      }
    }
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
}