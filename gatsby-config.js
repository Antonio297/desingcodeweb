module.exports = {
  siteMetadata: {
    title: `Bach-IK`,
    description: `El curso de preparación Bach-IK está diseñado para ayudar a los estudiantes a alcanzar un nivel adecuado de conocimientos y habilidades para aprobar el examen de acceso aL bachillerato. Durante el curso, los estudiantes reciben clases intensivas en las diferentes áreas temáticas del examen y se les proporciona material de estudio adicional para que puedan practicar desde la comodidad de su hogar.`,
    author: `@Antonio279`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/icons/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
