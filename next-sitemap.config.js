/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://mrluisfer-portfolio.vercel.app/',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	alternateRefs: [],
	robotsTxtOptions: {
		policies: [{ userAgent: '*', allow: '/' }],
	},
	generateIndexSitemap: false,
}
