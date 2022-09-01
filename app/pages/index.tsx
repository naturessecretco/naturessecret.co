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



const HomePage: NextPage = () => {

  return (

    <PageLayout>
      <Hero />
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
