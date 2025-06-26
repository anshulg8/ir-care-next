import React from 'react';

const ScoreTag = ({ score, severity }) => {
    const getColorClasses = (level) => {
        switch (level) {
            case 'mild':
                return 'bg-green-100 text-green-700';
            case 'moderate':
                return 'bg-yellow-100 text-yellow-700';
            case 'severe':
                return 'bg-orange-100 text-orange-700';
            case 'verySevere':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    const formattedSeverity = severity
        ? severity.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
        : 'Unknown';

    return (
        <div className="text-sm mb-2">
            <span className={`inline-block px-3 py-1 rounded font-medium ${getColorClasses(severity)}`}>
                Your Score: {score} ({formattedSeverity})
            </span>
        </div>
    );
};

export default ScoreTag;
