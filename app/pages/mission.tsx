import Hero from "@components/Hero"
import Featured from "@components/Featured"
import MediaRow from "@components/MediaRow"
import Summary from "@components/Summary"
import Product from "@components/Product"
import PageService from "@services/pages"
import PageLayout from '@layouts/PageLayout'

import { useEffect } from "react"

const MissionPage = ({ page }) => {

  const version = "0.0.1"

  useEffect(() => {
    console.log(`[Naturesecret.co@${version}]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>

    </PageLayout>
  )
}

export default MissionPage

export async function getServerSideProps() {

  const { getPage } = PageService.methods
  
  const page = await getPage("mission")

  return {
    props: {
      page: page
    }
  }
}