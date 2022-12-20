import Featured from "@components/Featured"
import Grid from "@components/Grid"
import Hero from "@components/Hero"
import LogoCloud from "@components/LogoCloud"
import MediaRow from "@components/MediaRow"
import Summary from "@components/Summary"
import PageLayout from "@layouts/PageLayout"
import PageService from "@services/pages"


export async function getStaticProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    },
    revalidate: 1
  }
}



const HomePage = ({ page }) => {

  const { hero, featured, mediaRow, summary, grid, logoCloud } = page?.data ?? null

  return (
    <>
      <Hero {...hero} />,
      <Featured {...featured} />
      <Grid {...grid} />
      <MediaRow {...mediaRow} />
      <LogoCloud {...logoCloud} />
      <Summary {...summary} />
    </>
  )
}

HomePage.layout = PageLayout

export default HomePage


