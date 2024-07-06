import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import { Gents, Ladies} from '../data'
import WomenCollections from '../components/WomenCollections'


const Mainpage = () => {

    const [gentsFashion, setGentsFashion] = useState(Gents)
    const [ladiesFashion, setLadiesFashion] = useState(Ladies)

    console.log(Gents);
    console.log(Ladies);
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion= {gentsFashion} />
        <WomenCollections ladiesFashion= {ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default Mainpage
