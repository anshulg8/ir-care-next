// src/utils/string.js

/**
 * Converts a kebab-case or dash-separated string into title case.
 * Example: 'urinary-tract-infection' -> 'Urinary Tract Infection'
 */
export function titleCase(str) {
    if (!str) return '';
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
