import React from 'react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';
import { blogsArray } from '@/data';

export async function getStaticProps() {
    const posts = blogsArray.sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
        props: { posts },
    };
}

const BlogPage = ({ posts }) => {
    return (
        <>
            <SEO
                title="Docsy Blog | Health Insights & Patient Stories"
                description="Explore minimally invasive treatment stories, expert advice, and patient testimonials."
                url={`${BASE_URL}/blog`}
            />
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-teal-600">Blog</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert-written articles, patient experiences, and insights on modern medical procedures.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group"
                            >
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                                                {post.title}
                                            </h2>
                                            <p className="text-sm text-gray-500 mb-2">
                                                {post.date} • {post.author}
                                            </p>
                                            <p className="text-gray-600 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 text-teal-600 font-medium flex items-center group-hover:translate-x-2 transition-transform duration-200">
                                        Read post
                                        <svg className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Optional: link to related content */}
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

export default BlogPage;
