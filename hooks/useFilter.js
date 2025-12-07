import { useState } from "react";

export default function (data, nameExtractor) {
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim().toLowerCase();

  const filteredData = data.filter((country) => {
    if (trimmedQuery === "") return true;
    if (!nameExtractor(country)) return false; // name doesn't exists: return false
    return nameExtractor(country).toLowerCase().includes(trimmedQuery) ;
  });

  return [filteredData, setQuery];
}
