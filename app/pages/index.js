import HomeLayout from "@layouts/HomeLayout"
import Featured from "@includes/Featured"
import FAQs from "@includes/FAQs"
import Store from "@includes/Store"
import Subscribe from "@includes/Subscribe"
import FloatingNavigator from "@components/FloatingNavigator"


export default function HomePage() {

  return (
    <HomeLayout>
      <Featured />
      <FAQs />
      <Store />
      <Subscribe/>
      <FloatingNavigator/>
    </HomeLayout>
  )
}
