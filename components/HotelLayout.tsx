import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function HotelLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  )
}
