import NotionService from "@services/notion";
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

import Database from "tiny-json-db";


const productFile = new Database("products")


(async () => {  
    await productFile.setItem("products", await NotionService.loadCentralDogma())
})()

export type DatabaseProps = {
    id?: string,
    version?: number | string,
    store?: string,
    data?: any,
    init?: Function
    methods?: any
}

const productsDB: DatabaseProps = {
    id: 'productsDB',
    version: Date.now(),
    init: async () => {

    },

    methods: {
        private: {
            fetchProducts: async () => {
                const { notion } = NotionService.interface

                const fetcher = async () => fetch(notion, {
                    method: 'GET',
                })

                const productsFetch = (async () => await fetcher()
                    .then(res => res.json())
                    .then(data => data.map(data => data.properties))
                    .then(data => data.filter((data) => data.Type.select.name === '🛍️Product'))
                    .then(data => Array.from(data.map(data => ({
                        advertismsent: data.Advertisements?.files[0].file.url || null,
                        price: data.Price.number || '',
                        covers: data.Covers.files.map((file: any) => file.file.url),
                        name: data.Name.title[0].plain_text || '',
                        description: data.Description.rich_text[0].plain_text || '',
                    })))))()

                return productsFetch
            }
        },
        public: {



        }

    },



}

export default productsDB

