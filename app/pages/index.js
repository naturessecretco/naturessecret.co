import HomeLayout from "@layouts/HomeLayout"
import Hero from "@tailblocks/Hero"
import CTA from "@tailblocks/CTA"



export default function HomePage() {

  return (
    <HomeLayout>
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <CTA />
    </HomeLayout>
  )
}
