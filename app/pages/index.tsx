import SimpleForm from '@components/SimpleForm'
import Summary from "@components/Summary"
import PageLayout from "@layouts/PageLayout"
import ComplexCarousel from "@views/components/ComplexCarousel"
import ContentCarousel from "@views/components/ContentCarousel"
import ContentRow from "@views/components/ContentRow"
import DataCarousel from "@views/components/DataCarousel"
import DataRow from "@views/components/DataRow"
import type { IPage } from '@typings/Page'
import Hero from "@components/Hero"
import getDataPage from "@services/getDataPage"
import { useEffect } from "react"
import ContentArray from '@views/components/ContentArray'


const HomePage = ({ pageData }: IPage) => {

  useEffect(() => {
    console.log(pageData)
  }, [pageData])

  return (
    <PageLayout metaData={pageData.metaData}>
      <Hero />
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

  const dataQuery = await getDataPage().catch(err => {
    console.log(err)
  })

  return {
    props: {
      pageData: dataQuery,
      version: Date.now()
    }
  }


}
