import { useEffect, useState } from 'react';
import Link from 'next/link';
import HTMLBlockRenderer from '@/components/HTMLBlockRenderer';
import SEO from '@/components/SEO';
import { BASE_URL } from '@/constants';
import { blogsArray } from '@/data';

const BlogDetailPage = ({ blog }) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Delay mounting heavy HTML component for smoother load
        setShowContent(true);
    }, []);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Blog Post Not Found</h1>
                    <Link href="/blog" className="text-teal-600 hover:underline mt-4 block">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={`${blog.title} | Docsy Blog`}
                description={blog.excerpt}
                url={`${BASE_URL}/blog/${blog.slug}`}
            />

            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        {blog.date} • {blog.author}
                    </p>

                    {/* Render HTML content from public/blog/html/[slug].html */}
                    {showContent && (
                        <div className="prose prose-lg max-w-none">
                            <HTMLBlockRenderer type={blog.htmlPath} />
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <Link href="/blog" className="text-teal-600 hover:underline text-lg font-medium">
                            ← Back to All Blog Posts
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailPage;

export async function getStaticPaths() {

    const paths = blogsArray.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const blog = blogsArray.find((p) => p.slug === params.slug) || null;

    return {
        props: {
            blog,
        },
    };
}
