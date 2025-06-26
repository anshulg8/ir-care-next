import { useState, useMemo } from "react";
import Link from 'next/link';
import Fuse from "fuse.js";
import { proceduresArray } from "../data";

const DiseaseSearch = () => {
    const [query, setQuery] = useState("");

    const fuse = useMemo(() => {
        return new Fuse(proceduresArray, {
            keys: [
                { name: "name", weight: 0.5 },
                { name: "generalName", weight: 0.4 },
                { name: "synonyms", weight: 0.8 },
                { name: "symptoms", weight: 0.6 }
            ],
            threshold: 0.3,
            includeScore: true,
            includeMatches: true,
        });
    }, []);

    const filtered = query
        ? fuse.search(query).map((result) => {
            const match = result.matches?.[0];
            const matchedField = match?.key;
            const matchedValue = match?.value;
            const matchText = match?.value
                ?.toLowerCase()
                ?.includes(query.toLowerCase())
                ? matchedValue
                : null;

            const matchInfo = matchedField === "synonyms"
                ? "Synonym"
                : matchedField === "symptoms"
                    ? "Symptom"
                    : matchedField === "generalName"
                        ? "Common Name"
                        : "Name";

            return {
                ...result.item,
                matchedTerm: matchText || query,
                matchType: matchInfo,
            };
        })
        : [];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Search for a <span className="text-teal-600">Condition</span>
                </h2>
                <p className="text-gray-600 mb-6">
                    Try typing a symptom, condition, or local name (e.g.,{" "}
                    <em>bawasir, fibroid, pain</em>)
                </p>

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., pain, bawasir, fybroid, prostate..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                />

                {query && (
                    <div className="mt-4 bg-white rounded-lg border border-gray-200 shadow-sm text-left">
                        {filtered.length > 0 ? (
                            filtered.map((disease, index) => (
                                <Link
                                    key={index}
                                    href={`/procedures/${disease.slug}`}
                                    className="block px-4 py-3 hover:bg-teal-50 text-gray-800 border-b last:border-b-0"
                                >
                                    <div className="font-medium text-teal-700">
                                        <span className="font-semibold">
                                            {/* {query} */}
                                        </span>{" "}
                                        {/* → Matches {disease.matchType.toLowerCase()}:{" "} */}
                                        <span className="italic text-gray-700">
                                            {disease.matchedTerm}
                                        </span>
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        {disease.name} ({disease.generalName})
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="px-4 py-3 text-gray-500">No results found.</div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DiseaseSearch;
