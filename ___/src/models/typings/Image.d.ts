export type ImageProps = { 
    url?: string,
    height?: string,
    width?: string,
    className?: string,
    alt?: string,
    
} & React.HTMLAttributes<HTMLImageElement> 