import React from 'react'

function UserProfileCharacteristic({title, value} : {title:string, value:string | number | undefined}) {
  return (
    <div className='flex flex-col mt-5'>
        <h2 className='text-2xl  text-tiffany-green'>{title}</h2>
        <div className=''><p className='text-lg pt-3'>{value}</p></div>
        
    </div>
  )
}

export default UserProfileCharacteristic