import Image from 'next/image'
import NavBar from './components/Navbar'
import Carousel from './components/Carousel'
import Aboutus from './components/Aboutus'
import Jumbotron from './components/Jumbotron'
import Servicos from './components/Servicos'
import Footer from './components/Footer'


export default function Home() {
  return (
    <>
    <NavBar />
    <Carousel />
    <Aboutus />
    <Jumbotron />
    <Servicos />
    <Footer />
    </>
  )
}
