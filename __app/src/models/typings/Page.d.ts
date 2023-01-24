
export type PagesDBProps = {
    id?: string,
    version?: string | number,
    layout?: any,
    dependencies?: any,
    pages?: any
}

export interface PageLayoutProps {
    layout?: {
        header?: any;
        contactRow?: any;
        footer?: any;
        metaData?: any;
        transition?: string;
    };
}