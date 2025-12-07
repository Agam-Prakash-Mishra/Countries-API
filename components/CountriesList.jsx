import React, { useEffect, useState } from 'react'
// import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'

export default function CountriesList({ filteredData }) {
  // const [countriesData, setCountriesData] = useState([])

  // const [filteredData, setQuery] = useFilter(data, () => '')

  // useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,languages,currencies,borders')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCountriesData(data)
  //     })
  // }, [])

  if (!filteredData.length) {
    return <CountriesListShimmer />
  }
  return (
    <>
      <div className="countries-container">
        {
        // countriesData
        //   .filter((country) =>
        //     country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query) 
        //   )
        filteredData
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>
    </>
  )
}
