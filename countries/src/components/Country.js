import React from 'react'
import Languages from './Languages'

const Country = ({ country }) => {
  console.log('country', country.languages)
  return (
    <div>
      <h2>{country.name}</h2>
      <p>
        capital {country.capital} <br></br>
        population {country.population}
      </p>
      <h3>languages</h3>
      <Languages languages={country.languages} />
      <br></br>
      <img height="200" src={country.flag} alt='flag'/>
    </div>
  )
}

export default Country
