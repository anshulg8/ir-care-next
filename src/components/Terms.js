import React from 'react';

const Terms = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Terms <span className="text-teal-600">& Conditions</span>
                </h2>

                <div className="max-w-3xl mx-auto text-gray-700 text-base leading-7 space-y-6">

                    <p>
                        By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
                        If you do not agree to these terms, please do not use this site.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800">1. Use of Site</h4>
                    <p>
                        This site is intended for informational purposes only. The information provided is not a substitute for
                        professional medical advice, diagnosis, or treatment.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800">2. User Responsibility</h4>
                    <p>
                        You are responsible for ensuring that your use of the site complies with all applicable laws and regulations.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800">3. Intellectual Property</h4>
                    <p>
                        All content on this site, including text, graphics, logos, and images, is the property of the website owner
                        and is protected by intellectual property laws.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800">4. Limitation of Liability</h4>
                    <p>
                        We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the site.
                    </p>

                    <h4 className="text-xl font-semibold text-gray-800">5. Changes to Terms</h4>
                    <p>
                        We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the site
                        after changes indicates your acceptance of the new terms.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Terms;
