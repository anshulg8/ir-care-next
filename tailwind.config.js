module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.800'),
                        h1: { color: theme('colors.teal.600') },
                        h2: { color: theme('colors.teal.600') },
                        strong: { color: theme('colors.teal.700') },
                        a: {
                            color: theme('colors.teal.600'),
                            textDecoration: 'underline',
                            '&:hover': {
                                color: theme('colors.teal.800'),
                            },
                        },
                        blockquote: {
                            borderLeftColor: theme('colors.teal.400'),
                            color: theme('colors.gray.600'),
                        },
                        // ...you can customize all other tags here
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
