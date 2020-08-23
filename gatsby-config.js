/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Gatsby SEO Blog`,
    description: `
    This is a blog theme. The description will be showed in SEO results on pages
    without their own descriptions
    `,
    siteUrl: `https://example.com`,
    image: `https://lengstorf.com/images/jason-lengstorf.jpg`,
    author: {
      name: `Dustin Schau`,
      minibio: `
      This bio is shown at the bottom of each blog post. It supports
    <strong>custom HTML</strong> if you’re into that sort of thing.
    `,
    },
    social: {
      twitter: `schaudustin`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`project`, `category`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `500`],
          },
        ],
      },
    },
  ],
}
