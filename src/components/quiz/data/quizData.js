export const paeQuizData = {
    title: 'Prostate Symptom Quiz (IPSS)',
    questions: [
        'Incomplete Emptying - How often have you had the sensation of not emptying your bladder?',
        'Frequency - How often have you had to urinate less than every two hours?',
        'Intermittency - How often have you found you stopped and started again several times when you urinated?',
        'Urgency - How often have you found it difficult to postpone urination?',
        'Weak Stream - How often have you had a weak urinary stream?',
        'Straining - How often have you had to strain to start urination?',
        'Nocturia - How many times did you typically get up at night to urinate?',
    ],
    maxScore: 35,
    options: [
        { label: 'Not at All', value: 0 },
        { label: 'Less than 1 in 5 Times', value: 1 },
        { label: 'Less than Half the Time', value: 2 },
        { label: 'About Half the Time', value: 3 },
        { label: 'More than Half the Time', value: 4 },
        { label: 'Almost Always', value: 5 },
    ],
    specialOptions: {
        6: [
            { label: 'None', value: 0 },
            { label: '1 Time', value: 1 },
            { label: '2 Times', value: 2 },
            { label: '3 Times', value: 3 },
            { label: '4 Times', value: 4 },
            { label: '5 Times', value: 5 },
        ]
    },
    result: (score) => {
        if (score <= 7) {
            return {
                severity: 'mild',
                score,
                cta: '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.',
            };
        } else if (score <= 19) {
            return {
                severity: 'moderate',
                score,
                cta: '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.',
            };
        } else {
            return {
                severity: 'severe',
                score,
                cta: '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.',
            };
        }
    },
};

export const uaeQuizData = {
    title: 'Fibroid Symptom Fast-Check™ (UFS-QOL SSS)',
    questions: [
        'Heavy menstrual bleeding',
        'Passing clots during periods',
        'Pelvic pressure or a feeling of heaviness',
        'Needing to urinate frequently',
        'Waking at night to urinate',
        'Menstrual cramp-type pain',
        'Missing work or household duties',
        'Feeling tired or “worn out”',
    ],
    maxScore: 40,
    options: [
        { label: 'Not at all', value: 0 },
        { label: 'A little', value: 1 },
        { label: 'Moderately', value: 2 },
        { label: 'Quite a bit', value: 3 },
        { label: 'A great deal', value: 4 },
    ],
    result: (rawScore) => {
        // Raw SSS ranges from 8 to 40 (UFS-QOL standard)
        // rawScore is assumed to be between 8 and 40
        let severity = '';
        let cta = '';

        if (rawScore <= 15) {
            severity = 'mild';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else if (rawScore <= 23) {
            severity = 'moderate';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else if (rawScore <= 31) {
            severity = 'severe';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else {
            severity = 'very_severe';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        }

        return {
            score: rawScore,
            severity,
            cta,
        };
    },
};

export const haeQuizData = {
    title: 'Hemorrhoid Symptom Fast-Check™ (HDSS Scale)',
    questions: [
        'Bright-red bleeding',
        'Anal pain/discomfort',
        'Itching/irritation around anus',
        'Lumps/Prolapse while passing stool(soft parts coming out of anus)',
        'Soiling/Staining of underwear',
    ],
    maxScore: 20,
    options: [
        { label: 'Never', value: 0 },
        { label: 'Rarely (at least once a month)', value: 1 },
        { label: 'Sometimes (at least once a week)', value: 2 },
        { label: 'Often (2–6 times a week)', value: 3 },
        { label: 'Daily (almost every day)', value: 4 },
    ],
    result: (rawScore) => {
        let severity = '';
        let cta = '';

        if (rawScore <= 4) {
            severity = 'mild';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else if (rawScore <= 9) {
            severity = 'moderate';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else if (rawScore <= 14) {
            severity = 'severe';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else {
            severity = 'verySevere';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        }

        return {
            score: rawScore,
            severity,
            cta,
        };
    },
};

export const tameQuizData = {
    title: 'Chronic Joint Pain Self-Assessment (PEG Scale)',
    questions: [
        'On average in the past week, how intense was your joint pain?',
        'How much has pain interfered with your enjoyment of life?',
        'How much has pain interfered with your general activity?',
        'Where is your worst pain?',
        'Has this pain lasted ≥ 3 months AND increases after activity?',
    ],
    maxScore: 10,
    options: {
        intensityScale: Array.from({ length: 11 }, (_, i) => ({ label: `${i}`, value: i })), // 0-10 scale
        painLocation: ['Ankle', 'Knee', 'Hip', 'Lower back', 'Shoulder', 'Neck', 'Other'],
        chronicTrigger: [
            { label: 'Yes to both', value: true },
            { label: 'No', value: false }
        ]
    },
    result: (pegScore) => {
        let severity = '';
        let cta = '';

        if (pegScore <= 4) {
            severity = 'mild';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else if (pegScore <= 7.5) {
            severity = 'moderate';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else if (pegScore <= 9) {
            severity = 'severe';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        } else {
            severity = 'verySevere';
            cta = '📞 Unsure about next steps? Book your first consult with our doctor for free - get full clarity, zero obligations.';
        }

        return {
            score: pegScore,
            severity,
            cta,
        };
    }
};
