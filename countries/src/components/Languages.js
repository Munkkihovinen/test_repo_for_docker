import React from 'react'

const Languages = ({languages}) => {
  return(
    <div>
      {languages.map(language => <li key={language.name}> {language.name} </li>)}
    </div>
  )
}

export default Languages
