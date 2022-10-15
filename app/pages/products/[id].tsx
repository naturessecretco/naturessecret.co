import Featured from "@components/Featured"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"

import PageService from "@services/pages"

import { useEffect } from "react"

const ProductsPage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])


  const { data: { hero, featured, product, mediaRow, summary }, layout } = page

  return (

    <>
      <Hero {...hero} />
      <Featured {...featured} />
      <Product {...product} />
      <MediaRow {...mediaRow} />
      <Summary {...summary} />
    </>

  )
}

export default ProductsPage

export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    },
  }
}

