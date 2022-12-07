import React from 'react'
import HeaderNav from '../HeaderNav/HeaderNav'
// import Navbar from '../Navbar/Navbar'
// import Header from '../Header/Header'
import Different from '../Different/Different'
import Carousel from '../Carousel/Carousel'
import SubFooter from '../SubFooter/SubFooter'
import Footer from '../Footer/Footer'


const Main = () => {
  return (
    <div>
      <HeaderNav />
      {/* <Navbar /> 
      <Header /> */}
      <Different />
      <Carousel />
      <SubFooter />
      <Footer />
    </div>
  )
}

export default Main
