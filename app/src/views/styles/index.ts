import { twMerge } from 'tailwind-merge'

export function createStylizer({ template, types }) {

    return twMerge(template(types))
}





export const headings = createStylizer({
    template: (str) => `${str} font-serif`,
    types: {
        primary: {
            
        }
    }
})