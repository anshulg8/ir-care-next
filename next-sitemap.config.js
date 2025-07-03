// next-sitemap.config.js

procedureSlugs = ["prostatic-artery-embolization-pae", "uterine-fibroid-embolization-ufe", "hemorrhoidal-artery-embolization-hae", "okuno-procedure-tam"]

module.exports = {
    siteUrl: 'https://refer.mydocsy.com',
    generateRobotsTxt: true,

    // Add dynamic routes here
    additionalPaths: async (config) => {
        return procedureSlugs.map((slug) => ({
            loc: `/procedures/${slug}`,
            changefreq: 'weekly',
            priority: 0.8,
        }));
    },
};
