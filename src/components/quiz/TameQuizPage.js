import React, { useState, useRef } from 'react';
import ContactFloatingButton from '../ContactFloatingButton';
import FormFields from '../FormFields';
import CustomLink from '../CustomLink';
import AppointmentModal from '../AppointmentModal';
import { tameQuizData } from './data/quizData';
import TameQuizResult from './TameQuizResult';

const TameQuizPage = () => {
  const formRef = useRef();

  const [answers, setAnswers] = useState(Array(tameQuizData.questions.length).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const total = tameQuizData.questions.length;
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


      // // Log raw answers
      // console.log('Submitted Answers (raw values):', answers);

      // // Log labeled answers
      // const labeledAnswers = answers.map((value, index) => {
      //   const question = tameQuizData.questions[index];

      //   let label = '';
      //   if (index <= 2) {
      //     label = tameQuizData.options.intensityScale.find(opt => opt.value === value)?.label || 'N/A';
      //   } else if (index === 3) {
      //     label = value; // pain location is stored as string
      //   } else if (index === 4) {
      //     label = tameQuizData.options.chronicTrigger.find(opt => opt.value === value)?.label || 'N/A';
      //   }

      //   return { question, answer: label };
      // });

      // console.log('Detailed Answers:', labeledAnswers);
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
    setAnswers(Array(tameQuizData.questions.length).fill(null));
    setCurrentQuestionIndex(0);
    setSubmitted(false);
    setShowForm(false);
  };

  // PEG score = average of first 3 responses
  const pegRawScore = answers.slice(0, 3).reduce((sum, v) => sum + (v ?? 0), 0);
  const pegScore = Math.round((pegRawScore / 3) * 10) / 10; // rounded to 1 decimal place
  const result = tameQuizData.result(pegScore);
  const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
  const maxScore = tameQuizData.maxScore;

  const renderOptions = () => {
    if (currentQuestionIndex <= 2) {
      return tameQuizData.options.intensityScale.map((opt) => (
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
      ));
    } else if (currentQuestionIndex === 3) {
      return tameQuizData.options.painLocation.map((loc) => (
        <label key={loc} className="flex items-center space-x-3">
          <input
            type="radio"
            name="painLocation"
            checked={answers[3] === loc}
            onChange={() => handleOptionChange(loc)}
            className="form-radio text-teal-600"
          />
          <span>{loc}</span>
        </label>
      ));
    } else {
      return tameQuizData.options.chronicTrigger.map((opt) => (
        <label key={opt.label} className="flex items-center space-x-3">
          <input
            type="radio"
            name="chronicTrigger"
            checked={answers[4] === opt.value}
            onChange={() => handleOptionChange(opt.value)}
            className="form-radio text-teal-600"
          />
          <span>{opt.label}</span>
        </label>
      ));
    }
  };

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
              <div className="mb-4">
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {tameQuizData.questions[currentQuestionIndex]}
                </h1>

                {currentQuestionIndex === 0 && (
                  <p className="text-sm text-gray-500 italic">0 = No pain → 10 = Worst imaginable</p>
                )}
                {currentQuestionIndex === 1 && (
                  <p className="text-sm text-gray-500 italic">0 = Not at all → 10 = Completely</p>
                )}
                {currentQuestionIndex === 2 && (
                  <p className="text-sm text-gray-500 italic">0 = Not at all → 10 = Completely</p>
                )}
                {currentQuestionIndex === 4 && (
                  <p className="text-sm text-gray-500 italic">Only say yes if both are true</p>
                )}
              </div>

              <div className="space-y-3">
                {renderOptions()}
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

              <TameQuizResult score={pegScore} maxScore={maxScore} />

              <div className="bg-teal-50 border border-teal-100 text-gray-800 p-4 rounded-lg mt-8 text-lg text-center">
                <CustomLink procedure={`TAME Quiz - ${pegScore} / ${maxScore}`}>
                  {result.cta}
                </CustomLink>
              </div>

              {showForm && (
                <div className="mt-6">
                  <FormFields
                    ref={formRef}
                    procedure={`TAME Quiz - ${pegScore} / ${maxScore}`}
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
            <p>🩺 The PEG-3 pain scale is trusted by leading doctors and validated by international institutions.</p>
            <p className="text-sm text-gray-600">Know someone who may have chronic joint pain? *Share this free tool* to help them check their severity.</p>
          </div>
        </div>
      </div>

      <ContactFloatingButton forceOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      <AppointmentModal
        show={showModal}
        onClose={() => setShowModal(false)}
        procedure={`TAME Quiz - ${pegScore} / ${maxScore}`}
      />
    </div>
  );
};

export default TameQuizPage;
