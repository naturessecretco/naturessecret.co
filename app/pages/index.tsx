import Featured from "@views/components/Featured"
import LogoRow from "@components/LogoRow"
import homePage from '@pages/homePage'
import PageLayout from '@views/layouts/PageLayout'
import Hero from "@components/Hero"


const HomePage = ({ pageData }) => {

  return (
    <PageLayout {...pageData.layout}>
      <Hero />
      <Featured {...pageData.hero} />
      <LogoRow />
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