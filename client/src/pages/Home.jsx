import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import Carousel from '../Components/Corousel'
import Items from '../Components/Items'

function Home() {
  return (
    <div>
      <Categories/>
      <Carousel/>
      <Items/>
    </div>
  )
}

export default Home
