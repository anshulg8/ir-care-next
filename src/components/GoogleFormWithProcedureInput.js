import React, { useEffect, useState } from 'react';
import { FaCrosshairs } from 'react-icons/fa6';
import axios from 'axios';
import {
    FIELD_CITY_ID,
    FIELD_DISEASE_ID,
    FIELD_NAME_ID,
    FIELD_PHONE_ID,
    GOOGLE_FORM_ACTION_URL,
    PHONE_NUMBER,
    YOUR_REFERRAL_CODE_FIELD_ID,
} from '../constants';
// import { proceduresArray } from '../data';
import StatsBanner from './StatsBanner';
import LeadDr from '../assets/leadform-doc.png';

// const procedures = proceduresArray.map(proc => proc.generalName);
const procedures = ["Lumbar radiculopathy (“sciatica”)", "cervical radiculopathy", "chronic low-back pain", "facet-joint arthritis", "sacro-iliac (SIJ) dysfunction", "vertebral compression fracture (osteoporotic / metastatic)", "spinal metastasis pain", "complex regional pain syndrome (CRPS)", "sympathetically-maintained pain", "osteoporosis spine pain", "degenerative disc disease", "herniated disc", "hip/knee/shoulder osteoarthritis", "End-stage renal disease (ESRD)", "chronic kidney disease (CKD) stage 5", "failing AV fistula", "thrombosed AV graft", "central-venous stenosis or occlusion", "superior vena cava (SVC) syndrome", "catheter-dependent haemodialysis", "IVC filter retrieval", "dialysis catheter infection", "hemodialysis access dysfunction", "Symptomatic uterine fibroids (leiomyoma)", "adenomyosis", "post-partum haemorrhage (PPH)", "placenta accreta / increta / percreta", "pelvic congestion syndrome", "ovarian-vein reflux", "varicocele", "male infertility due to varicocele", "benign prostatic hyperplasia (BPH)", "enlarged prostate", "post-partum uterine bleeding", "Hepatocellular carcinoma (HCC)", "cholangiocarcinoma (unresectable)", "neuro-endocrine liver metastases", "colorectal liver metastasis", "renal cell carcinoma mets", "lung oligometastasis", "bone metastasis (osteolytic)", "osteoid osteoma", "primary renal tumour <4 cm", "small peripheral lung tumour", "soft-tissue sarcoma mets", "juv. nasopharyngeal angiofibroma (pre-op)", "meningioma devascularisation", "portal-vein embolisation for FLR hypertrophy", "Obstructive jaundice", "malignant biliary stricture (pancreatic / hilar)", "benign post-transplant biliary stricture", "primary sclerosing cholangitis stricture", "cholangitis", "hydatid liver cyst", "symptomatic simple hepatic cyst", "liver abscess", "hydronephrosis secondary to ureteric obstruction (malignant / benign)", "pyonephrosis", "peritoneal dialysis catheter malfunction", "Unruptured / ruptured intracranial aneurysm", "brain AVM", "dural AV fistula", "spinal AVM", "acute ischemic stroke (large-vessel occlusion)", "MCA thrombosis", "basilar artery thrombosis", "intracranial atherosclerotic disease", "carotid artery stenosis", "vertebral artery stenosis", "carotid-cavernous fistula", "Abdominal aortic aneurysm (AAA)", "thoracic aortic aneurysm (TAA)", "type-B aortic dissection", "penetrating aortic ulcer", "post-EVAR/TEVAR endoleak (type II/III)", "critical limb ischaemia", "superficial femoral artery (SFA) occlusion", "iliac artery occlusive disease", "popliteal artery stenosis", "diabetic foot with PAD", "subclavian steal syndrome", "mesenteric ischaemia (SMA stenosis)", "Oesophageal / gastric variceal bleeding", "refractory ascites", "hepatic encephalopathy (portal-hypertension related)", "Budd–Chiari syndrome", "portal-vein thrombosis", "portal cavernoma", "massive / sub-massive pulmonary embolism", "right-heart-strain PE", "thoracic-duct leak (chylothorax)", "chylous ascites", "lymphatic malformation", "central lymphatic flow disorder"]

const GoogleFormWithProcedureInput = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: '',
        procedure: '',
        referralCode: '',
    });

    const [status, setStatus] = useState('');
    const [hasReferral, setHasReferral] = useState(false);
    const [filtered, setFiltered] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [nearbyCities, setNearbyCities] = useState([]);
    const [isLoadingCities, setIsLoadingCities] = useState(false);

    // Fetch nearby cities using IP + Overpass API
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

    // Get city from browser GPS
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
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === 'procedure') {
            const matches = procedures.filter((proc) =>
                proc.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(matches);
            setShowDropdown(true);
        }
    };

    const handleSelectProcedure = (value) => {
        setFormData((prev) => ({ ...prev, procedure: value }));
        setShowDropdown(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Push custom event to dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "lead_form_submitted",
            formType: "contact",
            pagePath: window.location.pathname
        });

        const formBody = new FormData();
        formBody.append(FIELD_NAME_ID, formData.name);
        formBody.append(FIELD_PHONE_ID, formData.phone);
        formBody.append(FIELD_CITY_ID, formData.city);
        formBody.append(FIELD_DISEASE_ID, formData.procedure);

        if (formData.referralCode) {
            formBody.append(YOUR_REFERRAL_CODE_FIELD_ID, formData.referralCode);
        }

        fetch(GOOGLE_FORM_ACTION_URL, {
            method: 'POST',
            mode: 'no-cors',
            body: formBody,
        })
            .then(() => {
                setStatus('Appointment request submitted!')
                setFormData({ name: '', phone: '', city: '', referralCode: '', procedure: '' });
            })
            .catch(() => setStatus('Submission failed. Try again.'));
    };

    return (
        <>
            <div className="relative max-w-md mx-auto">
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
                    className="absolute top-2 right-4 z-10"
                />

                <form
                    onSubmit={handleSubmit}
                    className="p-4 pt-30 bg-white shadow rounded space-y-4"
                >
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


                    {/* Nearby Cities */}
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

                    {/* Procedure Auto-Complete */}
                    <div className="relative">
                        <input
                            name="procedure"
                            type="text"
                            placeholder="Select Disease"
                            value={formData.procedure}
                            onChange={handleChange}
                            onFocus={() => setShowDropdown(true)}
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                        {showDropdown && filtered.length > 0 && (
                            <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded shadow max-h-48 overflow-y-auto">
                                {filtered.map((option, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleSelectProcedure(option)}
                                        className="px-4 py-2 hover:bg-teal-50 cursor-pointer text-sm"
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

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

                    {/* Submit Button + Banner */}
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
            </div>
        </>
    );
};

export default GoogleFormWithProcedureInput;
