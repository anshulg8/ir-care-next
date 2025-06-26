import React from 'react';

const Privacy = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Our <span className="text-teal-600">Privacy Policy</span>
                </h2>

                <div className="max-w-3xl mx-auto text-gray-700 text-base leading-7 space-y-6">
                    <p>
                        We value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect,
                        use, and safeguard the information you provide when using our website or services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">1. Information We Collect</h3>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and any other details you submit
                        through contact forms or sign-ups. We may also collect non-personal data like browser type or device used.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h3>
                    <p>
                        Your information may be used to respond to inquiries, improve our services, personalize user experience,
                        and communicate updates or promotional material (if consent is given).
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">3. Data Protection</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your data from unauthorized access,
                        loss, or misuse.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">4. Sharing Information</h3>
                    <p>
                        We do not sell, rent, or trade your personal information to third parties. Information may be shared only with trusted
                        service providers under strict confidentiality agreements or when required by law.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">5. Cookies</h3>
                    <p>
                        Our site may use cookies to enhance your browsing experience. You can choose to disable cookies through your
                        browser settings, though some features may not function properly as a result.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">6. Your Rights</h3>
                    <p>
                        You have the right to access, correct, or request deletion of your personal data. You may also opt out of marketing
                        communications at any time.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800">7. Changes to This Policy</h3>
                    <p>
                        We reserve the right to modify this Privacy Policy at any time. Updates will be posted on this page with a revised
                        effective date.
                    </p>

                    <p>
                        If you have any questions regarding this policy, please contact us through the form on our contact page.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
