import { useEffect, useState } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import axios from 'axios'
import LocatioinInfo from './components/LocatioinInfo'
import CardResident from './components/CardResident'
import ErrorScreen from './components/ErrorScreen'
import FilterList from './components/FilterList'


function App() {
  // guardar location
  const [location, setLocation] = useState()
  // guardar la informacion del imput
  const [searchInput, setSearchInput] = useState()
    // guardar las sugerencias del estados
   const [suggestList, setsuggestList] = useState() 
    //define si hay un error
   const [hasError, setHasError] = useState(false)

   useEffect(() => {
      let id = getRandomNumber()
      if(searchInput){
        id=searchInput
      }
    const URL =`https://rickandmortyapi.com/api/location/${id}`
      axios.get(URL)
      .then(res => {
        setHasError(false)
        setLocation(res.data)
      } )
      .catch(err=> setHasError(true))

   }, [searchInput])
  //  console.log(location);

    const handeleSubmit = e => {
      e.preventDefault()
      setSearchInput(e.target.idLocation.value)

    }

    const handleChange = e =>{
          if(e.target.value===''){
            suggestList()
          }else{

       const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`
            axios.get(URL)
              .then(res => setsuggestList(res.data.results))
              .catch(err => console.log(err))
                }
      }

  return (
    <div className="App">
        <h1 className='title_main'>"Rick and Morty"</h1>
        <form  onSubmit={handeleSubmit}> 
          <input className='App_input' placeholder='Enter another number from 1 to 126' type="text" id='idLocation' onChange={handleChange} />
          <button className='App_buttoon'>Search</button>
          <FilterList className="App_filterlist" suggestList={suggestList} setSearchInput={setSearchInput} />
        </form >
            {
              hasError ?
              <ErrorScreen />
              :
              <>
              <LocatioinInfo location={location} 
                            setSearchInput={setSearchInput} />
              <div className='card-container'>
              {
                location?.residents.map(url => (
                  <CardResident key={url} url={url}/>
                ))
              }

              </div>
              </>
            }
       
    </div>
  )
}

export default App
