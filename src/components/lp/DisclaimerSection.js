export default function DisclaimerSection() {
  return (
    <footer className="bg-white text-gray-600 text-xs px-4 py-6 space-y-3 border-t border-gray-200">
      <p className="text-center font-medium">
        © {new Date().getFullYear()} Docsy Medtech Private Limited. All Rights Reserved
      </p>

      <div className="space-y-2">
        <p className="font-semibold text-gray-700 uppercase text-[11px]">Disclaimer:</p>

        <ul className="list-disc pl-5 space-y-1">
          <li>
            The result and experience may vary from patient to patient.
          </li>
          <li>
            By submitting the form, you agree to receive important updates and marketing communication.
          </li>
          <li>
            *As per the Birth Control Act, conduct of pre-natal sex-determination tests or disclosure
            of sex of the foetus is prohibited. Docsy and their employees and representatives
            do not engage in pre-natal sex determination tests or disclosure of sex of foetus.
          </li>
        </ul>
      </div>
    </footer>
  );
}
