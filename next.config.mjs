/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true, // needed if using <Image /> with static export
    },
};

export default nextConfig;
