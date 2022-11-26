/* eslint-env es6 */
const siteUrl = process.env.SITE_URL || "https://mrluisfer-portfolio.vercel.app/"

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	sitemapSize: 7000,
	alternateRefs: [],
	robotsTxtOptions: {
		policies: [
			{ userAgent: "*", allow: "/" },
		],
	}
}
