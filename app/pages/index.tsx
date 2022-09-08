import SimpleForm from '@components/SimpleForm'
import Summary from "@components/Summary"
import PageLayout from "@layouts/PageLayout"
import ComplexCarousel from "@views/components/ComplexCarousel"
import ContentCarousel from "@views/components/ContentCarousel"
import ContentRow from "@views/components/ContentRow"
import DataCarousel from "@views/components/DataCarousel"
import DataRow from "@views/components/DataRow"
import Hero from "@components/Hero"
import ContentArray from '@views/components/ContentArray'

import { useEffect } from "react"

import type { IPage } from '@typings/Page'
import homePage from '@pages/homePage'


const HomePage = ({ pageData }: IPage) => {

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <PageLayout metaData={pageData.metaData}>
      <Hero {...pageData.hero} />
      <ContentArray />
      <SimpleForm />
      <DataRow />
      <ContentCarousel />
      <DataCarousel />
      <ComplexCarousel />
      <ContentRow />
      <Summary />
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
