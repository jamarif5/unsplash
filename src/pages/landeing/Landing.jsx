import React from 'react'
import { Fillter, Navbar } from "../../global/component/navbar"
import Hero from './component/Hero'
import Imgcollection from '../../global/component/imgecolection/'
import './landing.scss'
function Landing() {
  return (
<div className='landing'>
<Navbar/>
<Fillter/>

<Hero/>
<Imgcollection/>

</div>
  )
}

export default Landing