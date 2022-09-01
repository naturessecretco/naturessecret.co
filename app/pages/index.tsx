import PageLayout from "@layouts/PageLayout"
import ContentGrid from '@components/ContentGrid'
import SimpleForm from '@components/SimpleForm'
import ContentArray from '@components/ContentArray'
import DataRow from "@views/components/DataRow"
import DataCarousel from "@views/components/DataCarousel"
import ContentRow from "@views/components/ContentRow"
import ComplexCarousel from "@views/components/ComplexCarousel"
import Summary from "@components/Summary"
import Hero from "@components/Hero"
import ContentCarousel from "@views/components/ContentCarousel"
import type { NextPage } from 'next'

import getDataPage from "@services/getDataPage"
import { useEffect } from "react"

const HomePage: NextPage = ({ pageData }) => {

  useEffect(() => {

    console.log(pageData)
  }, [])

  return (

    <PageLayout metaData={pageData.metaData}>
      <Hero {...pageData.hero} />
    </PageLayout>

  )

}

export default HomePage


export async function getStaticProps() {

  let dataQuery = await getDataPage().catch(err => {
    console.log(err)
  })

  return {
    props: {
      pageData: dataQuery
    }
  }


}

/*
     <SimpleForm />
      <DataRow />
      <ContentCarousel />
      <DataCarousel />
      <ComplexCarousel />
      <ContentRow />
      <Summary />
      */