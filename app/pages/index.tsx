import Featured from "@views/components/Featured"
import LogoRow from "@components/LogoRow"
import homePage from '@pages/homePage'
import PageLayout from '@views/layouts/PageLayout'
import Hero from "@components/Hero"
import Gallery from "@components/Gallery"
import MediaRow from "@views/components/MediaRow"
import Summary from "@views/components/Summary"
const HomePage = ({ pageData }) => {

  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <LogoRow />

      <Featured {...pageData.featured} />
      <MediaRow />

      <Summary />

      <Gallery />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  return {
    props: {
      pageData: homePage.init()
    }
  }
}