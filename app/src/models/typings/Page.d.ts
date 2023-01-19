import type { NextPage } from 'next'


export interface IPage extends NextPage {
    pageData?: any

}

export type PagesDBProps = {
    id?: string,
    version?: string | number,
    layout?: any,
    dependencies?: any,
    pages?: any
}