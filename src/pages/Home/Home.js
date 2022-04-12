import React from 'react'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import ChooseFlight from '../../components/ChooseFlight/ChooseFlight';


function Home() {
  
  return (
    <div className='home'>
        <Header />
        <Menu />
        <ChooseFlight />
    </div>
  )
}

export default Home