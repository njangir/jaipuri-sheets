/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "njangir.github.io",
			},
		],
	},
};

module.exports = nextConfig;