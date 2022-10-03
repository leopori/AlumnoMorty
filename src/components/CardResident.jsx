import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/CardResident.css'
const CardResident = ({url}) => {
    
        const [ressident, setRessident] = useState()
            useEffect(() => {
                axios.get(url)
                .then(res => setRessident(res.data))
                .catch(err => console.log(err))
            }, [])
            console.log(ressident);
            
  return (
    <article className='card'>
        <header className='card__header'>
            <img className='card_img' src={ressident?.image} alt="imagen" />
            <div className='card_container-status' >
                <div className= {`Card__circle-status ${ressident?.status}`}> </div>
                <span className='card__status'>{ressident?.status}</span>
                
            </div>
        </header>
        <section className='card__body'> 
            <h3 className='card__name'>{ressident?.name}</h3>
            <ul className='card__list'>
                <li className='card__itam'><span className='card__spam'>Spices: </span>{ressident?.species}</li>
                <li className='card__itam'><span className='card__spam'>Origin: </span>{ressident?.origin.name}</li>
                <li className='card__itam'><span className='card__spam'>Episodes: </span>{ressident?.episode.length}</li> 
            </ul>
        </section>
    </article>
  )
}

export default CardResident