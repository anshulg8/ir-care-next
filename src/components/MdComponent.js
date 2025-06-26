import MarkdownRenderer from './MarkdownRenderer';
import markdownContent from '../md/pae.md?raw';
import markdownContent2 from '../md/uae.md?raw';

function MdComponent() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">


                <MarkdownRenderer content={markdownContent2} />
            </div>
        </section>

    )
}

export default MdComponent;