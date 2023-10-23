import HotelLayout from 'components/HotelLayout'
import Main from 'components/Main'
import { ReactElement } from 'react'

export default function LandingMain() {
  return <Main />
}

LandingMain.getLayout = function getLayout(page: ReactElement) {
  return <HotelLayout>{page}</HotelLayout>
}
