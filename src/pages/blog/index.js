import React from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { BASE_URL, GHOST_API_URL, GHOST_CONTENT_API_KEY } from '@/constants';

export async function getStaticProps() {
    const res = await fetch(
        `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&limit=all&include=authors`
    );
    const data = await res.json();

    // Map Ghost API posts to your post shape
    const posts = data.posts.map(post => ({
        title: post.title,
        slug: post.slug,
        date: new Date(post.published_at).toLocaleDateString(),
        author: Array.isArray(post.authors) && post.authors.length > 0 ? post.authors[0].name : 'Unknown',
        excerpt: post.excerpt,
        reading_time: post.reading_time,
    }));

    return {
        props: { posts },
        revalidate: 60, // ISR: update every 60 seconds
    };
}

const ArticlePage = ({ posts }) => {
    return (
        <>
            <SEO
                title="Docsy Articles | Health Insights & Patient Stories"
                description="Explore minimally invasive treatment stories, expert advice, and patient testimonials."
                url={`${BASE_URL}/blog`}
            />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-teal-600">Articles</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert-written articles, patient experiences, and insights on modern medical procedures.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {posts.map(post => (
                            <Link
                                key={post.slug}
                                href={`https://blog.mydocsy.com/${post.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                            >
                                {post.feature_image && (
                                    <img
                                        src={post.feature_image}
                                        alt={post.feature_image_alt || post.title}
                                        className="w-full h-48 object-cover"
                                    />
                                )}
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-gray-500 mb-2">
                                        {post.date} • {post.author} • {post.reading_time} min read
                                    </p>
                                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                                    <div className="mt-6 text-teal-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-200">
                                        Read post
                                        <svg
                                            className="h-5 w-5 ml-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/procedures"
                            className="inline-block text-teal-600 text-lg font-semibold hover:underline"
                        >
                            Explore our medical procedures &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;

