// next-sitemap.config.js

const staticPages = [
    '/',
    '/about',
    '/contact',
    '/doctors',
    '/blog',
    '/terms',
    '/privacy',
]

const specialties = {
    urology: {
        procedures: [
            'cryoablation',
            'focal-therapy',
            'focal-therapy',
            'kidney-tumor-ablation',
            'mini-pcnl',
            'pae',
            'pelvic-floor-biofeedback',
            'rezum',
            'rirs',
            'turp',
            'ursl',
        ],
        conditions: [
            'bph',
            'kidney-stones',
            'kidney-tumor',
            'luts-incontinence',
            'prostate-cancer',
            'urologic-cancers',
        ],
        symptoms: [
            'blood-in-urine',
            'difficulty-urinating',
            'flank-pain-stone',
            'frequent-urination',
            'recurrent-uti',
            'urine-leakage',
        ],
    },
}

// procedureSlugs = ["prostatic-artery-embolization-pae", "uterine-fibroid-embolization-ufe", "hemorrhoidal-artery-embolization-hae", "okuno-procedure-tam"]

module.exports = {
    siteUrl: 'https://mydocsy.com',
    generateRobotsTxt: true,

    additionalPaths: async () => {
        const paths = []

        // ✅ Static pages
        staticPages.forEach((loc) => {
            paths.push({
                loc,
                changefreq: 'monthly',
                priority: loc === '/' ? 1.0 : 0.6,
                lastmod: new Date().toISOString(),
            })
        })

        // ✅ Specialty pages
        Object.entries(specialties).forEach(([specialty, categories]) => {
            const base = `/specialties/${specialty}`

            paths.push({
                loc: base,
                changefreq: 'weekly',
                priority: 0.8,
            })

            Object.entries(categories).forEach(([category, slugs]) => {
                const categoryBase = `${base}/${category}`

                paths.push({
                    loc: categoryBase,
                    changefreq: 'weekly',
                    priority: 0.7,
                })

                slugs.forEach((slug) => {
                    paths.push({
                        loc: `${categoryBase}/${slug}`,
                        changefreq: 'weekly',
                        priority: 0.8,
                    })
                })
            })
        })

        return paths
    },
}