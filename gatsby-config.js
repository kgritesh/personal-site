const { normalizeUrl } = require('./src/utils/helpers');

module.exports = {
  siteMetadata: {
    title: 'Ritesh Kadmawala',
    author: 'Ritesh Kadmawala',
    image: 'https://vertexcover.dev/avatar.jpg',
    description: "Ritesh Kadmawala's Profile",
    siteUrl: 'https://vertexcover.dev/',
    social: {
      twitter: 'krg85',
    },
    organization: {
      name: 'Ritesh Kadmawala',
      url: 'https://vertexcover.dev',
    },
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/templates/page.js'),
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-copy-linked-files' },
          {
            resolve: `gatsby-remark-images`,
            options: {
              backgroundColor: '#141414',
              maxWidth: 590,
              quality: 100,
            },
          },
          {
            resolve: require.resolve('./plugins/remark-embedder'),
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          { resolve: 'gatsby-remark-smartypants' },
          { resolve: 'gatsby-remark-embedder' },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-posthog-analytics',
      options: {
        apiKey: 'QuJqubHe1vk9j3pQJJrkV7lHFSxfjbS6Ogit0x5vgdQ',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ritesh Kadmawala`,
        short_name: `AB`,
        start_url: `/`,
        background_color: `#151515`,
        theme_color: `#d7d7d7`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            return {
              url: normalizeUrl(site.siteMetadata.siteUrl + edge.node.path),
              changefreq: `daily`,
              priority: 0.7,
            };
          }),
      },
    },
  ],
};
