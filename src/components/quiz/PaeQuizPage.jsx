import React, { useState, useRef } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';
import FormFields from '../FormFields';
import CustomLink from '../CustomLink';
import AppointmentModal from '../AppointmentModal';
import { paeQuizData } from './data/quizData';
import PaeQuizResult from './PaeQuizResult';
import StickyButtons from '../StickyButtons.jsx';
import { useModal } from '../../context/ModalContext.jsx';

const PaeQuizPage = () => {

    const formRef = useRef();
    const handleRetakeQuiz = () => {
        setAnswers([]);
        setCurrentQuestionIndex(0);
        setSubmitted(false);
        setShowForm(false);
    };

    const { openModal } = useModal();

    const quiz = paeQuizData;

    const [showForm, setShowForm] = useState(false);

    const [answers, setAnswers] = useState(Array(quiz.questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const total = quiz.questions.length;
    const isAnswered = answers[currentQuestionIndex] !== null;
    const isLast = currentQuestionIndex === total - 1;

    const options =
        quiz.specialOptions && quiz.specialOptions[currentQuestionIndex]
            ? quiz.specialOptions[currentQuestionIndex]
            : quiz.options;

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

    const score = answers.reduce((sum, v) => sum + (v ?? 0), 0);
    const result = quiz.result(score);
    const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
    const maxScore = quiz.maxScore;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <div className="mb-6">
                        <div className="w-full bg-gray-200 h-2 rounded">
                            <div
                                className="bg-teal-600 h-2 rounded transition-all"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2 text-right">
                            Question {currentQuestionIndex + 1} of {total}
                        </p>
                    </div>

                    {!submitted ? (
                        <>
                            <h1 className="text-xl font-semibold text-gray-800 mb-4">
                                {quiz.questions[currentQuestionIndex]}
                            </h1>
                            <div className="space-y-3">
                                {options.map((opt) => (
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
                    ) :
                        (
                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                {/* <h2 className="text-2xl font-bold text-gray-800 mb-4">{result.title}</h2> */}

                                {/* <div className="text-sm mb-2">
                                    <ScoreTag score="11/20" severity="moderate" />
                                    <br />
                                    <span
                                        className={`inline-block px-2 py-1 rounded font-medium ${result.severity === 'mild' ? 'bg-green-100 text-green-700' :
                                            result.severity === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        Your Score: {result.score} / ${maxScore}
                                    </span>
                                </div> */}

                                {submitted && <PaeQuizResult score={result.score} maxScore={maxScore} />}
                                <div>

                                    <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg text-center">
                                        <CustomLink procedure={`PAE Quiz - ${result.score} / ${maxScore}`}>{result.cta}</CustomLink>
                                    </div>

                                    {showForm && (
                                        <div className="mt-6">
                                            <FormFields
                                                ref={formRef}
                                                procedure={`PAE Quiz - ${result.score} / ${maxScore}`}
                                                onSuccess={() => {
                                                    alert('Thanks !');
                                                    formRef.current?.resetForm();
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>

                                <button
                                    className="mt-4 text-teal-600 underline text-sm"
                                    onClick={handleRetakeQuiz}
                                >
                                    Retake Quiz
                                </button>
                            </div>

                        )}

                    <div className="mt-10 border-t pt-6 text-sm text-gray-500">
                        <p>🩺 IPSS Score is trusted by leading urologists and validated by international institutions.</p>
                        <p className="text-sm text-gray-600">Know someone who may need a quick prostate enlargement check? Share this free tool.</p>
                    </div>
                </div>
            </div>

            <StickyButtons
                onBookAppointment={() => openModal()}
                onContactClick={() => setShowContactModal(true)}
            />

            <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
            <AppointmentModal
                show={showModal}
                onClose={() => setShowModal(false)}
                procedure={`PAE Quiz - ${result.score} / ${maxScore}`}
            />
        </div>
    );
};

export default PaeQuizPage;
