// eslint-disable-next-line
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true
	},
	i18n
}
