/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'public', 'styles', 'cypress'],
	},
};

module.exports = nextConfig;
