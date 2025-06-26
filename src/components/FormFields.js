// FormFields.jsx
import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';
import { FaCrosshairs } from 'react-icons/fa6';
import {
    FIELD_CITY_ID,
    FIELD_DISEASE_ID,
    FIELD_NAME_ID,
    FIELD_PHONE_ID,
    GOOGLE_FORM_ACTION_URL,
    YOUR_REFERRAL_CODE_FIELD_ID,
} from '../constants';
import LeadDr from '../assets/leadform-doc.png';

const FormFields = forwardRef(({ procedure = 'General Consultation', onSuccess }, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        referralCode: '',
    });
    const [hasReferral, setHasReferral] = useState(false);
    const [status, setStatus] = useState('');
    const [nearbyCities, setNearbyCities] = useState([]);
    const [isLoadingCities, setIsLoadingCities] = useState(false);

    // 🎯 Expose reset method
    useImperativeHandle(ref, () => ({
        resetForm: () => {
            setFormData({ name: '', phone: '', city: '', referralCode: '' });
            setHasReferral(false);
            setStatus('');
        },
    }));

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formBody = new FormData();
        formBody.append(FIELD_NAME_ID, formData.name);
        formBody.append(FIELD_PHONE_ID, formData.phone);
        formBody.append(FIELD_CITY_ID, formData.city);
        formBody.append(FIELD_DISEASE_ID, procedure);

        if (formData.referralCode) {
            formBody.append(YOUR_REFERRAL_CODE_FIELD_ID, formData.referralCode);
        }

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formBody,
        })
            .then(() => {
                setStatus('Appointment request submitted!');
                onSuccess?.();
            })
            .catch(() => setStatus('Submission failed. Try again.'));
    };

    return (
        <>

            <div className="relative max-w-md mx-auto">
                <img
                    src={LeadDr}
                    alt="Doctor"
                    width={110}
                    height={102}
                    className="absolute top-0 right-4 z-10"
                />

                {/* Doctor's image in top-right */}
                <form onSubmit={handleSubmit} className="p-4 bg-white rounded space-y-4 shadow">
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

                    <button
                        type="submit"
                        className="bg-[#ff8300] text-white py-3 px-6 rounded font-semibold w-full"
                    >
                        Book Free Appointment
                    </button>

                    {status && <p className="text-sm text-teal-700 mt-2">{status}</p>}
                </form>

            </div>
        </>
    );
});

export default FormFields;
