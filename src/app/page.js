import React from 'react'
import Banner from './composants/Banner'
import Cards from './composants/Cards'
import Projets from './composants/Projets'
import BarreContact from './composants/BarreContact'

export default function page() {
  return (
    <div>
      <div id="banner">
        <Banner />
      </div>
      <div id="projets">
        <Projets />
      </div>
      <div>
        <BarreContact />
      </div>
      <div id="cards">
        <Cards />
      </div>
    </div>
  )
}
