/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
			},
			{
				protocol: "https",
				hostname: "ecomm-6nhx10e28-njangirs-projects.vercel.app",
			},
		],
	},
};

module.exports = nextConfig;