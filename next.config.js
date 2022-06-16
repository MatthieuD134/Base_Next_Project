/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	eslint: {
		dirs: ['pages', 'public', 'styles', 'cypress', '__tests__', 'support'],
	},
};

module.exports = nextConfig;
