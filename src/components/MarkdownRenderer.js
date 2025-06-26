import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import FeaturedDoctorsSection from './FeaturedDoctorsSection';

const COMPONENT_PLACEHOLDERS = {
    FEATURED_DOCTORS_SECTION: <FeaturedDoctorsSection />,
};

const renderMarkdownWithComponents = (content) => {
    const parts = content.split(/<!--(.*?)-->/g); // Split on comment tags like <!--COMPONENT_NAME-->

    return parts.map((part, index) => {
        const trimmed = part.trim();

        if (COMPONENT_PLACEHOLDERS[trimmed]) {
            return <div key={index}>{COMPONENT_PLACEHOLDERS[trimmed]}</div>;
        }

        return (
            <ReactMarkdown
                key={index}
                remarkPlugins={[remarkGfm]}
                components={{
                    table({ node, ...props }) {
                        return (
                            <table
                                style={{
                                    borderCollapse: 'collapse',
                                    width: '100%',
                                    margin: '16px 0',
                                    border: '1px solid #ddd',
                                }}
                                {...props}
                            />
                        );
                    },
                    th({ node, ...props }) {
                        return (
                            <th
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '12px',
                                    textAlign: 'left',
                                    backgroundColor: '#f2f2f2',
                                }}
                                {...props}
                            />
                        );
                    },
                    td({ node, ...props }) {
                        return (
                            <td
                                style={{
                                    border: '1px solid #ddd',
                                    padding: '8px',
                                }}
                                {...props}
                            />
                        );
                    },
                    h1({ node, ...props }) {
                        return <h1 style={{ fontSize: '2em', margin: '0.67em 0' }} {...props} />;
                    },
                    h2({ node, ...props }) {
                        return <h2 style={{ fontSize: '1.5em', margin: '0.83em 0' }} {...props} />;
                    },
                    ul({ node, ...props }) {
                        return <ul className="list-disc list-inside space-y-2 mb-4" {...props} />;
                    },
                    ol({ node, ...props }) {
                        return <ol className="list-decimal list-inside space-y-2 mb-4" {...props} />;
                    },
                    li({ node, ...props }) {
                        return <li className="text-base" {...props} />;
                    },
                    p: ({ node, ...props }) => (
                        <p className="mb-4 text-gray-700" {...props} />
                    ),
                }}
            >
                {part}
            </ReactMarkdown>
        );
    });
};

const MarkdownRenderer = ({ content }) => {
    return <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>{renderMarkdownWithComponents(content)}</div>;
};

export default MarkdownRenderer;
