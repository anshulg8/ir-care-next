import React, { useState, useRef } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';
import FormFields from '../FormFields';
import CustomLink from '../CustomLink';
import AppointmentModal from '../AppointmentModal';
import { uaeQuizData } from './data/quizData';
import UaeQuizResult from './UaeQuizResult';

const UaeQuizPage = () => {
    const formRef = useRef();

    const [answers, setAnswers] = useState(Array(uaeQuizData.questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const total = uaeQuizData.questions.length;
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
        setAnswers(Array(uaeQuizData.questions.length).fill(null));
        setCurrentQuestionIndex(0);
        setSubmitted(false);
        setShowForm(false);
    };

    const rawScore = answers.reduce((sum, v) => sum + (v ?? 0), 0);
    const normalizedScore = rawScore + 8; // UFS-QOL SSS adds 8 as floor
    const result = uaeQuizData.result(normalizedScore);
    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
    const maxScore = uaeQuizData.maxScore;

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
                            <p><i>In the past 4 weeks, how much did this problem affect you?</i></p><br />
                            <h1 className="text-xl font-semibold text-gray-800 mb-4">
                                {uaeQuizData.questions[currentQuestionIndex]}
                            </h1>
                            <div className="space-y-3">
                                {uaeQuizData.options.map((opt) => (
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
                            <UaeQuizResult score={normalizedScore} maxScore={maxScore} />

                            <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg text-center">
                                <CustomLink procedure={`UAE Quiz - ${normalizedScore} / ${maxScore}`}>
                                    {result.cta}
                                </CustomLink>
                            </div>

                            {showForm && (
                                <div className="mt-6">
                                    <FormFields
                                        ref={formRef}
                                        procedure={`UAE Quiz - ${normalizedScore} / ${maxScore}`}
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
                        <p>🩺 Know someone suffering from heavy or painful periods?</p>
                        <p className="text-sm text-gray-600">
                            *Share this free tool* to help them know more.
                        </p>
                    </div>
                </div>
            </div>

            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal
                show={showModal}
                onClose={() => setShowModal(false)}
                procedure={`UAE - ${normalizedScore} / ${maxScore}`}
            />
        </div>
    );
};

export default UaeQuizPage;
