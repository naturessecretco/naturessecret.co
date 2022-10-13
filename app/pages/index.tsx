import Featured from "@components/Featured"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"
import Grid from "@components/Grid"
import CommentBox from "@components/CommentBox"
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"
import LogoCloud from "@views/components/LogoCloud"
import { useEffect } from "react"

const HomePage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])


  const { data: { hero, featured, product, mediaRow, summary, grid }, layout } = page

  return (
    <PageLayout {...layout}>
      <Hero {...hero} />
      <Featured {...featured} />
      <Product {...product} />
      <Grid {...grid} />
      <MediaRow {...mediaRow} />
      <LogoCloud/>
      <Summary {...summary} />
      <CommentBox />
    </PageLayout>
  )
}

export default HomePage

export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    },
  }
}

