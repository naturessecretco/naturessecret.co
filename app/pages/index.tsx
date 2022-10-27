import Featured from "@components/Featured"
import Grid from "@components/Grid"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Summary from "@components/Summary"
import PageService from "@services/pages"
import LogoCloud from "@views/components/LogoCloud"

const HomePage = ({ page: { data } }) => {

  const { hero, featured, mediaRow, summary, grid, logoCloud } = data

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

