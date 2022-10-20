import Product from "@components/Product"
import PageService from "@services/pages"
import Grid from "@components/Grid"
import { useEffect } from "react"

const ProductsPage = ({ product }) => {


  return (

    <>

    </>

  )
}

export default ProductsPage

export async function getServerSideProps({ params }) {

  const { getPage } = PageService()

  const page = await (await getPage("products")).pages

  const product = page.data.find((product) => product.id === params.id) ?? null

  return {
    props: {
      product
    },
  }
}

