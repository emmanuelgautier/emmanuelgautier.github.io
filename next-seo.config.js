const subdomainFr = 'www.emmanuelgautier.fr'
const subdomainEn = 'www.emmanuelgautier.com'

const siteUrl = process.env.DOMAIN || subdomainFr
const blogSubdomain =
  siteUrl === subdomainFr ? 'blog.emmanuelgautier.fr' : subdomainEn

module.exports = {
  siteUrl: `https://${siteUrl}`,

  socials: [
    'https://github.com/emmanuelgautier',
    'https://twitter.com/gautier_manu',
    'https://www.linkedin.com/in/emmanuelgautier1',
  ],

  blog: {
    pathPrefix: siteUrl === subdomainFr ? '/' : '/blog',
    subdomain: blogSubdomain,
  },

  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',

    domains: [
      {
        domain: subdomainFr,
        defaultLocale: 'fr',
      },

      {
        domain: subdomainEn,
        defaultLocale: 'en',
      },
    ],
  },

  person: {
    name: 'Emmanuel Gautier',
    image: '/images/profile.png',
  },

  openGraph: {
    type: 'website',
    site_name: 'Emmanuel Gautier',
  },

  twitter: {
    handle: '@gautier_manu',
    site: '@gautier_manu',
    cardType: 'summary_large_image',
  },
}
