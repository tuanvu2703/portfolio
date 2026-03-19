/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.jsdelivr.net",
			},
			{
				protocol: "https",
				hostname: "img.icons8.com",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
		],
	},
}

export default nextConfig
