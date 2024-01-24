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
				hostname: "ecomm-production-44dc.up.railway.app",
			},
		],
	},
};

module.exports = nextConfig;