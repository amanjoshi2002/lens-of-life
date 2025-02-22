
import React from 'react'

import Hero from '../../../components/Hero'
import Breadcrumb1 from '../../../components/breadcrum1'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import CategorySlider from '../../../components/blogCategory'


export default function page() {
  return (
   <>
<Navbar/>
<Breadcrumb1 imageUrl={'/images/1.jpg'} text={'Blogs'}/>
<CategorySlider/>
<Footer/>

   </>
  )
}