import Featured from "@includes/Featured"
import HomeLayout from "@layouts/HomeLayout"

export default function HomePage() {

  return (
    <HomeLayout>
      <Featured title="Wildcrafted Seamoss" 
                status={'live'} />
    </HomeLayout>
  )
}
