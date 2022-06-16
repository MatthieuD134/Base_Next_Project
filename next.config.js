/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'public', 'styles'],
	},
};

module.exports = nextConfig;
