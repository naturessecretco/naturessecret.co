import Hero from "@components/Hero"
import Featured from "@components/Featured"
import MediaRow from "@components/MediaRow"
import Summary from "@components/Summary"
import Product from "@components/Product"
import PageService from "@services/pages"
import PageLayout from '@layouts/PageLayout'

import { useEffect } from "react"

const HomePage = ({ page }) => {

  const version = "0.0.1"

  useEffect(() => {
    console.log(`[Naturesecret.co@${version}]`, page)
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

export default HomePage

export async function getStaticProps() {

  const { getPage } = PageService.methods
  
  const page = await getPage("home")

  return {
    props: {
      page: page
    },
    revalidate: 1
  }
}