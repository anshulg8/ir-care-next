import React from 'react';
import Image from 'next/image';
import SEO from '@/components/SEO';
import { BASE_URL, GHOST_API_URL, GHOST_CONTENT_API_KEY } from '@/constants';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const res = await fetch(
        `${GHOST_API_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_API_KEY}&fields=slug&limit=all`
    );
    const data = await res.json();

    const paths = data.posts.map(post => ({
        params: { slug: post.slug }
    }));

    return {
        paths,
        fallback: false, // Or 'blocking' if you want to support ISR later
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(
        `${GHOST_API_URL}/ghost/api/content/posts/slug/${params.slug}/?key=${GHOST_CONTENT_API_KEY}&include=authors`
    );
    const data = await res.json();
    const post = data.posts[0];

    return {
        props: {
            post: {
                title: post.title,
                slug: post.slug,
                date: new Date(post.published_at).toLocaleDateString(),
                author: post.authors?.[0]?.name || 'Unknown',
                html: post.html,
                excerpt: post.excerpt,
                feature_image: post.feature_image || null,
            },
        },
    };
}

const ArticleShowPage = ({ post }) => {
    const router = useRouter();

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                url={`${BASE_URL}/article/${post.slug}`}
            />

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <p className="text-sm text-gray-500 mb-6">
                    {post.date} • {post.author}
                </p>

                {post.feature_image && (
                    <div className="mb-8">
                        <Image
                            src={post.feature_image}
                            alt={post.title}
                            width={800}
                            height={400}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                )}

                {/* <div
                    className="prose prose-lg max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                /> */}
                {/* <div
                    className="prose prose-teal prose-img:rounded-xl prose-headings:text-gray-900 prose-a:text-teal-600 max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                /> */}

                <div className="prose prose-lg prose-blue max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>


            </article>
        </>
    );
};

export default ArticleShowPage;
