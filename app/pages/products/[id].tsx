import Hero from "@components/Hero"
import ProductsSearch from "@views/components/ProductsSearch"
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import productsDB from "@models/data/db/products"
import { useEffect } from "react"
import Product from "@views/components/Product"

const ProductPage = ({ page }) => {

    useEffect(() => {
        console.log(`[Naturesecret.co@${page.version}]`, page)
    }, [page])

    return (
        <PageLayout {...page.layout}>
            <Product {...page.data.product} />
        </PageLayout>
    )
}

export default ProductPage


export async function getServideSideProps({ params }) {

    const { getPage } = PageService

    const { layout, pages: { data } } = (await getPage("products"))

    const product = data.filter((product) => product.id === params.id)[0]

    return {
        props: {
            page: {
                layout,
                data: {
                    product
                }
            },
        },

    }
}

