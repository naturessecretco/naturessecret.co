import Product from "@components/Product"
import PageService from "@services/pages"

import { useEffect } from "react"

const ProductsPage = ({ page: { data } }) => {


  return (

    <>
      <Product {...data[0]} />

    </>

  )
}

export default ProductsPage

export async function getServerSideProps({ params }) {

  const { getPage } = PageService()

  const page = await (await getPage("products")).pages

  return {
    props: {
      page
    },
  }
}

