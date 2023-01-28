import { twMerge } from 'tailwind-merge'

export function headings({ type, sx }) {
    const _template = (overrides) => twMerge(`${overrides} font-serif size-7xl`)

    const types = {
        primary: _template(sx),
        secondary: _template(sx),
        tertiary: _template(sx)
    }

    return types[type] ?? null
}


export function containers({ type, sx }) {
    const _template = (overrides) => twMerge(`${overrides} font-serif size-7xl`)

    const types = {
        primary: _template(sx),
        secondary: _template(sx),
        tertiary: _template(sx)
    }

    return types[type] ?? null
}


export function globals({ type, sx }) {
    const _template = (overrides) => twMerge(`${overrides} font-serif size-7xl`)

    const types = {
        primary: _template(sx),
        secondary: _template(sx),
        tertiary: _template(sx)
    }

    return types[type] ?? null
}




const heroTitleSx = headings({ type: 'primary', sx: "uppercase" })