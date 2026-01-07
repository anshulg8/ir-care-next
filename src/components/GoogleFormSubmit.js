import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCrosshairs } from 'react-icons/fa6';
import {
    FIELD_CITY_ID,
    FIELD_DISEASE_ID,
    FIELD_NAME_ID,
    FIELD_PHONE_ID,
    GOOGLE_FORM_ACTION_URL,
    PHONE_NUMBER,
    YOUR_REFERRAL_CODE_FIELD_ID,
    FIELD_GCLID_ID,
} from '../constants';
import StatsBanner from './StatsBanner';
import LeadDr from '../assets/leadform-doc.png';

const GoogleFormSubmit = ({ procedure, onClose }) => {
    const [formData, setFormData] = useState({ name: '', phone: '', city: '', referralCode: '' });
    const [hasReferral, setHasReferral] = useState(false);
    const [status, setStatus] = useState('');
    const [nearbyCities, setNearbyCities] = useState([]);
    const [isLoadingCities, setIsLoadingCities] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    /* ---------------------------------------------------
    1. CAPTURE & STORE GCLID ON FIRST PAGE LOAD
    --------------------------------------------------- */
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const gclid = params.get('gclid');

        if (gclid) {
            localStorage.setItem('gclid', gclid);
        }
    }, []);

    /* ---------------------------------------------------
       2. FETCH NEARBY CITIES
    --------------------------------------------------- */
    useEffect(() => {
        const fetchNearbyCities = async () => {
            setIsLoadingCities(true);
            try {
                const res = await axios.get('https://ipapi.co/json/');
                const { latitude, longitude, city } = res.data;

                const overpassQuery = `
                    [out:json];
                    (
                        node["place"~"city|town|village"](around:50000,${latitude},${longitude});
                    );
                    out body;
                `;

                const response = await axios.post(
                    'https://overpass-api.de/api/interpreter',
                    overpassQuery,
                    {
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    }
                );

                const cityNames = response.data.elements
                    .map((el) => el.tags?.name)
                    .filter(Boolean);

                const uniqueCities = Array.from(new Set([city, ...cityNames]));
                setNearbyCities(uniqueCities.slice(0, 3));
            } catch (error) {
                console.error('Failed to fetch nearby cities:', error);
            } finally {
                setIsLoadingCities(false);
            }
        };

        fetchNearbyCities();
    }, []);

    /* ---------------------------------------------------
       3. LOCATION HANDLER
    --------------------------------------------------- */
    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
                try {
                    const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
                        params: {
                            lat: latitude,
                            lon: longitude,
                            format: 'json',
                        },
                    });

                    const city =
                        response.data.address.city ||
                        response.data.address.town ||
                        response.data.address.village;

                    if (city) {
                        setFormData((prev) => ({ ...prev, city }));
                    } else {
                        alert('Unable to detect city. Try entering it manually.');
                    }
                } catch (err) {
                    console.error(err);
                    alert('Failed to fetch location data.');
                }
            },
            (error) => {
                console.error(error);
                alert('Location access denied or unavailable.');
            }
        );
    };

    // useEffect(() => {
    //     // Lock scroll when modal mounts
    //     document.body.style.overflow = "hidden";
    //     return () => {
    //         // Re-enable scroll when modal unmounts
    //         document.body.style.overflow = "auto";
    //     };
    // }, []);

    /* ---------------------------------------------------
       4. INPUT HANDLER
    --------------------------------------------------- */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /* ---------------------------------------------------
    5. FORM SUBMIT (GCLID + BACKEND + GTM)
    --------------------------------------------------- */
    const handleSubmit = (e) => {
        e.preventDefault();

        const gclid = localStorage.getItem('gclid');

        // Push custom event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "lead_form_submitted",
            formType: "contact",
            // pagePath: window.location.pathname // GTM captures it automatically
        });

        /* ---- GOOGLE FORM SUBMISSION ---- */
        const formBody = new FormData();
        formBody.append(FIELD_NAME_ID, formData.name);
        formBody.append(FIELD_PHONE_ID, formData.phone);
        formBody.append(FIELD_CITY_ID, formData.city);
        formBody.append(FIELD_DISEASE_ID, procedure);

        if (formData.referralCode) {
            formBody.append(YOUR_REFERRAL_CODE_FIELD_ID, formData.referralCode);
        }

        if (gclid) {
            formBody.append(FIELD_GCLID_ID, gclid);
        }

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formBody,
        });

        setFormData({ name: '', phone: '', city: '', referralCode: '' });

        // Show the success popup
        setShowSuccessPopup(true);
    };

    return (
        <>
            <div className="relative w-[80vw] max-w-lg mx-auto max-h-[80vh] overflow-y-auto">

                <div className="absolute top-10 left-4 z-10 text-gray-800">
                    <p className="text-teal-700 text-lg font-semibold leading-tight">Book Free Consult</p>
                    {/* <p className="text-lg font-semibold leading-tight">Appointment</p> */}
                </div>


                {/* Doctor's image in top-right */}
                <img
                    src={LeadDr.src}
                    alt="Doctor"
                    width={110}
                    height={102}
                    className="absolute top-2 right-2 z-10"
                />
                <form onSubmit={handleSubmit} className="p-4 pt-30 bg-white shadow rounded space-y-4">

                    <input
                        name="name"
                        type="text"
                        placeholder="Patient Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />

                    <input
                        name="phone"
                        type="tel"
                        placeholder="Enter 10 Digit Mobile Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded"
                        pattern="[0-9]{10}"
                        required
                    />

                    <div className="flex items-center gap-2">
                        <input
                            name="city"
                            type="text"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                        <button
                            type="button"
                            onClick={handleGetLocation}
                            className="text-white bg-teal-600 hover:bg-teal-700 p-2 rounded"
                            title="Use my location"
                        >
                            <FaCrosshairs size={16} />
                        </button>
                    </div>

                    {isLoadingCities ? (
                        <p className="text-sm text-gray-500 mt-2">Detecting nearby cities...</p>
                    ) : (
                        nearbyCities.length > 0 && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-600">Nearby Cities:</p>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {nearbyCities.map((city, idx) => (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({ ...prev, city }))
                                            }
                                            className="px-3 py-1 text-sm bg-teal-100 text-teal-800 rounded hover:bg-teal-200"
                                        >
                                            {city}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )
                    )}

                    {/* Referral Code Toggle */}
                    <div className="text-sm text-gray-600">
                        {!hasReferral ? (
                            <button
                                type="button"
                                onClick={() => setHasReferral(true)}
                                className="text-teal-600 underline hover:text-teal-800"
                            >
                                Have a referral code?
                            </button>
                        ) : (
                            <div className="mt-2">
                                <label className="block mb-1 text-sm font-medium text-gray-700">Referral Code</label>
                                <input
                                    name="referralCode"
                                    type="text"
                                    placeholder="Enter Doctor's Referral Code"
                                    value={formData.referralCode}
                                    onChange={handleChange}
                                    className="w-full border border-gray-300 p-2 rounded"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button with Free Consultation Tag */}
                    <div className="relative w-full">
                        <div className="absolute -top-3 right-4 transform -skew-x-12 bg-green-600 text-white text-xs px-4 py-1 shadow-sm z-10">
                            <div className="transform skew-x-12">Free Consultation</div>
                        </div>

                        <button
                            type="submit"
                            className="bg-[#ff8300] text-white py-3 px-6 rounded font-semibold w-full"
                        >
                            Book Free Consult
                        </button>
                    </div>

                    {/* Call Link */}
                    <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="block text-lg text-center font-medium text-teal-600 hover:underline"
                    >
                        Call Us 📞 {PHONE_NUMBER}
                    </a>

                    <StatsBanner />
                    {status && <p className="text-sm text-teal-700">{status}</p>}
                </form>

                {/* Success modal with blurred transparent background */}
                {showSuccessPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-40">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm text-center">
                            <p className="text-xl font-semibold text-green-700 mb-4">
                                Appointment requested successfully
                            </p>
                            <p className="text-gray-700 mb-6">
                                Care Navigator from the Docsy team will reach out to you soon.
                            </p>
                            <button
                                onClick={() => {
                                    setShowSuccessPopup(false); // Close success modal
                                    onClose(); // Close parent modal
                                }}
                                className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default GoogleFormSubmit;
