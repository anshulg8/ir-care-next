/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true, // needed if using <Image /> with static export
    },
    async rewrites() {
        return [
            {
                // Match anything under /blog/* EXCEPT /blog or /blog/
                source: '/blog/:path((?!^$).+)', // This means: match if :path is NOT empty
                destination: 'https://blog.mydocsy.com/:path',
            },
        ];
    },
};

export default nextConfig;
