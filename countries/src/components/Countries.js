import React from 'react'
import Country from './Country'

const Countries = ({countries, search}) => {
  const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

  console.log('countries to show', countriesToShow)
  if (countriesToShow.length > 10){
    return (
      <div>Too many countries, specify another filter</div>
    )
  }else if ((countriesToShow.length === 1)){
    return (
      <div>
      <Country country={countriesToShow[0]} />
      </div>
    )
  }else{
    return (
      <ul>
        {countriesToShow.map((country) => <li key={country.name}>{country.name}</li>)}
      </ul>
    )
  }


}

export default Countries
