import NotionService from "@services/notion";
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

import store from "@assets/data/store.json"

export type DatabaseProps = {
    id?: string,
    version?: number | string,
    store?: any,
    data?: any,
    init?: Function
    methods?: any
}

const productsDB: DatabaseProps = {
    id: 'productsDB',
    version: Date.now(),
    store: store,
    init: async () => {

    },

    methods: {
        private: {
            fetchProducts: async () => {
                const { notion } = NotionService.interface

                const fetcher = async () => fetch(notion, {
                    method: 'GET',
                })

                const staticFetch = store.map((storeData) => {
                    return storeData.properties
                })

                const productsFetch = (async () => await fetcher()
                    .then(res => res.json())
                    .then(data => data.map(data => data.properties))
                    .then(data => data.filter((data) => data.Type.select.name === '🛍️Product'))
                    .then(data => Array.from(data.map(data => ({
                        advertisement: data.Advertisements?.files[0].file.url || null,
                        price: data.Price.number || '',
                        id: data.ID.rich_text[0].plain_text || '',
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

