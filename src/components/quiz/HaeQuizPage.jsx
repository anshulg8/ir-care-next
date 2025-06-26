import React, { useState, useRef } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';
import FormFields from '../FormFields';
import CustomLink from '../CustomLink';
import AppointmentModal from '../AppointmentModal';
import { haeQuizData } from './data/quizData';
import HaeQuizResult from './HaeQuizResult';

const HaeQuizPage = () => {
    const formRef = useRef();

    const [answers, setAnswers] = useState(Array(haeQuizData.questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const total = haeQuizData.questions.length;
    const isAnswered = answers[currentQuestionIndex] !== null;
    const isLast = currentQuestionIndex === total - 1;

    const handleOptionChange = (value) => {
        const updated = [...answers];
        updated[currentQuestionIndex] = value;
        setAnswers(updated);
    };

    const handleNext = () => {
        if (!isAnswered) return;
        if (isLast) {
            setSubmitted(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleRetakeQuiz = () => {
        setAnswers(Array(haeQuizData.questions.length).fill(null));
        setCurrentQuestionIndex(0);
        setSubmitted(false);
        setShowForm(false);
    };

    const rawScore = answers.reduce((sum, v) => sum + (v ?? 0), 0);
    const normalizedScore = rawScore + 0; // UFS-QOL SSS adds 8 as floor - redundant
    const result = haeQuizData.result(normalizedScore);
    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
    const maxScore = haeQuizData.questions.length * 4;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="mb-6">
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div
                                className="bg-teal-500 h-2 rounded transition-all"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-right">
                            Question {currentQuestionIndex + 1} of {total}
                        </p>
                    </div>

                    {!submitted ? (
                        <>
                            <p><i>In the past four weeks, how often have you experienced:</i></p><br />
                            <h1 className="text-xl font-semibold text-gray-800 mb-4">
                                {haeQuizData.questions[currentQuestionIndex]}
                            </h1>
                            <div className="space-y-3">
                                {haeQuizData.options.map((opt) => (
                                    <label key={opt.value} className="flex items-center space-x-3">
                                        <input
                                            type="radio"
                                            name={`q-${currentQuestionIndex}`}
                                            checked={answers[currentQuestionIndex] === opt.value}
                                            onChange={() => handleOptionChange(opt.value)}
                                            className="form-radio text-teal-600"
                                        />
                                        <span>{opt.label}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-between mt-8">
                                <button
                                    onClick={handleBack}
                                    disabled={currentQuestionIndex === 0}
                                    className="text-teal-600 font-medium disabled:text-gray-400"
                                >
                                    ← Back
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={!isAnswered}
                                    className={`px-6 py-2 text-white rounded-lg font-semibold ${isAnswered
                                        ? 'bg-teal-600 hover:bg-teal-700'
                                        : 'bg-gray-300 cursor-not-allowed'
                                        }`}
                                >
                                    {isLast ? 'Submit' : 'Next →'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="bg-white p-6 rounded-lg shadow-md mt-6">

                            <HaeQuizResult score={normalizedScore} maxScore={maxScore} />

                            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg text-center">
                                <CustomLink procedure={`HAE Quiz - ${normalizedScore} / {maxScore}`}>
                                    {result.cta}
                                </CustomLink>
                            </div>

                            {showForm && (
                                <div className="mt-6">
                                    <FormFields
                                        ref={formRef}
                                        procedure={`HAE Quiz - ${normalizedScore} / {maxScore}`}
                                        onSuccess={() => {
                                            alert('Thanks!');
                                            formRef.current?.resetForm();
                                        }}
                                    />
                                </div>
                            )}

                            <button
                                className="mt-4 text-teal-600 underline text-sm"
                                onClick={handleRetakeQuiz}
                            >
                                Retake Quiz
                            </button>
                        </div>
                    )}

                    <div className="mt-10 border-t pt-6 text-sm text-gray-500">
                        <p>🩺 The HDSS scale is trusted by leading doctors and validated by international institutions.</p>
                        <p className="text-sm text-gray-600">
                            Know someone who may have piles? *Share this free tool* to help them check their severity.
                        </p>
                    </div>

                </div>
            </div>

            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal
                show={showModal}
                onClose={() => setShowModal(false)}
                procedure={`HAE Quiz - ${normalizedScore} / {maxScore}`}
            />
        </div>
    );
};

export default HaeQuizPage;
