// lib/ctaActions.js
import { WHATSAPP_LINK } from '@/constants';

export function handleCTA(action, router) {
    switch (action) {
        case 'whatsapp':
            window.open(`${WHATSAPP_LINK}`, '_blank');
            break;

        case 'upload':
            // trigger upload modal
            break;

        case 'book':
            router.push('/book-consult');
            break;

        default:
            console.warn('Unknown CTA action:', action);
    }
}
