import React from 'react'
import BusinessItem from '../../components/MarketplaceBusiness/BusinessItem'
import Navbar from '../../components/Navbar-Navigation/Navbar'

function BusinessesPage() {
  let businesses = [
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },
    {
      name: "Hi dia",
      img: '/Hidia.png'
    },

  ]
  return (
    <div>
      <Navbar/>
      <div className='mt-5 mx-10'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>Emprendimientos que hacen parte de nuestra plataforma!</h1>
          <p className='mt-3 text-lg font-semibold'>Presiona sobre cada uno de ellos para que conozcas lo que son y sus productos</p>
        </div>
        <div className='grid grid-cols-5 gap-x-4 gap-y-8 mt-8'>
          {businesses.map((bus, index) => (
            <BusinessItem business={bus} key={index}/>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default BusinessesPage