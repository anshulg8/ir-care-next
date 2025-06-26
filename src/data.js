import { FaMale, FaFemale, FaToiletPaper, FaWalking, FaHospital, FaHeartbeat, FaCut, FaHeart, FaShieldAlt, FaTint, FaRedo, FaSmile, FaCompressArrowsAlt, FaRunning } from 'react-icons/fa';
import DrRochan from './assets/dr-rochan-copy.webp';
import DrMukul from './assets/dr-mukul-copy.webp';
import DrLenon from './assets/dr-lenon-copy.webp';
import DrKB from './assets/dr-kb.png';
import DrAshwin from './assets/dr-ashwin.jpg';
import { FaBan, FaChartLine, FaLayerGroup, FaMoneyBillWave, FaStar, FaSyringe } from 'react-icons/fa6';
import img1 from './assets/slider1.png';
import img2 from './assets/slider2.png';
import img3 from './assets/slider4.png';
import Pradeep from './assets/testimonial-pradeep.png';
import Lakhwinder from './assets/testimonial-lakhwinder.png';
import Tejal from './assets/testimonial-tejal.png';

export const usps = [
    {
        title: "Top Senior Doctors",
        description: [
            "Only Dept Heads at premium hospitals",
            "Average 22 years experience",
            "5000+ IR procedures with <1% complications",
        ],
        iconPath:
            "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z",
    },
    {
        title: "Premium Centres & Latest Tech",
        description: [
            "US-FDA & EU-approved minimally invasive techniques",
            "Strictly vetted cath lab suites with European flat-panel imaging systems",
            "Infection-controlled theatres, anaesthetist and critical care on standby",
        ],
        iconPath:
            "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
        title: "VIP Experience",
        description: [
            "24 × 7 Care Navigator on WhatsApp and phone",
            "End-to-end insurance-claim hand-holding",
            "Door-to-door pickup & drop + complimentary lounge meal & barista coffee/tea for family and patient",
        ],
        iconPath:
            "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    },
];

export const technologies = [
    {
        title: "JCI-Accredited Facilities",
        iconPath:
            "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    },
    {
        title: "Siemens/Philips Imaging",
        iconPath:
            "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    },
    {
        title: "Infection-Controlled OTs",
        iconPath:
            "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    },
    {
        title: "Verified Support Staff",
        iconPath:
            "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
];

export const cards = [
    {
        title: 'Treat Prostate, Fibroids & Pain Without Surgery',
        subtitle: "Just a 3mm pin-hole, walk home in 4 hrs",
        backgroundImage: img1,
        primaryCTA: "Book Free Consultation",
        secondaryCTA: "Read More",
    },
    {
        title: "No Cuts. No Scars. No Hospital Stay.",
        subtitle: "FDA and EU-CE Approved, <1% risk of major complications",
        backgroundImage: img2,
        primaryCTA: "Check My Eligibility",
        secondaryCTA: "Compare to Surgery",
    },
    {
        title: "Top Doctors • 5 Star Centres • VIP Experience",
        subtitle: "India’s first end-to-end IR ecosystem with 24 x 7 Care Navigators",
        backgroundImage: img3,
        primaryCTA: "Speak to a Care Navigator",
        secondaryCTA: "View Success Stories",
    },
];

export const featuredDoctors = [
    {
        id: 1,
        name: "Dr. Ashwin M Polnaya",
        designation: "Interventional Radiologist",
        image: DrAshwin,
        experience: 18,
        credentials: [
            // "Trailblazer in advanced liver cancer therapy — first radioactive IR in Karnataka.",
            "First in Dakshina Kannada to Perform Radioactive Liver Cancer Therapy",
            "Affiliated with AJ Hospital, Mangaluru",
            "Specialized in Minimally Invasive Tumor Treatments",
            "Expert in TACE & Radioembolization"
        ],
        specialty: "Advanced Liver Cancer Management",
        hospitalIcons: ["https://www.ajhospital.in/images/aj-logo.png", "https://www.fathermuller.edu.in/medical-college/img/father-muller-logo.svg"]
    },
    {
        id: 2,
        name: "Surg. Capt. Dr. Rochan Pant",
        designation: "Vascular & Neuro IR Specialist",
        image: DrRochan,
        experience: 18,
        credentials: [
            // "Decorated IR veteran with 2,000+ complex vascular interventions. Presidential awardee",
            "Vishisht Seva Medal (President of India Awardee)",
            "Ex-Director, Radiology - Reliance Foundation Hospital",
            "20+ Years Teaching at MUHS, Nasik",
            "18+ Published Research Papers"
        ],
        specialty: "Stroke Intervention, Aortic Aneurysms, Liver Cancer (TACE/RFA)",
        hospitalIcons: ["https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg", "https://www.ajhospital.in/images/aj-logo.png"]
    },
    {
        id: 3,
        name: "Dr. Mukul Mutatkar",
        designation: "Senior Interventional Radiologist",
        image: DrMukul,
        experience: 18,
        credentials: [
            // "Global imaging expert with 30 yrs of IR innovation. Built Pune’s first high-end MRI centre.",
            "Trained in MRI/CT at USA, Germany, Japan, UK",
            "Founder - OMEGA MRI & PDS CT Scan Centres (Pune)",
            "30+ Years in Advanced Imaging",
            "Specialized in Hepatobiliary Interventions"
        ],
        specialty: "Cross-Border IR Expertise with Global Techniques",
        hospitalIcons: ["https://poonahospital.org/wp-content/uploads/2022/09/logo_new.png", "https://www.ajhospital.in/images/aj-logo.png"]
    },
    {
        id: 4,
        name: "Dr. Keerthiraj B",
        designation: "Interventional Neuro Radiologist",
        image: DrKB,
        experience: 18,
        credentials: [
            // "Mangalore’s senior-most leading neuro-IR specialist. 1,500+ life-changing pin-hole procedures.",
            "First Interventional Neuroradiologist in Dakshina Kannada",
            "DM in Neuro Imaging & IR (SCTIMST, Trivandrum)",
            "Pioneer of Pinhole Access Neurovascular Treatments",
            "Expert in Stroke Management"
        ],
        specialty: "Endovascular Neurosurgeries Without Open Surgery",
        hospitalIcons: ["https://www.manipalhospitals.com/mangalore/assets/images/homepage/manipal-hospitals-mangalore.webp", "https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg"]
    },
    {
        id: 5,
        name: "Dr. Lenon D'Souza",
        designation: "Vascular Surgeon & IR Specialist",
        image: DrLenon,
        experience: 18,
        credentials: [
            // "Gold-medalist IR specialist with latest expertise across new & diverse procedure types.",
            "Gold Medalist - Rajiv Gandhi University",
            "Fellowship in Vascular IR (KEM Hospital, Mumbai)",
            "7+ Years in Complex Endovascular Procedures",
            "Ranked #1 in Radiology (RGUHS)"
        ],
        specialty: "Varicose Veins, Diabetic Foot Salvage, Uterine Fibroid Embolization",
        hospitalIcons: ["https://www.fathermuller.edu.in/medical-college/img/father-muller-logo.svg", "https://www.rfhospital.org/images/new-home-img/RF-logo-svg.svg"]
    },
];

export const howItWorks = [
    {
        title: "Free Video Consult",
        desc: "IR specialist reviews symptoms, scans & scores(IPSS / fibroid size / bleeding grade).",
        icon: "🩺",
        time: "15 min",
        color: "bg-teal-500 text-white",
    },
    {
        title: "Evidence-Based Choice",
        desc: "Specialist doctor helps compare surgery vs IR; navigator gives price, insurance check & finance options.",
        icon: "🧠",
        time: "Same day",
        color: "bg-blue-500 text-white",
    },
    {
        title: "Day-Care Procedure",
        desc: "Local anaesthesia, pin - hole access, latte in the lounge, discharge in 4 h.",
        icon: "💉",
        time: "4 h on site",
        color: "bg-purple-500 text-white",
    },
    {
        title: "Virtual Recovery",
        desc: "WhatsApp check - ins Day 1 & Day 30, diet & physio tips, 24 × 7 hotline.",
        icon: "🤝",
        time: "< 5 min",
        color: "bg-orange-500 text-white",
    },
];

export const centers = [
    {
        id: 'mumbai-c3',
        rating: 4.9,
        reviews: 77,
        city: 'Mumbai',
        area: '',
        name: 'C3 Medicare',
        address: '901, Shrikant Chambers - c, II, VN Purav Marg, next to R K Studio, Union Park, Chembur, Mumbai 400071',
        phone: '022 4897 2433',
        email: 'info@c3medicare.com',
        image: 'https://i0.wp.com/c3medicare.com/wp-content/uploads/2024/08/1.jpg',
        description: 'C3 MEDICARE is a day-care centre for oncology and interventional radiology procedures that do not require overnight admissions. Our dedicated daycare Centre allows patients quick and efficient single-point admission, treatment, and discharge and reduces the time spent in the hospital.',
        technologies: [
            {
                name: 'Siemens Artis Q.zen',
                description: 'Advanced angiography system with 3D imaging capabilities',
                image: ''
            },
            {
                name: 'Philips Azurion',
                description: 'Next-generation image-guided therapy platform',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'JCI Accredited',
            'ISO 15189:2012 Medical Laboratories'
        ],
        specialties: [
            'Vascular Interventions',
            'Oncological Interventions',
            'Neuro Interventions',
            'Urological Interventions'
        ],
        doctors: [
            {
                name: 'Dr. Surg. Capt. Rochan Pant',
                specialization: 'Interventional Radiologist',
                experience: '15+ years'
            },
            {
                name: 'Dr. Mukul Mutatkar',
                specialization: 'Interventional Radiologist',
                experience: '30+ years'
            }
        ]
    },
    {
        id: 'pune-jahangir',
        rating: 4.6,
        reviews: 10378,
        city: 'Pune',
        area: '',
        name: 'Jahangir Hospital',
        address: '32, Sasoon Rd, opposite Railway Station, Central Excise Colony, Sangamvadi, Pune, Maharashtra 411001',
        phone: '020 6681 9999',
        email: ' info@jehangirhospital.com',
        image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqwrJZ6Es7LvMppZmwd7bwjIOk0Z8tTlwtOqQQ6phCN1PksUDp6F9BXcECG9nQQATZ9qgb1hg1nRQG3fJn5ne3nfhSx-UbAvwoeoVTxIQl9fC4dOQOPXA4TYGwYzyj_3GAq3Nar=s680-w680-h510-rw',
        description: 'Jehangir Hospital is a 350-bed hospital in Pune, Maharashtra, India. Sir Cowasji Jehangir and Lady Hirabai Jehangir founded the hospital on 6 February 1946.',
        technologies: [
            {
                name: 'GE Discovery IGS 740',
                description: 'Advanced imaging system for precise interventions',
                image: ''
            },
            {
                name: 'Siemens MAGNETOM Vida',
                description: '3T MRI system for detailed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'Green OT Certification'
        ],
        specialties: [
            'Cardiac Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Pediatric Interventions'
        ],
        doctors: [
        ]
    },
    {
        id: 'pune-h',
        rating: 3.6,
        reviews: 980,
        city: 'Pune',
        area: '',
        name: 'Poona Hospital',
        address: '27, near Alka Talkies, Sadashiv Peth, Pune, Maharashtra',
        phone: '+91 97305 59600',
        email: 'phrcjr@gmail.com',
        image: 'https://poonahospital.org/wp-content/uploads/2024/01/Hosptial.jpg',
        description: 'Poona Hospital & Research Center is a healthcare provider, par excellence, fast establishing it self as a global industry model in the tertiary healthcare system of india.',
        technologies: [
            {
                name: 'Philips Ingenia Elition',
                description: '3T MRI system with AI-powered imaging',
                image: ''
            },
            {
                name: 'Siemens Artis pheno',
                description: 'Hybrid operating room system',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'Green OT Certification'
        ],
        specialties: [
            'Vascular Interventions',
            'Oncological Interventions',
            'Cardiac Interventions',
            'Pediatric Interventions'
        ],
        doctors: []
    },
    {
        id: 'mangalore-tara',
        rating: 3.7,
        reviews: 191,
        city: 'Mangalore',
        area: '',
        name: 'Tara Hospital',
        address: 'Ganapathi High School Road, Bhavathi, Near Hampankatta, Mangalore-575001, Karnataka, India.',
        phone: '+91 78296 07080',
        email: 'Office@tarahospital.co.in',
        image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        description: 'We at Tara Hospital provide the highest quality and affordable treatments to our patients. We have an unwavering commitment to medical ethics.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: ''
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'LEED Gold Certified Building'
        ],
        specialties: [
            'Neuro Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Musculoskeletal Interventions'
        ],
        doctors: []
    },
    {
        id: 'mangalore-aj',
        rating: 4.1,
        reviews: 1500,
        city: 'Mangalore',
        area: '',
        name: 'AJ Medical College',
        address: 'Kuntikana NH -66, Mangalore - 575 004.',
        phone: '+91 11 3456 7890',
        email: 'dean@ajims.edu.in',
        image: 'https://ajims.edu.in/ASPXImages/sliderfirst.jpg',
        description: 'AJIMS is aimed to provide a global perspective of medical education to achieve the national objective of “Health for All”.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: ''
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'LEED Gold Certified Building'
        ],
        specialties: [
            'Neuro Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Musculoskeletal Interventions'
        ],
        doctors: [
        ]
    },
    {
        id: 'mangalore-fm',
        city: 'Mangalore',
        rating: 4.1,
        reviews: 931,
        area: '',
        name: 'Father Muller Medical College',
        address: 'VV85+HJR, Father Muller\'s Rd, Kankanady, Mangaluru',
        phone: '+91 824 223 8000',
        email: 'drnageshkr@rediffmail.com',
        image: 'https://bookuradmission.com/college_photo/Father%20Muller%20Medical%20College_photo210528093012.jpg',
        description: 'Father Muller Medical College is a private medical school located at Kankanady in Mangaluru, Karnataka. It is a part of the Father Muller Charitable Institutions.',
        technologies: [
            {
                name: 'Canon Medical Systems Alphenix',
                description: 'Advanced angiography system with 4K imaging',
                image: ''
            },
            {
                name: 'Siemens SOMATOM Force',
                description: 'Dual-source CT scanner for high-speed imaging',
                image: ''
            }
        ],
        certifications: [
            'ISO 9001:2015 Certified',
            'NABH Accreditation',
            'ISO 15189:2012 Medical Laboratories',
            'LEED Gold Certified Building'
        ],
        specialties: [
            'Neuro Interventions',
            'Vascular Interventions',
            'Oncological Interventions',
            'Musculoskeletal Interventions'
        ],
        doctors: [
        ]
    }
];

export const landingTestimonials = [
    {
        id: 1,
        image: Pradeep,
        name: "Pradeep Dhokia, 59",
        city: "Mumbai",
        condition: "Enlarged Prostate (PAE)",
        message: "Wonderful experience, the best... and I should suggest for everyone. Thank God I found Dr Rochan Pant, I was in trouble since a year. Now it's all well, no dribbling, no emergency urine, everything is fine."
    },
    {
        id: 2,
        image: Lakhwinder,
        name: "Lukhwinder Singh, 66",
        city: "Gujarat",
        condition: "Enlarged Prostate (PAE)",
        message: "I had a prostate problem. I really liked the treatment, it was very nice...and it happens within 2 hours, without any problems...my experience was very nice, there's no better treatment anywhere else...it's so much better than surgery, the surgery process is such a headache...the best part here is there is no discomfort, the treatment happens within 2 hours, and the service here is also very good... I will recommend to my friends and others, there's no better treatment than this...it's better than surgery"
    },
    {
        id: 3,
        image: Tejal,
        name: "Tejal Mhamunkar, 47",
        city: "Thane",
        condition: "Fibroids",
        message: "I saw Dr. Pant's video online. This gave me more confidence that this would work. I was tense, but the doctors and nurses here gave me confidence and support. It is now 4 months since I took the treatment, and I have not had any problem. I am satisfied."
    },
    {
        id: 4,
        image: "",
        name: "Divya Mathur, 45",
        city: "Mumbai",
        condition: "Chronic Pain",
        message: "Overall experience was quite cool. This is not something which is commonly known and I think it was awesome."
    },
];

export const paeTestimonials = landingTestimonials;
export const uaeTestimonials = [landingTestimonials[2], landingTestimonials[0], landingTestimonials[1], landingTestimonials[3]];
export const haeTestimonials = landingTestimonials;
export const tameTestimonials = [landingTestimonials[3], landingTestimonials[0], landingTestimonials[1], landingTestimonials[2]];;


export const proceduresArray = [
    {
        id: 1,
        slug: "prostatic-artery-embolization-pae",
        markdownPath: './pae.md',
        htmlPath: 'paeBlock',
        name: "Prostatic Artery Embolization (PAE)",
        generalName: "Prostate Enlargement",
        title: "Treat Enlarged Prostate Without Surgery",
        headline: "Learn about the latest European Pinhole IR technology - now in India & UAE",
        for: "BPH (Enlarged Prostate)",
        cta: "Know More",
        description: "Prostatic Artery Embolization (PAE) uses a remote guided small wire inserted through a tiny pin-hole in your wrist - shrinking the prostate without anesthesia or surgical risk, and without even taking your pants off, getting you home in a few hours. Book your consultation now.",
        benefits: [
            "Out-patient, local anesthesia — walk in, walk out the same day",
            "Rapid symptom relief: IPSS scores plunge within weeks and continue improving for 12 months",
            "< 15 min wrist-access incision — no catheter in most cases",
            "Keeps intimacy intact: ejaculatory dysfunction ≤ 16 % vs ≈ 50 % with TURP",
            "Lower complication rate than surgery in randomised trials",
        ],
        benefitDetails: [
            {
                title: 'Walk in, walk out the same day',
                description: 'PAE takes just a few hours, allowing you to travel & get back to work the next day',
                icon: <FaHospital className="text-4xl text-teal-600" />,
            },
            {
                title: 'Virtually Painless, No Anesthesia',
                description: 'Unlike surgery, you\'re fully awake during a PAE since it\'s painless and doesn\'t involve putting a thick catheter through your penis opening.',
                icon: <FaHeartbeat className="text-4xl text-teal-600" />,
            },
            {
                title: 'No Cuts, No Scars, No Risk',
                description: 'Compared to surgery risks due to the blood loss and cuts (erection and sexual problems, loss of urinary control, urine blockage due to scarring), PAE is safer and risk-free',
                icon: <FaCut className="text-4xl text-teal-600" />,
            },
            {
                title: '>90% Technical Success Rate, Long Lasting Relief',
                description: 'As effective and durable as surgery, without the pain & complications',
                icon: <FaHeart className="text-4xl text-teal-600" />,
            },
            {
                title: 'Wide Variety of Payment Options',
                description: 'Major insurances covered, cash payment discount available.',
                icon: <FaShieldAlt className="text-4xl text-teal-600" />,
            },
        ],
        icon: <FaMale className="text-4xl text-teal-600" />,
        process: [
            "Initial consultation and imaging",
            "Local anesthesia administration",
            "Catheter insertion through a small puncture in the groin",
            "Precise delivery of embolic agents to block blood flow",
            "Post-procedure monitoring and recovery"
        ],
        recovery: "Most patients can return to normal activities within 1-2 weeks, with full recovery typically achieved within 4-6 weeks.",
        risks: [
            "Temporary urinary symptoms",
            "Mild discomfort at the puncture site",
            "Rare risk of infection",
            "Minimal risk of non-target embolization"
        ],
        faqs: [
            {
                id: 1,
                question: "Will PAE affect my sexual performance?",
                answer: "PAE has a much lower risk of retrograde ejaculation (≈ 10–16 %) compared with TURP’s \~50 %. No erectile nerves are cut."
            },
            {
                id: 2,
                question: "How long before I feel better?",
                answer: "Many patients notice stronger flow within a week; prostate shrinkage continues for 3–6 months."
            },
            {
                id: 3,
                question: "Can PAE be repeated?",
                answer: "Yes. If prostate arteries reopen years later, a touch- up embolization is simple and safe."
            },
            {
                id: 4,
                question: "Is there a risk of prostate cancer being missed?",
                answer: "We screen PSA, DRE and imaging.PAE does not preclude future biopsy if ever needed."
            },
        ],
        testimonials: paeTestimonials,
        comparison: [
            { parameter: "Anesthesia", ir: "Local", traditional: "General" },
            { parameter: "Hospital Stay", ir: "4 hours", traditional: "3-5 days" },
            { parameter: "Recovery", ir: "24-48 hours", traditional: "2-4 weeks" },
            { parameter: "Erectile Dysfunction Risk", ir: "<1%", traditional: "6-15%" },
            { parameter: "Retrograde Ejaculation", ir: "0%", traditional: "50-70%" }
        ],
        synonyms: [
            "BPH", "Enlarged prostate", "Big prostate", "Prostate swelling",
            "prostate bada", "prostate ki sujan", "prostate bada hona",
            "प्रोस्टेट बढ़ा होना", "प्रोस्टेट सूजन",
            "prostrate", "prostste", "bpn", "bphh"
        ],
        symptoms: [
            "Frequent urination", "Night-time urination", "Weak stream", "Dribbling", "Urgency",
            "baar-baar pishaab", "raat ko uthna", "dhaara dheemi", "pishaab ruk-ruk ke",
            "बार-बार पेशाब", "रात में पेशाब के लिये उठना", "धीमी धार", "पेशाब रुकना"
        ],
        conventionalTreatment: [
            "TURP", "HoLEP", "Rezum™ steam", "UroLift® clips", "Laser prostate surgery"
        ],
        irAlternative: "Prostatic Artery Embolization (PAE)"
    },
    {
        id: 2,
        slug: "uterine-fibroid-embolization-ufe",
        markdownPath: './uae.md',
        htmlPath: 'uaeBlock',
        title: 'Treat Fibroids Without Surgery',
        name: "Uterine Fibroid Embolization (UFE)",
        generalName: "Fibroids",
        for: "Symptomatic Fibroids",
        headline: "Learn about the latest European Pinhole IR technology - now in India & UAE",
        description: "Uterine Fibroid Embolization (UFE) uses a remote guided small wire inserted through a tiny pin-hole in your wrist - reducing fibroid size without anesthesia or surgical risk, and without even touching your belly, getting you home in a few hours, while retaining your ability to get pregnant. Book your consultation now.",
        cta: "Know More",
        benefits: [
            "Out-patient, local anesthesia—walk out in 6 h  ",
            "Symptom relief in 85–90% of women; bleeding drops within one cycle  ",
            "Treats every fibroid at once—even 15+ lesions or >10 cm bulk",
            "Back to work in a week, gym in two"
        ],
        benefitDetails: [
            {
                title: "Out-patient, local anesthesia",
                description: "Walk out in 6 hours",
                icon: <FaWalking className="text-4xl text-teal-600" />,
            },
            {
                title: "Symptom relief in 85–90% of women",
                description: "Bleeding drops within one cycle",
                icon: <FaTint className="text-4xl text-teal-600" />, // water drop for bleeding
            },
            {
                title: "Treats every fibroid at once",
                description: "Even 15+ lesions or >10 cm bulk",
                icon: <FaLayerGroup className="text-4xl text-teal-600" />, // multiple layers = multiple fibroids
            },
            {
                title: "Uterus & hormones stay intact",
                description: "No hysterectomy trauma",
                icon: <FaFemale className="text-4xl text-teal-600" />, // female symbol
            },
            {
                title: "Back to work in a week",
                description: "Gym in two",
                icon: <FaRedo className="text-4xl text-teal-600" />, // recovery / refresh
            },
        ],
        icon: <FaFemale className="text-4xl text-teal-600" />,
        process: [
            "Pre-procedure imaging and consultation",
            "Local anesthesia administration",
            "Catheter insertion through a small puncture in the groin",
            "Precise delivery of embolic agents to block blood flow",
            "Post-procedure monitoring and pain management"
        ],
        recovery: "Most patients can return to normal activities within 1-2 weeks, with full recovery typically achieved within 4-6 weeks.",
        risks: [
            "Temporary cramping and pain",
            "Vaginal discharge",
            "Rare risk of infection",
            "Minimal risk of non-target embolization"
        ],
        testimonials: uaeTestimonials,
        faqs: [
            {
                id: 2,
                question: "How soon do symptoms improve?",
                answer: "Bleeding often lightens next period; pressure and bloating improve steadily as fibroids shrink over 3–6 months."
            },
            {
                id: 3,
                question: "Is it painful?",
                answer: "Expect mild cramping the first night; > 90 % of patients need only oral painkillers for < 48 h. No stitches, no catheter."
            },
            {
                id: 4,
                question: "What if fibroids regrow?",
                answer: "About 1 in 5 women may need a touch-up or alternate therapy within 5 years—still far fewer interventions than lifetime medication or repeated surgeries."
            },
            {
                id: 5,
                question: "Does UAE affect menopause timing?",
                answer: "In women > 45 yrs there’s a small risk of earlier menopause (< 5 %); infrequent in younger women."
            },
        ],
        comparison: [
            { parameter: "Invasiveness", ir: "2mm incision", traditional: "Abdominal cut" },
            { parameter: "Fertility", ir: "Preserved", traditional: "Lost permanently" },
            { parameter: "Recovery", ir: "3-5 days", traditional: "6-8 weeks" },
            { parameter: "Blood Loss", ir: "10ml", traditional: "300-500ml" },
            { parameter: "Hormonal Impact", ir: "None", traditional: "Surgical menopause" }
        ],
        synonyms: [
            "Fibroid uterus", "Uterine myoma", "Womb tumour", "Adenomyosis",
            "fibroid ki rasoli", "bacha-dani ki ganth",
            "बच्चेदानी की रसौली", "गर्भाशय में गाँठ",
            "fibriod", "fibrid", "fybroid"
        ],
        symptoms: [
            "Heavy periods", "Clots", "Pelvic pressure", "Infertility", "Bulky uterus",
            "zyaada bleeding", "pet me bhaari-pan", "garbh nahi tikna",
            "अत्यधिक मासिक रक्तस्राव", "पेट में भारीपन", "बाँझपन"
        ],
        conventionalTreatment: [
            "Open Myomectomy", "Lap Myomectomy", "Hysterectomy", "Hysteroscopic resection", "Laser fibroid removal"
        ],
        irAlternative: "Uterine Artery Embolization (UAE)"
    },
    {
        id: 3,
        slug: "hemorrhoidal-artery-embolization-hae",
        markdownPath: './hae.md',
        htmlPath: 'haeBlock',
        title: 'Treat Piles Bleeding Without Surgery',
        name: "Hemorrhoidal Artery Embolization (HAE)",
        generalName: "Piles (Hemorrhoids)",
        headline: "Learn about the latest European Pinhole IR technology - now in India & UAE",
        for: "Chronic Rectal Bleeding",
        cta: "Know More",
        description: "Hemorrhoidal Artery Embolization (HAE) uses a remote guided small wire inserted through a tiny pin-hole in your wrist to cut off blood to your anal vessels - stopping the bleeding without anesthesia or surgical risk, and without even taking your pants off, getting you home in a few hours. Book your consultation now.",
        benefits: [
            "Walk in, walk out the same day",
            "Virtually Painless",
            "No Cuts, No Scars, No Risk",
            "93-100% Technical Success Rate, Long Lasting Relief",
            "Wide Variety of Payment Options",
        ],
        benefitDetails: [
            {
                title: "Walk in, walk out the same day",
                description: "HAE takes just a few hours, allowing you to travel & get back to work the next day",
                icon: <FaWalking className="text-4xl text-teal-600" />,
            },
            {
                title: "Virtually Painless",
                description: "Average pain score after procedure is 0/10 (vs 6/10 after piles surgery)",
                icon: <FaSmile className="text-4xl text-teal-600" />, // smile = comfort/painless
            },
            {
                title: "No Cuts, No Scars, No Risk",
                description: "Compared to surgery risks (loss of stool control, bleeding post surgery, anal scarring causing blockage and more), HAE reports zero major complications to date.",
                icon: <FaBan className="text-4xl text-teal-600" />, // ban = no cuts/scars/risks
            },
            {
                title: "93-100% Technical Success Rate, Long Lasting Relief",
                description: "As effective and durable as most solutions, without the pain & complications",
                icon: <FaChartLine className="text-4xl text-teal-600" />, // success/performance
            },
            {
                title: "Wide Variety of Payment Options",
                description: "Major insurances covered, cash payment discount available.",
                icon: <FaMoneyBillWave className="text-4xl text-teal-600" />, // finance-related
            },
        ],
        icon: <FaToiletPaper className="text-4xl text-teal-600" />,
        process: [
            "Pre-procedure imaging and consultation",
            "Local anesthesia administration",
            "Catheter insertion through the femoral artery",
            "Targeted embolization of hemorrhoidal arteries",
            "Post-procedure observation and discharge"
        ],
        recovery: "Most patients recover within 2-3 days and return to work the next day.",
        risks: [
            "Mild discomfort",
            "Temporary urgency",
            "Rare bleeding",
            "Minimal infection risk"
        ],
        faqs: [
            {
                id: 1,
                question: "Will the coils set off airport scanners?",
                answer: "No. They’re micro-sized platinum; MRI-safe and undetectable at security."
            },
            {
                id: 2,
                question: "Can hemorrhoids come back?",
                answer: "Most patients stay symptom-free for years. If minor bleeding re-appears, a quick touch-up embolization fixes it."
            },
            {
                id: 3,
                question: "Is HAE safe if I’m on blood thinners?",
                answer: "Yes—unlike surgery, we don’t cut tissue. Many patients on anticoagulants choose HAE precisely for this reason."
            },
            {
                id: 4,
                question: "What about external piles?",
                answer: "External skin tags may persist but often shrink as internal blood flow drops. If cosmetically bothersome, they can be removed later under local anaesthesia."
            },
            {
                id: 5,
                question: "Is radiation a concern?",
                answer: "Dose is comparable to a pelvic CT and well within safety norms; our suite uses real-time dose monitoring."
            },
        ],
        testimonials: haeTestimonials,
        comparison: [
            { parameter: "Pain Level", ir: "Minimal", traditional: "Moderate to Severe" },
            { parameter: "Anesthesia", ir: "Local", traditional: "General or spinal" },
            { parameter: "Recovery", ir: "2-3 days", traditional: "1-2 weeks" },
            { parameter: "Procedure Time", ir: "30 mins", traditional: "60+ mins" },
            { parameter: "Recurrence", ir: "Low", traditional: "Moderate" }
        ],
        synonyms: [
            "Piles", "Haemorrhoids", "Anal piles",
            "bawasir", "gudde ki sujan", "arsha",
            "बवासीर", "गुड्डे में सूजन",
            "hemorroids", "hemmoroids", "pilese"
        ],
        symptoms: [
            "Bleeding while passing stool", "Pain", "Itching", "Lump sticking out",
            "toilet ke baad khoon", "gudde me dard", "khujli", "mansa bahar aana",
            "पाखाने के बाद खून", "दर्द", "खुजली", "मांस बाहर आना"
        ],
        conventionalTreatment: [
            "Conventional hemorrhoidectomy", "Stapled PPH", "Rubber-band ligation", "Laser piles surgery"
        ],
        irAlternative: "Hemorrhoidal Artery Embolization (HAE)"
    },
    {
        id: 4,
        slug: "okuno-procedure-tam",
        markdownPath: './tam.md',
        htmlPath: 'tameBlock',
        title: '',
        name: "OKUNO Procedure (TAME)",
        generalName: "Severe Pain",
        headline: "End Chronic Joint & Tendon Pain — Without Surgery or Long Downtime",
        for: "Chronic Pain (Knee/Shoulder/Back)",
        cta: "Know More",
        description: "The Okuno Procedure (Trans-Arterial Micro-Embolization, *TAME*) shuts down the rogue blood vessels that keep pain alive in knees, shoulders, elbows and spine. One tiny wrist puncture, home in hours.",
        benefits: [
            "Out-patient, local anaesthesia — tiny 0.6 mm catheter; no stitches",
            "50 – 80 % pain reduction that lasts 1–2 years or longer",
            "All-star indications: Knee arthritis, frozen shoulder, tennis elbow, facet-back pain, plantar fasciitis",
            "Fast return to life: Most patients back to desk work next day, sports in 7-14 days",
            "Zero joint damage: Preserves cartilage, tendons, nerves; repeatable if ever needed",
        ],
        benefitDetails: [
            {
                title: "Out-patient, local anaesthesia",
                description: "Tiny 0.6 mm catheter; no stitches",
                icon: <FaSyringe className="text-4xl text-teal-600" />, // syringe for procedure-related
            },
            {
                title: "50 – 80 % pain reduction",
                description: "That lasts 1–2 years or longer",
                icon: <FaCompressArrowsAlt className="text-4xl text-teal-600" />, // symbol for reduction
            },
            {
                title: "All-star indications",
                description: "Knee arthritis, frozen shoulder, tennis elbow, facet-back pain, plantar fasciitis",
                icon: <FaStar className="text-4xl text-teal-600" />, // star = standout features
            },
            {
                title: "Fast return to life",
                description: "Most patients back to desk work next day, sports in 7-14 days",
                icon: <FaRunning className="text-4xl text-teal-600" />, // running = quick recovery
            },
            {
                title: "Zero joint damage",
                description: "Preserves cartilage, tendons, nerves; repeatable if ever needed",
                icon: <FaShieldAlt className="text-4xl text-teal-600" />, // shield = protection
            },
        ],
        icon: <FaWalking className="text-4xl text-teal-600" />,
        process: [
            "Consultation with pain/intervention expert",
            "MRI or diagnostic scan",
            "Embolization of tiny inflammatory vessels",
            "Outpatient discharge same day",
            "Rehab & physical therapy guidance"
        ],
        recovery: "Return to normal activity in 1-2 days, with pain relief typically starting within 2 weeks.",
        risks: [
            "Transient swelling",
            "Minor bruising",
            "Allergic reaction (rare)",
            "Non-target embolization (very rare)"
        ],
        faqs: [
            {
                id: 1,
                question: "How soon will I feel better?",
                answer: "Most notice a 30–50 % pain drop within 2 weeks; full benefit builds over 1–3 months as inflamed tissue regresses."
            },
            {
                id: 2,
                question: "Does it harm cartilage or nerves?",
                answer: "No. Imaging at 2 years shows preserved cartilage and no nerve injury. The particles lodge only in abnormal vessels."
            },
            {
                id: 3,
                question: "Can TAME be repeated?",
                answer: "Yes. If pain creeps back years later, a repeat embolization is straightforward and safe."
            },
            {
                id: 4,
                question: "What if I still need surgery later?",
                answer: "TAME doesn’t “burn bridges.” You can have arthroscopy or replacement later if ever required—often years down the line."
            },
        ],
        testimonials: tameTestimonials,
        comparison: [
            { parameter: "Invasiveness", ir: "Minimal", traditional: "Arthroscopy or surgery" },
            { parameter: "Pain Relief", ir: "2 weeks", traditional: "2-3 months" },
            { parameter: "Implants", ir: "None", traditional: "Possible" },
            { parameter: "Return to Work", ir: "Next day", traditional: "1-3 weeks" },
            { parameter: "Scarring", ir: "None", traditional: "Visible" }
        ],
        synonyms: [
            "Frozen shoulder", "Knee osteoarthritis", "Shoulder impingement", "Chronic back pain",
            "kandha jamna", "gutna ghisna", "kamar dard",
            "कंधे में जकड़न", "गुटने घिसना", "कमर दर्द",
            "knee pian", "frzn sholder", "bak pain"
        ],
        symptoms: [
            "Constant shoulder pain", "Stiffness", "Knee pain walking", "Low-back ache",
            "kandhe me dard", "haath nahi uthta", "gutne me jalan", "kamar toot rahi",
            "कंधे में दर्द", "हाथ नहीं उठता", "गुटने में जलन", "कमर टूट रही है"
        ],
        conventionalTreatment: [
            "Arthroscopic capsule release", "Total / Partial Knee Replacement",
            "Shoulder replacement", "Spine fusion", "Laminectomy"
        ],
        irAlternative: "Trans-Arterial Micro-Embolization (TAME)"
    }
];

// Create a map for fast access by slug
export const proceduresMap = proceduresArray.reduce((map, p) => {
    map[p.slug] = p;
    return map;
}, {});

export const generalFaqs = [
    {
        id: 1,
        question: "What exactly is Interventional Radiology?",
        answer:
            "It’s an image-guided minimally invasive treatment done through a 2 mm pin-hole in the wrist or leg, accessing any part of the body via our blood vessel system. No large cuts, stitches or scarring; no general anaesthesia, home the same day.",
    },
    {
        id: 2,
        question: "Is the radiation dangerous?",
        answer:
            "A typical IR case gives about the same dose as one abdominal CT scan, well below levels linked to measurable cancer risk. Lead shields protect the rest of your body.",
    },
    {
        id: 3,
        question: "How safe are these procedures overall?",
        answer:
            "Across >5,000 cases by our senior IR doctors, the major-complication rate is <1%. Global studies report similar numbers.",
    },
    {
        id: 4,
        question: "I’m over 75 / have diabetes or heart stents—can I still have IR?",
        answer:
            "Yes. Because we use only local anaesthesia and light sedation, high-risk patients usually qualify. We’ll coordinate with your cardiologist or endocrinologist first.",
    },
    {
        id: 5,
        question: "Will IR affect fertility or sexual function?",
        answer:
            "PAE: Preserves erections and ejaculation (0% retrograde vs ≤65% after TURP).\nUAE: Many women conceive after the procedure; large series show healthy pregnancies post-UAE.",
    },
    {
        id: 6,
        question: "What if IR doesn’t work—can I still have surgery later?",
        answer:
            "Absolutely. IR is “add-on,” not burn-the-bridge. You can still choose TURP, myomectomy, hemorrhoidectomy, or knee replacement later if needed.",
    },
    {
        id: 7,
        question: "Will it hurt?",
        answer:
            "You’ll feel a quick numbing injection; most patients rate pain 1–2 / 10 and walk within an hour.",
    },
    {
        id: 8,
        question: "How many visits if I’m travelling from another city?",
        answer:
            "Only two: a virtual pre-op consult, then a 4-hour day-care visit. Fly home the next morning. We arrange hotel, car and paperwork.",
    },
    {
        id: 9,
        question: "How soon can I drive, work or fly?",
        answer:
            "Drive next day, desk work 24–48 h, fly 48 h, gym one week.",
    },
    {
        id: 10,
        question: "What tests or prep do I need?",
        answer:
            "Basic blood work and a 6-hour fast. If you take blood thinners, we’ll liaise with your cardiologist for a safe pause.",
    },
    {
        id: 11,
        question: "How long do the results last?",
        answer:
            "PAE: 85–93% symptom relief at 12 m with durable benefit >5 y.\nUAE: 90–95% bleeding relief; fibroid shrinkage 30–60%.\nHAE: 90–93% bleeding control in Grade II–III hemorrhoids.\nTAME/GAE: 71% pain drop, 87% QoL boost at 1 y; delays knee replacement.\nRepeat IR is possible if symptoms return.",
    },
    {
        id: 12,
        question: "What does it cost and will insurance pay?",
        answer:
            "Packages ₹ 1.8 – 2.75 L all-inclusive. Most private insurers cover when medical need is shown; our Care Navigator files cashless claims. No-interest EMIs from ₹ 5,999 / month.",
    },
    {
        id: 13,
        question: "Can I get a free second opinion?",
        answer:
            "Yes—upload your scans, and a senior IR sends a written IR-vs-surgery report within 24 h.",
    },
    {
        id: 14,
        question: "How do I confirm if I’m a candidate?",
        answer:
            "Click 'Book Free IR Consult' below or WhatsApp us your latest report. A senior doctor replies in ≤30 min.",
    },
];

export const docsyJourneySteps = [
    {
        title: "1 - First Appointment",
        desc: "Our doctors will take a detailed history, examine you at length, and ask you to get some blood and stool tests, and some imaging scans done.",
        time: "30 mins",
        icon: "🩺",
        color: "bg-teal-500",
    },
    {
        title: "2 - Care Navigation",
        desc: "Based on your disease stage and treatment preferences, we'll help you choose the best possible solution for your case – even if we don't offer it ourselves, we'll guide you to the right people who we're confident will do a good job.",
        time: "1 day post results",
        icon: "🧭",
        color: "bg-yellow-500",
    },
    {
        title: "3 - Pre-Procedure & Insurance",
        desc: "To save time, we send you out for pre-procedure tests and scans while in parallel, we start your insurance claim processing (including pre-authorisation and approvals).",
        time: "1–2 days post date locking",
        icon: "📝",
        color: "bg-blue-500",
    },
    {
        title: "4 - Procedure Day",
        desc: "Doorstep cab pickup to our center, procedure in 2–4 hours while your family/caregivers have a complimentary meal and wait, same day discharge and then doorstep drop post procedure.",
        time: "2–4 hours",
        icon: "🏥",
        color: "bg-purple-500",
    },
    {
        title: "5 - Post Procedure Follow-up",
        desc: "Doctors check-ins on: *Day 0*, Day 1, *Day 3*, Day 7, Day 14 and *Day 30*, *Month 3* and *Month 6*. \n *Note:* Highlighted days with Bold are Detailed Follow Ups, rest are Regular Status Check-In",
        time: "Ongoing",
        icon: "📅",
        color: "bg-green-500",
    },
];

export const ourAllProcedures = [
    {
        "Category": "Vascular (Arteries & Veins)",
        "Typical Problems": [
            "Peripheral Artery Disease (leg pain, non-healing ulcers)",
            "Deep-Vein Thrombosis / Pulmonary Embolism",
            "Varicose Veins & Venous Ulcers",
            "Dialysis AV Fistula blockages",
            "Aortic / Peripheral Aneurysms"
        ],
        "Key IR Solutions": [
            "Angioplasty & Stenting",
            "Atherectomy",
            "Endovenous Ablation",
            "Thrombolysis / Thrombectomy",
            "IVC Filter work",
            "EVAR / TEVAR / Fenestrated & Chimney grafts"
        ]
    },
    {
        "Category": "Oncology / Tumour Care",
        "Typical Problems": [
            "Liver, Kidney, Lung, Bone, Spine tumours",
            "Metastatic pain or bleeding",
            "Pre-op devascularisation"
        ],
        "Key IR Solutions": [
            "TACE / DEB-TACE",
            "TARE",
            "Cryo / Radio- / Microwave Ablation",
            "Tumour Embolisation"
        ]
    },
    {
        "Category": "Women's Health",
        "Typical Problems": [
            "Uterine Fibroids / Adenomyosis",
            "Pelvic Congestion Syndrome",
            "Postpartum Haemorrhage",
            "Placenta Accreta"
        ],
        "Key IR Solutions": [
            "Uterine Artery Embolisation (UAE)",
            "Ovarian / Internal Iliac Embolisation",
            "Balloon Occlusion"
        ]
    },
    {
        "Category": "Men's Health",
        "Typical Problems": [
            "Benign Prostatic Hyperplasia (BPH)",
            "Varicocoele"
        ],
        "Key IR Solutions": [
            "Prostatic Artery Embolisation (PAE)",
            "Gonadal Vein Embolisation"
        ]
    },
    {
        "Category": "Pain, Spine & Joints",
        "Typical Problems": [
            "Compression Fractures",
            "Chronic Back / Shoulder / Knee Pain",
            "Facet / SI Joint pain"
        ],
        "Key IR Solutions": [
            "Vertebro- / Kyphoplasty",
            "TAME (Okuno)",
            "Nerve / Facet / Epidural Blocks"
        ]
    },
    {
        "Category": "Gastro-Hepato-Biliary & GI",
        "Typical Problems": [
            "Upper / Lower GI Haemorrhage",
            "Biliary Strictures & Stones",
            "Portal & Hepatic Vein Bleeds",
            "Portal Hypertension / Varices"
        ],
        "Key IR Solutions": [
            "Glue / Coil Embolisation",
            "PTBD & Biliary Stents",
            "TIPS / DIPS",
            "Recanalisation"
        ]
    },
    {
        "Category": "Renal & Urologic",
        "Typical Problems": [
            "Obstructed Kidney / Ureter",
            "Renal Tumours / Angiomyolipoma"
        ],
        "Key IR Solutions": [
            "Nephrostomy - Antegrade Stenting",
            "Tumour Ablation",
            "Embolisation"
        ]
    },
    {
        "Category": "Thoracic & Pulmonary",
        "Typical Problems": [
            "Massive Haemoptysis",
            "Chylothorax",
            "Tracheo-Bronchial / Central Airway Narrowing"
        ],
        "Key IR Solutions": [
            "Bronchial Artery Embolisation",
            "Duct Embolisation",
            "Stents"
        ]
    },
    {
        "Category": "Neuro & Head / Neck",
        "Typical Problems": [
            "Stroke (acute large-vessel occlusion)",
            "Brain / Spinal AVMs & Aneurysms",
            "Severe Face Pain"
        ],
        "Key IR Solutions": [
            "Mechanical Thrombectomy",
            "AVM / Aneurysm Embolisation",
            "Trigeminal & Sympathetic Blocks"
        ]
    },
    {
        "Category": "Biopsy, Drainage & Access",
        "Typical Problems": [
            "Undiagnosed lesions (solid organ / bone / soft tissue)",
            "Abscesses & Complex Cysts",
            "Long-term IV Access"
        ],
        "Key IR Solutions": [
            "Image-guided Biopsy",
            "Perc Drainage",
            "PICC / Port / HD Catheter placement"
        ]
    },
    {
        "Category": "Paediatric & Rare",
        "Typical Problems": [
            "Vascular Malformations (VM / LM)",
            "Foetal or Neonatal Interventions"
        ],
        "Key IR Solutions": [
            "Sclerotherapy",
            "Umbilical Vein Access",
            "Foetal Shunt / Nephrostomy"
        ]
    }
]
