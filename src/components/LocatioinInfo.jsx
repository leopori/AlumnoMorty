import React from 'react'

const LocatioinInfo = ({location}) => {
    console.log(location);
  return (
   <article  className='location_info'>
        <h2>{location?.name}</h2>
        <ul>
            <li> <span>Type: </span> </li>
            <li> <span>Dimention: </span>{location?.dimension}</li>
            <li> <span>Population: </span>{location?.residents.length}</li>
        </ul>
   </article>
  )
}

export default LocatioinInfo