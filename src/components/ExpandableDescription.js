import { useState } from 'react';

const ExpandableDescription = ({ description }) => {
    const [expanded, setExpanded] = useState(false);
    const MAX_LENGTH = 150;

    const isLong = description.length > MAX_LENGTH;
    const displayText = expanded ? description : description.slice(0, MAX_LENGTH);

    return (
        <div className="mt-3 text-sm text-gray-700">
            <p>
                {displayText}
                {isLong && !expanded ? '...' : ''}
            </p>
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-teal-600 hover:underline mt-1 text-sm"
                >
                    {expanded ? 'See less' : 'See more'}
                </button>
            )}
        </div>
    );
};

export default ExpandableDescription;