// src/data/specialties/contentMap.js
import dynamic from 'next/dynamic';

export const contentMap = {
    urology: {
        procedures: {
            pae: dynamic(() => import('./urology/procedures/pae')),
            // other procedures
        },
        conditions: {
            bph: dynamic(() => import('./urology/conditions/bph')),
            // other conditions
        },
        symptoms: {
            'frequent-urination': dynamic(() =>
                import('./urology/symptoms/frequentUrination')
            ),
            // other symptoms
        },
    },
    // other specialties
};
