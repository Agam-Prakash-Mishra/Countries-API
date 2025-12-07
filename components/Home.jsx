import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesList from "./CountriesList";
import { useTheme } from "../hooks/useTheme";
import useFilter from "../hooks/useFilter";

export default function Home() {
  const [countriesData, setCountriesData] = useState([]);
  const [isDark] = useTheme();
  // filter HOOK
  const [filteredData, setQuery] = useFilter(countriesData, (country) => country.name.common+" "+country.region);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,languages,currencies,borders"
    )
      .then((res) => res.json())
      .then((data) => setCountriesData(data))
      .catch((err) => {
        console.error(err);
        console.error("Couldn't fetch the data!!!!!!!");
      });
  }, []);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountriesList filteredData={filteredData} />
    </main>
  );
}
