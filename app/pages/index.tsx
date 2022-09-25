import Hero from "@components/Hero"
import Featured from "@components/Featured"
import MediaRow from "@components/MediaRow"
import Summary from "@components/Summary"
import Product from "@components/Product"
import PageService from "@services/pages"
import PageLayout from '@layouts/PageLayout'

import meta from "@models/configs/meta"
import { useEffect } from "react"

const HomePage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${meta.version}]`, page)
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

export async function getServerSideProps() {

  const { getPage } = PageService.methods

  const page = await getPage("home")

  return {
    props: {
      page: page
    }
  }
}