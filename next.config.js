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
				hostname: "main.d2n1gnvnee9zu1.amplifyapp.com",
			},
		],
	},
};

module.exports = nextConfig;