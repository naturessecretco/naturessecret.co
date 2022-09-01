import { NextPage } from "next";

export interface IPage extends NextPage {
    pageData: {
        metaData: object
    }
    
}