import Hero from "@components/Hero"
import PageService from "@services/pages"
import Featured from "@views/components/Featured"
import MediaRow from "@views/components/MediaRow"
import Summary from "@views/components/Summary"
import PageLayout from '@views/layouts/PageLayout'
import { useEffect } from "react"

const HomePage = ({ page }) => {

  useEffect(() => {
    console.log(`[Natures Secret@1.0.0]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <Hero {...page.data.hero} />
      <Featured {...page.data.featured} />
      <MediaRow {...page.data.mediaRow} />
      <Summary {...page.data.summary} />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  const { getPage } = PageService.methods

  const pageData = await getPage('home')

  return {
    props: {
      page: pageData
    },
    revalidate: 3
  }
}