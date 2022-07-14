import React from 'react'

export function IconosFB({ Social, Color }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-${Social}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={Color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
        </svg>

    );
}

export function IconoInst({ Social, Color }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-${Social}`} width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke={Color} fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
        </svg>
    );
}

export function IconosLink({ Social, Color }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-brand-${Social}`} width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke={Color} fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="11" x2="8" y2="16" />
            <line x1="8" y1="8" x2="8" y2="8.01" />
            <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
    );
}


