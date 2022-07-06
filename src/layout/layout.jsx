import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
function layout(props) {
  return (
    <>
        <Header />
            {props.children}
        <Footer />
    </>
  )
}

export default layout