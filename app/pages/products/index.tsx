import Featured from "@components/Featured"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"

import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import { useEffect } from "react"

const ProductsIndexPage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <Hero {...page.data.hero} />
      <Featured {...page.data.featured} />
      <Product {...page.data.product} />
      <MediaRow {...page.data.mediaRow} />
      <Summary {...page.data.summary} />
    </PageLayout>
  )
}

export default ProductsIndexPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("home")

  return {
    props: {
      page: page
    },

  }
}

