import React from 'react'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import ChooseFlight from '../../components/ChooseFlight/ChooseFlight';
import './Home.css';

function Home() {
  
  return (
    <div className='home'>
        <ChooseFlight />
    </div>
  )
}

export default Home